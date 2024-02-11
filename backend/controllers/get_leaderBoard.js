var express = require('express');
var router = express.Router();

const leader_boardBD = require('../models/leader_board')
const OlimpiadBD = require('../models/olimpiad')
router.get('/', async (req, res) => {
    let id_olimp = req.query.id_olimp
    let current_time = Math.floor(Date.now()/1000)
    const leader_board = await leader_boardBD.findAll({where:{
        id_olimp:id_olimp
    },
    order:[
        ['score_user','DESC']
    ]
});
    const Olimpiad = await OlimpiadBD.findOne({where: {id:id_olimp}})
    console.log(current_time)
    console.log(Olimpiad)
    if (leader_board && Olimpiad.date_end<current_time*10){ /// При деплое изменить 
        var i = 0;
        console.log(leader_board)
        list_users = [];
        list_users_score = [];
        while (i < leader_board.length){
            list_users.push(leader_board[i].user_name);
            list_users_score.push(leader_board[i].score_user);
            i++;
        }
        res.json({
            list_users:list_users,
            list_users_score:list_users_score,
            flag:true,
        })
    }
    else{
        res.json({msg:"олимпиада еще не закончилась",
                    flag:false});
    }
})



module.exports = router;
