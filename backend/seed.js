require("dotenv").config();
const mongoose = require("mongoose");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require('./model/OrdersModel');

const uri = process.env.MONGO_URL;

// Holdings data
const holdings = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    qty: Math.floor(Math.random() * 10) + 1, // Random qty 1-10
    avg: 186.2,
    price: 192.34 + (Math.random() - 0.5) * 10, // Slight random variation
    net: "+3.29%",
    day: "+1.12%",
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    qty: Math.floor(Math.random() * 10) + 1,
    avg: 225.8,
    price: 238.5 + (Math.random() - 0.5) * 20,
    net: "+5.59%",
    day: "+2.34%",
  },
  {
    symbol: "EUR/USD",
    name: "Euro / US Dollar",
    qty: Math.floor(Math.random() * 20000) + 10000,
    avg: 1.0812,
    price: 1.0874 + (Math.random() - 0.5) * 0.01,
    net: "+0.56%",
    day: "-0.11%",
  },
  {
    symbol: "BTC/USD",
    name: "Bitcoin / US Dollar",
    qty: Math.random() * 0.5 + 0.1,
    avg: 62800.0,
    price: 66320.45 + (Math.random() - 0.5) * 5000,
    net: "+5.63%",
    day: "+0.94%",
  },
  {
    symbol: "SPX",
    name: "S&P 500",
    qty: Math.floor(Math.random() * 20) + 5,
    avg: 5164.0,
    price: 5250.1 + (Math.random() - 0.5) * 100,
    net: "+1.67%",
    day: "+0.47%",
  },
];

// Positions data
const positions = [
  {
    product: "CASH",
    name: "Apple Inc.",
    qty: Math.floor(Math.random() * 10) + 1,
    avg: 190.42,
    price: 192.34 + (Math.random() - 0.5) * 10,
    net: "+0.99%",
    day: "+0.65%",
    isLoss: false,
  },
  {
    product: "CASH",
    name: "Ethereum / US Dollar",
    qty: Math.random() * 2 + 0.5,
    avg: 3698.0,
    price: 3754.22 + (Math.random() - 0.5) * 200,
    net: "+1.54%",
    day: "+1.09%",
    isLoss: false,
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(uri);
    console.log("DB Connected");

    // Clear existing data to start empty
    await HoldingsModel.deleteMany({});
    await PositionsModel.deleteMany({});
    await OrdersModel.deleteMany({});

    console.log("Database cleared, starting empty");
  } catch (error) {
    console.error("Error clearing data:", error);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase();