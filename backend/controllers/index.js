var express = require('express');
var router = express.Router();

const OlimpiadBD = require('../models/olimpiad');

router.get('/', async (req, res)=> {
    let id =1;
    const olimpiad = await OlimpiadBD.findAll({where: {
        'id':id, //переписать на каждый элемент !!!!!!!!!!!
    }
});
if  (olimpiad){
    res.json({
        list_id_olimpiad :olimpiad.id,
        olimpiad: olimpiad,
    })
}
})




module.exports = router;
