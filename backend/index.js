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

app.get("/allPositions",authMiddleware, async(req, res)=>{
    let allPositions = await PositionsModel.find();
    res.json(allPositions);
});

app.post("/newOrder", authMiddleware, async(req,res)=>{
    let newOrder = new OrdersModel({
         name:req.body.name,
    qty:req.body.qty,
    price:req.body.price,
    mode:req.body.mode,
    })
    newOrder.save();
    res.send("order saved");
});

app.listen(PORT, ()=>{
    console.log("App started");
    mongoose.connect(uri);
    console.log("DB Connected");
})