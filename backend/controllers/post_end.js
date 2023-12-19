var express = require('express');
var router = express.Router();
const leader_boardBD = require('../models/leader_board')
const userBD = require('../models/users');
const AnswersBD = require('../models/answers');
const QuestionsBD = require('../models/questions');
const UseranswersBD = require('../models/useranswer');


router.post('/', async (req, res) => {
    var id_olimpiad = req.body.id_olimpiad;
    var id_user = req.body.id_user;
    var user_answers_olimp = req.body.user_answers;
    var id_guestions = req.body.id_guestions;

    const question = await QuestionsBD.findOne({where: {
        id: id_guestions
        }
})
    if (question.type == 1){
        const answers = await AnswersBD.findOne({where:{
            text:user_answers_olimp
         }})
         if(answers){
            await UseranswersBD.findOne({where:{
                id_user:id_user,
                id_answer:answers.id
            }})
            .then(select=>{
                if(!select){
                    UseranswersBD.create({id_user:id_user,
                        id_user_question:question.id,
                        id_answer:answers.id,
                        id_olimpiad_UA:id_olimpiad,
                        status:answers.status})
                        res.json({question:question.id,
                            answers:answers,
                           })
                }
                else{
                    res.json({mess:"вы уже отвечали на этот вопрос"})
                }
            })
         }
        }
         if (question.type == 2){
            let len_answers = 0;
            while (len_answers < user_answers_olimp.length){
                console.log(user_answers_olimp[len_answers])
                const answers = await AnswersBD.findOne({where:{
                    text:user_answers_olimp[len_answers]
                 }})
                 
                 if(answers){
                    await UseranswersBD.findOne({where:{
                        id_user:id_user,
                        id_answer:answers.id
                    }}
                    )
                    .then(select=>{
                        if(!select){
                            
                            UseranswersBD.create({id_user:id_user,
                                id_user_question:question.id,
                                id_answer:answers.id,
                                id_olimpiad_UA:id_olimpiad,
                                status:answers.status})
                                res.json({question:question.id,
                                    answers:answers,
                                   })
                        }
                        else{
                            res.json({mess:"вы уже отвечали на этот вопрос"})
                        }
                        
                    }
                    
                    )
                    .catch(err =>{
                        console.log('ERROR:' + err)
                    })
                 }
                 else{
                    res.json({msg:'no no no '})
                 }
                len_answers ++;
            }
         }

});
module.exports = router;
