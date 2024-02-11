var express = require('express');
var router = express.Router();
const AnswersBD = require('../models/answers');
const QuestionsBD = require('../models/questions');
const UseranswersBD = require('../models/useranswer');
const Users = require('../models/users');


router.post('/', async (req, res) => {
    var id_olimpiad = req.body.id_olimpiad;
    var email_ = req.body.email;
    var user_answers_olimp = req.body.user_answers;
    var id_guestions = req.body.id_guestions;
    try{
        const user = await Users.findOne({where:{email: email_}}) // get user with this email
        const user_id = user.id // get the user's id
        const question = await QuestionsBD.findOne({where: {
            id: id_guestions
            }
        
    })
        console.log("нашел сам вопрос");
        if (question.type == 1){
            const answers = await AnswersBD.findOne({where:{
                text:user_answers_olimp
             }})
             if(answers){
                await UseranswersBD.findOne({where:{
                    id_user: user_id,
                    id_answer:answers.id
                }})
                .then(select=>{
                    if(!select){
                        UseranswersBD.create({id_user:user_id,
                            id_user_question:question.id,
                            id_answer:answers.id,
                            id_olimpiad_UA:id_olimpiad,
                            status:answers.status})
                            res.json({question:question.id,
                                answers:answers,
                               })
                    }
                    else{
                        res.json({mess:"вы уже отвечали на этот вопрос", })
                    }
                })
             }
            }
             if (question.type == 2){
                let len_answers = 0;
                while (len_answers < user_answers_olimp.length){
                    const answers = await AnswersBD.findOne({where:{
                        text:user_answers_olimp[len_answers]
                     }})
                     
                     if(answers){
                        await UseranswersBD.findOne({where:{
                            id_user:user_id,
                            id_answer:answers.id
                        }}
                        )
                        .then(select=>{
                            if(!select){    
                                UseranswersBD.create({id_user:user_id,
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
             if (question.type == 3){
                const answers = await AnswersBD.findOne({where:{
                    text:user_answers_olimp
                 }})

                if(answers){
                    await UseranswersBD.findOne({where:{
                        id_user: user_id,
                        id_user_question:id_guestions
                    }})
                    .then(select=>{
                        if(!select){
                            UseranswersBD.create({
                                id_user:user_id,
                                id_user_question:question.id,
                                id_answer:answers.id,
                                id_olimpiad_UA:id_olimpiad,
                                status:answers.status})
                                res.json({question:question.id,
                                    answers:answers,
                                   })
                        }
                    })
                 }
                else{
                    UseranswersBD.create({
                        id_user:user_id,
                        id_user_question:question.id,
                        id_answer:1,
                        id_olimpiad_UA:id_olimpiad,
                        status:0})
                        
                        res.json({question:question.id,
                            answers:user_answers_olimp,
                           })
                }
                }
    }catch(e){
    }

});
module.exports = router;
