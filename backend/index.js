require("dotenv").config();
const {authMiddleware} =  require("./middleware/authMiddleware.js");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const { HoldingsModel } = require("./model/HoldingsModel");
const {PositionsModel} = require('./model/PositionsModel');
const {ordersModel, OrdersModel} = require("./model/OrdersModel");
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.port || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/api/auth", authRoutes)

app.get("/allHoldings", authMiddleware,async(req, res)=>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allOrders",authMiddleware, async(req, res)=>{
    let allOrders = await OrdersModel.find();
    res.json(allOrders);
});

app.post("/newOrder", authMiddleware, async(req,res)=>{
    let {name, qty, price, mode} = req.body;
    qty = parseFloat(qty);
    price = parseFloat(price);

    // Save the order
    let newOrder = new OrdersModel({
         name,
         qty: qty.toString(),
         price: price.toString(),
         mode,
    });
    await newOrder.save();

    // Update positions if BUY
    if (mode.toUpperCase() === "BUY") {
        let existingPosition = await PositionsModel.findOne({ name });
        if (existingPosition) {
            // Update existing position: recalculate avg price
            let totalQty = existingPosition.qty + qty;
            let totalValue = (existingPosition.avg * existingPosition.qty) + (price * qty);
            let newAvg = totalValue / totalQty;
            existingPosition.qty = totalQty;
            existingPosition.avg = newAvg;
            existingPosition.price = price; // Update current price
            await existingPosition.save();
        } else {
            // Create new position
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

app.listen(PORT, ()=>{
    console.log("App started");
    mongoose.connect(uri);
    console.log("DB Connected");
})