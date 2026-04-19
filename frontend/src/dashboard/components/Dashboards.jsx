import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { getToken } from "../../utils/auth";
import { watchlist as initialWatchlist } from "../data/data";
import { toast } from "react-toastify";
import "../dashboard.css";

const assetFilters = [
  { id: "all", label: "All" },
  { id: "stock", label: "Stocks" },
  { id: "forex", label: "Forex" },
  { id: "crypto", label: "Crypto" },
];

const formatUSD = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(Number(value) || 0);

const WatchlistItem = React.memo(({ stock, active, onSelect }) => {
  return (
    <button
      type="button"
      className={`watch-item ${active ? "active" : ""}`}
      onClick={onSelect}
    >
      <div>
        <p className="watch-symbol">{stock.symbol}</p>
        <p className="watch-meta">{stock.name} • {formatUSD(stock.price)}</p>
      </div>
      <span className={stock.isDown ? "watch-change red" : "watch-change green"}>{stock.changePercent}</span>
    </button>
  );
});

const Dashboards = () => {
  const [watchlist, setWatchlist] = useState(() => initialWatchlist.map((item) => ({ ...item })));
  const [assetFilter, setAssetFilter] = useState("all");
  const [selectedSymbol, setSelectedSymbol] = useState(initialWatchlist[0]?.symbol || "");
  const [selectedStock, setSelectedStock] = useState(initialWatchlist[0] || null);
  const [positions, setPositions] = useState([]);
  const [history, setHistory] = useState([]);
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState("orders");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(initialWatchlist[0]?.price || 0);
  const [status, setStatus] = useState("");
  const chartRef = useRef(null);

  const filteredWatchlist = useMemo(
    () =>
      assetFilter === "all"
        ? watchlist
        : watchlist.filter((item) => item.type === assetFilter),
    [assetFilter, watchlist]
  );

  const symbolCode = useMemo(
    () => selectedStock?.chartSymbol || selectedStock?.symbol || "NASDAQ:AAPL",
    [selectedStock]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setWatchlist((current) =>
        current.map((stock) => {
          const changeFactor = 1 + (Math.random() * 1.2 - 0.6) / 100;
          const nextPrice = Number((stock.price * changeFactor).toFixed(2));
          const diff = Number((((nextPrice - stock.price) / stock.price) * 100).toFixed(2));
          return {
            ...stock,
            price: nextPrice,
            changePercent: `${diff >= 0 ? "+" : ""}${diff.toFixed(2)}%`,
            isDown: diff < 0,
          };
        })
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const current = watchlist.find((item) => item.symbol === selectedSymbol) || watchlist[0];
    setSelectedStock(current);
    setPrice(current?.price || 0);
  }, [selectedSymbol, watchlist]);

  useEffect(() => {
    if (!filteredWatchlist.some((item) => item.symbol === selectedSymbol)) {
      setSelectedSymbol(filteredWatchlist[0]?.symbol || watchlist[0]?.symbol);
    }
  }, [filteredWatchlist, selectedSymbol, watchlist]);

  const fetchPositions = useCallback(async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/allPositions`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      setPositions(res.data || []);
    } catch (err) {
      console.error("Positions fetch failed:", err.response?.data?.message || err.message);
    }
  }, []);

  const fetchHistory = useCallback(async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/allOrders`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      setHistory(res.data || []);
    } catch (err) {
      console.error("History fetch failed:", err.response?.data?.message || err.message);
    }
  }, []);

  useEffect(() => {
    fetchPositions();
    fetchHistory();
  }, [fetchPositions, fetchHistory]);

  useEffect(() => {
    const renderChart = () => {
      if (!chartRef.current || !window.TradingView) return;
      chartRef.current.innerHTML = "";
      new window.TradingView.widget({
        autosize: false,
        height: 400,
        width: '100%',
        symbol: symbolCode,
        interval: "60",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "3",
        locale: "en",
        toolbar_bg: "#0f172a",
        enable_publishing: false,
        allow_symbol_change: false,
        show_volume: false,
        container_id: "tradingview-widget",
      });
    };

    if (window.TradingView) {
      renderChart();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = renderChart;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [symbolCode]);

  const handleSelectStock = useCallback((symbol) => {
    setSelectedSymbol(symbol);
    setActiveTab("positions");
    setStatus("");
  }, []);

  const handleQuantity = useCallback((event) => {
    setQuantity(Number(event.target.value) || 1);
  }, []);

  const handlePrice = useCallback((event) => {
    setPrice(Number(event.target.value) || 0);
  }, []);

  const handleOrder = useCallback(
    async (mode) => {
      if (!selectedStock) return;
      try {
        const order = {
          name: selectedStock.name,
          qty: quantity,
          price,
          mode,
        };
        await axios.post(`${process.env.REACT_APP_API_URL}/newOrder`, order, {
          headers: { Authorization: `Bearer ${getToken()}` },
        });
        setOrders((prev) => [{ ...order, id: Date.now(), timestamp: new Date().toISOString() }, ...prev].slice(0, 20));
        toast.success(`Order placed: ${mode} ${quantity} ${selectedStock.symbol}`);
        // Refresh positions and history after order
        fetchPositions();
        fetchHistory();
      } catch (err) {
        toast.error(err.response?.data?.message || "Unable to place order");
      }
    },
    [price, quantity, selectedStock, fetchPositions, fetchHistory]
  );

  const tabContent = useMemo(() => {
    if (activeTab === "orders") {
      return orders.length ? (
        <table className="data-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Side</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.name}</td>
                <td className={order.mode === "BUY" ? "positive" : "negative"}>{order.mode}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>{new Date(order.timestamp).toLocaleTimeString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="empty-state">No orders yet. Place a trade to populate order history.</div>
      );
    }

    if (activeTab === "history") {
      return history.length ? (
        <table className="data-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Side</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={item._id || index}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{Number(item.price).toFixed(2)}</td>
                <td className={item.mode === "BUY" ? "positive" : "negative"}>{item.mode}</td>
                <td>{item.createdAt ? new Date(item.createdAt).toLocaleString() : "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="empty-state">No trade history yet. Place a trade to populate history.</div>
      );
    }

    return positions.length ? (
      <table className="data-table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Qty</th>
            <th>Avg</th>
            <th>Last</th>
            <th>Day</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((position, index) => (
            <tr key={index}>
              <td>{position.name}</td>
              <td>{position.qty}</td>
              <td>{position.avg?.toFixed(2)}</td>
              <td>{position.price?.toFixed(2)}</td>
              <td className={position.isLoss ? "negative" : "positive"}>{position.day}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <div className="empty-state">No positions available.</div>
    );
  }, [activeTab, history, orders, positions]);

  return (
    <div className="dashboard-root">
      <div className="dashboard-main">
        <section className="panel watchlist-panel">
              <div className="section-header">
            <div>
              <h2 className="section-title">Live market movers</h2>
            </div>
          </div>
          <div className="asset-filters">
            {assetFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`asset-filter-button ${assetFilter === filter.id ? "active" : ""}`}
                onClick={() => setAssetFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="watchlist-items">
            {filteredWatchlist.map((stock) => (
              <WatchlistItem
                key={stock.symbol}
                stock={stock}
                active={stock.symbol === selectedSymbol}
                onSelect={() => handleSelectStock(stock.symbol)}
              />
            ))}
          </div>
        </section>

        <section className="panel chart-panel">
          
          <div className="chart-container">
            <div id="tradingview-widget" ref={chartRef} className="chart-frame" />
          </div>
          <div className="chart-header">
            <div className="stock-details">
              <div className="stock-summary">
                <h2 className="stock-name">{selectedStock ? `${selectedStock.symbol} — ${selectedStock.name}` : "AAPL — Apple Inc."}</h2>
               
              </div>
              <span className={selectedStock?.isDown ? "stock-change negative" : "stock-change positive"}>
                 <span className="stock-price" style={{marginRight:"1rem"}}>{formatUSD(selectedStock?.price)}</span>
                {selectedStock?.changePercent}
              </span>
            </div>
            <div className="trade-panel">
              <label className="trade-label">
                Qty
                <input className="trade-input" type="number" min="1" value={quantity} onChange={handleQuantity} />
              </label>
              <label className="trade-label">
                Price
                <input className="trade-input" type="number" min="0" value={price} onChange={handlePrice} />
              </label>
              <div className="trade-actions">
                <button type="button" className="trade-button buy" onClick={() => handleOrder("BUY")}>Buy</button>
                <button type="button" className="trade-button sell" onClick={() => handleOrder("SELL")}>Sell</button>
              </div>
            </div>
          </div>
        </section>

        <section className="panel tabs-panel">
          <div className="tabs-header">
            <button className={`tab-button ${activeTab === "positions" ? "active" : ""}`} onClick={() => setActiveTab("positions")}>Positions</button>
            <button className={`tab-button ${activeTab === "orders" ? "active" : ""}`} onClick={() => setActiveTab("orders")}>Orders</button>
            <button className={`tab-button ${activeTab === "history" ? "active" : ""}`} onClick={() => setActiveTab("history")}>History</button>
          </div>
          <div className="tab-content">{tabContent}</div>
        </section>
      </div>
    </div>
  );
};

export default Dashboards;
