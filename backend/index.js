require("dotenv").config();
const { authMiddleware } = require("./middleware/authMiddleware.js");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

const allowedOrigins = (process.env.FRONTEND_URL || "http://localhost:3000").split(",").map(o => o.trim());

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, Postman, curl)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(bodyParser.json());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/allHoldings", authMiddleware, async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", authMiddleware, async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allOrders", authMiddleware, async (req, res) => {
  let allOrders = await OrdersModel.find();
  res.json(allOrders);
});

app.post("/newOrder", authMiddleware, async (req, res) => {
  let { name, qty, price, mode } = req.body;
  qty = parseFloat(qty);
  price = parseFloat(price);

  let newOrder = new OrdersModel({
    name,
    qty: qty.toString(),
    price: price.toString(),
    mode,
  });
  await newOrder.save();

  if (mode.toUpperCase() === "BUY") {
    let existingPosition = await PositionsModel.findOne({ name });
    if (existingPosition) {
      let totalQty = existingPosition.qty + qty;
      let totalValue = existingPosition.avg * existingPosition.qty + price * qty;
      let newAvg = totalValue / totalQty;
      existingPosition.qty = totalQty;
      existingPosition.avg = newAvg;
      existingPosition.price = price;
      await existingPosition.save();
    } else {
      let newPosition = new PositionsModel({
        product: "CASH",
        name,
        qty,
        avg: price,
        price,
        net: "0%",
        day: "0%",
        isLoss: false,
      });
      await newPosition.save();
    }
  }

  res.send("Order placed and positions updated");
});

mongoose
  .connect(uri)
  .then(() => {
    console.log("DB Connected");
    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed:", err.message);
    process.exit(1);
  });
