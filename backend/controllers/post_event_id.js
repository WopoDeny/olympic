var express = require('express');
var router = express.Router();
const pool = require('../data/config');
const UserAnswerBD = require('../models/useranswer');
const UserBD = require('../models/users');



router.post('/',async (req,res) =>{
    let = req.body.answers;
    


})



module.exports = router;
