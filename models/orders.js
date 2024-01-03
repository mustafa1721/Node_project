const mongoose = require('mongoose')
const users = require('./users').Schema

const oredrSchema = new mongoose.Schema({
    userId: users[1],
    totalAmount: {
        type: mongoose.Types.Decimal128
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
})

const orders = mongoose.model("orders", oredrSchema)

modeule.export = orders