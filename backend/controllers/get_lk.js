var express = require('express');
var router = express.Router();
const userDB = require('../models/users');
const OlimpiadBD = require('../models/olimpiad');

router.get('/', async (req, res)=> {

    let id_user = req.query.id_user;
    current_time = Math.floor(Date.now()/1000)
    const user = await userDB.findOne({where: {
        'id':id_user,
    }
});
    const olimpiad = await OlimpiadBD.findAll();
    i = 0;
    list_name_olimpiad = [];
    list_time_start = [];
    list_flag_time = [];
    list_id = [];
    list_id_olimpiad = [];
    list_time_work=[]
    list_time_end = []
    while (i < olimpiad.length) {
        list_id.push(olimpiad[i].id);
        list_name_olimpiad.push(olimpiad[i].name_olimpiad)
        list_time_start.push(olimpiad[i].date_start),
        list_flag_time.push(olimpiad[i].date_start>current_time),
        list_id_olimpiad.push(olimpiad[i].id)
        list_time_work.push(olimpiad[i].work_time)
        list_time_end.push(olimpiad[i].date_end)
        i++;
    }

if (user && olimpiad){
    console.log('Личный кабинет открыт');
    let school_string = " ";
    let class_string = " ";
    if(school_string !=null)school_string = user.school;
    if(class_string !=null)class_string = user.class;
    res.json({
        user: user.name,
        class: class_string,
        school:school_string,
        olimpiads:list_name_olimpiad,
        start_olimpiads:list_time_start,
        list_id_olimpiad:list_id_olimpiad,
        list_flag_time:list_flag_time,
        list_time_work:list_time_work,
        list_time_end: list_time_end
    })
}
})

module.exports = router;
