const {Schema} = require("mongoose");

const OrdersSchema = new Schema({
    name:String,
    qty:String,
    price:String,
    mode:String,
}, {
    timestamps: true,
})

module.exports = {OrdersSchema};