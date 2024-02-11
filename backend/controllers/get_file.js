var express = require('express');
var router = express.Router();
const fileSystem = require('fs');


const SupplementBD = require("../models/supplement");


router.get('/', async (req, res) =>{
    let name = req.params.name_suppliement;
    const file  = SupplementBD.findOne({where:
        path_supplement = name
    })
    .then((file) =>{
        if(file){
            console.log(file)

        }})

});
module.exports = router;