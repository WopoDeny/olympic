var express = require('express');
var router = express.Router();
const OlimpiadBD = require("../models/olimpiad")

router.get('/', async function(req, res, next) {

    const olim = await OlimpiadBD.findAll()
    i = 0;
    list_name_olimpiad = [];
    list_time_start = [];
    while (i < olim.length) {
        console.log(olim)
        list_name_olimpiad.push(olim[i].name_olimpiad)
        list_time_start.push(olim[i].date_start)
        i++;
    }
    res.json({current_time: Math.floor(Date.now()/1000),
        time:1670648969, 
        flag :1670648969>Math.floor(Date.now()/1000)
    });
  });



module.exports = router;
