var express = require('express');
var router = express.Router();

const leader_boardBD = require('../models/leader_board')
const UseranswersBD = require('../models/useranswer');
const UserBD = require('../models/users');




router.get('/result', async (req, res) => {
    id_olimpiad = req.query.id_olimpiad;
    id_user = req.query.id_user;
    const user_score = await UseranswersBD.findAll({where: {
        id_olimpiad_UA:id_olimpiad,
        id_user:id_user,
    }
    })
    if (user_score){
        score_user = 0;
        i = 0;
        while (i < user_score.length){
            if(user_score[i].status == 1){
                score_user += user_score[i].status
            }
            if (user_score[i].status == 0){
                score_user -= user_score[i].status
            }
            i++;
        }
    }

    const user_name = await UserBD.findOne({where:{
        id:id_user
    }})
    const leader_boar = await leader_boardBD.findOne({where:{
        user_name:user_name.name,
        id_olimp:id_olimpiad,
    }})
    if (!leader_boar){
        leader_boardBD.create({id_olimp:id_olimpiad, user_name:user_name.name,score_user:score_user})
        console.log('Leader_board_created successfully')
        res.json({
            score_user:score_user,
            user_name:user_name.name,
        })
    }
    else{
        console.log('Запись уже существует')
        res.json({
            msg:'Вы уже принимали участие в этой олимпиаде',
        })
    }
   

})



// router.get('/', async (req, res)=> {
//     const sql_user_answers_ = `SELECT * FROM leader_board ORDER BY score_user DESC ;`
//     pool.query(sql_user_answers_, async function(err, result){
//         console.log(result)
//         var i = 0;
//         var list_name = [];
//         var list_score = [];
//         while(i < result.length){
//             list_name.push(result[i].users_name);
//             list_score.push(result[i].score_user)
//             i += 1;
//         }
//         res.json({
//             users_name: list_name,
//             score_user: list_score,
//     })
//     })
// });


module.exports = router;
