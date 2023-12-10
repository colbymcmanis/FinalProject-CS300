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

router.get('/add', function(req, res, next) {
    res.render('addstore');
});

router.post('/add', async function(req, res, next) {
    var inventory = new inventoryschema({
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


module.exports = router;