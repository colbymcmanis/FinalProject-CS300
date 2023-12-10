const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    storenumber: { type: Number, required: true },
    storelocation: { type: String, required: true },
    pepsi: { type: Number, required: true },
    mountaindew: { type: Number, required: true },  
    starry: { type: Number, required: true },
    cocacola: { type: Number, required: true },
    drpepper: { type: Number, required: true },
    doc360: { type: Number, required: true },
    fanta: { type: Number, required: true },
    sprite: { type: Number, required: true },
    water: { type: Number, required: true },
    gatorade: { type: Number, required: true },
    redbull: { type: Number, required: true },
    
});

const Inventory = mongoose.model('inventory', InventorySchema);

module.exports = Inventory;

