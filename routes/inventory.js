var express = require('express');
var router = express.Router();
var inventoryschema = require('../models/inventoryschema');

router.get('/', async function(req, res, next) {

    
    /*var inventory = new inventoryschema({
        storenumber: 1,
        storelocation: 'Birmingham',
        pepsi: 100,
        mountaindew: 100,
        starry: 100,
        cocacola: 100,
        drpepper: 100,
        doc360: 100,
        fanta: 100,
        sprite: 100,
        water: 100,
        gatorade: 100,
        redbull: 100,

    });https://cloud.mongodb.com/v2/654a464fd3233f139de6b513#/dataAPI
try {
    await inventory.save();
} catch (err) {
    console.log(err);
}
*/






var inventory = await inventoryschema.find();

res.render('inventory',{ inventory: inventory});

});

router.get('/add', function(req, res, next) {
    res.render('addstore');
});

router.get('/transfer', function(req, res, next) {

    let id = req.query._id;

    let inventory = inventoryschema.findById(id);
    let warehouseinventory = inventoryschema.findById('65763fdc7bf22573c1efb38b');


    res.render('transfer', {inventory: inventory, id: id});
});

router.post('/transfer', async function(req, res, next) {
    console.log(req.body.pepsi);
 
    const inventory = await inventoryschema.findById(req.body._id);
    const warehouseinventory = await inventoryschema.findById('65763fdc7bf22573c1efb38b');

   
    console.log(inventory.pepsi);
    console.log(req.body._id);

    await inventoryschema.findByIdAndUpdate({_id: req.body._id}, {
       pepsi: Number(inventory.pepsi) + Number(req.body.pepsi),
        mountaindew: Number(inventory.mountaindew) + Number(req.body.mountaindew),
        starry: Number(inventory.starry) + Number(req.body.starry),
        cocacola: Number(inventory.cocacola) + Number(req.body.cocacola),
        drpepper: Number(inventory.drpepper) + Number(req.body.drpepper),
        doc360: Number(inventory.doc360) + Number(req.body.doc360),
        fanta: Number(inventory.fanta) + Number(req.body.fanta),
        sprite: Number(inventory.sprite) + Number(req.body.sprite),
        water: Number(inventory.water) + Number(req.body.water),
        gatorade: Number(inventory.gatorade) + Number(req.body.gatorade),
        redbull: Number(inventory.redbull) + Number(req.body.redbull),

    


        
    });

    await inventoryschema.findByIdAndUpdate({_id: '65763fdc7bf22573c1efb38b'}, {
        pepsi: Number(warehouseinventory.pepsi) - Number(req.body.pepsi),
        mountaindew: Number(warehouseinventory.mountaindew) - Number(req.body.mountaindew),
        starry: Number(warehouseinventory.starry) - Number(req.body.starry),
        cocacola: Number(warehouseinventory.cocacola) - Number(req.body.cocacola),
        drpepper: Number(warehouseinventory.drpepper) - Number(req.body.drpepper),
        doc360: Number(warehouseinventory.doc360) - Number(req.body.doc360),
        fanta: Number(warehouseinventory.fanta) - Number(req.body.fanta),
        sprite: Number(warehouseinventory.sprite) - Number(req.body.sprite),
        water: Number(warehouseinventory.water) - Number(req.body.water),
        gatorade: Number(warehouseinventory.gatorade) - Number(req.body.gatorade),
        redbull: Number(warehouseinventory.redbull) - Number(req.body.redbull),

    });


    res.redirect('/inventory');
}, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        res.redirect('/inventory');
    }
});




router.post('/add', async function(req, res, next) { 
  
    var inventory = new inventoryschema({
        _id: req.body.id,
        storenumber: req.body.storenumber,  
        storelocation: req.body.storelocation,
        pepsi: req.body.pepsi,
        mountaindew: req.body.mountaindew,
        starry: req.body.starry,
        cocacola: req.body.cocacola,
        drpepper: req.body.drpepper,
        doc360: req.body.doc360,
        fanta: req.body.fanta,
        sprite: req.body.sprite,
        water: req.body.water,
        gatorade: req.body.gatorade,
        redbull: req.body.redbull,
    });

    try {
        await inventory.save();
        console.log("we tried to save");
        res.redirect('/inventory/add');
    } catch (err) {
        console.log(err);
    }
});

router.get('/delete', async function(req, res, next) {
    let id = req.query._id;
    console.log(id);

    try {

        await inventoryschema.findByIdAndDelete(id);
        res.redirect('/inventory');
    } catch (err) {
        
        console.log(err);
        res.redirect('/');
    }

});

module.exports = router;