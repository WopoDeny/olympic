var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const UsersBD = require('../models/users');


router.post('/',async (req, res) =>{
    const userData = {
        name: req.body.name,//req.query.first_name + ' ' + req.query.last_name,
        class:String(req.body.class),
        school:String(req.body.school),
        email: String(req.body.email),
        token: String(req.body.password)
    }
    console.log(userData.email)
    UsersBD.findOne({
        where: {
            email:req.body.email,
    }
})
    .then(user=>{
        if(!user){
                const hash = "$2b$10$aurZwlJrZOFMo2i/cLf43u"
                userData.token = bcrypt.hashSync(req.body.password,hash)
                UsersBD.create(userData)
                .then(user => {
                    res.json({msg:user.email + ' : '+'register',
                            status: 'success'})
                });
        }
        
        else{
            res.json({error:"USER ALREADY EXISTS",
                            status: 'success'})
        }
    })
    .catch(err =>{
        res.send('ERROR:' + err)
    })
});
module.exports = router;
