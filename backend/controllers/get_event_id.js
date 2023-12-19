var express = require('express');
var router = express.Router();

const QuestionsBD = require("../models/questions");
const AnswersBD = require("../models/answers");
const DescriptionBD = require("../models/description");
const OlimpiadBD = require("../models/olimpiad")


router.get('/:id', async (req, res) => {
    let id = Number(req.params.id)
    console.log(req.params.id)
    const question =  await QuestionsBD.findAll({where: {
       'id_olimpiad':id,
    }
})
    const olimp = await OlimpiadBD.findOne({where: {
        'id':id,
    }
    })

    //const  answers = await AnswersBD.findAll()
    if (question){
        console.log('question найден');
        let list_name = [];
        var list_id_questions = [];
        var i = 0;
        let list_type = [];
        while(i< question.length){
            list_name.push(question[i].name);
            list_id_questions.push(question[i].id);
            list_type.push(question[i].type);
            i++
        }
        j = 0;
        list_answers_all = [];
        list_score = [];
        list_discription = [];

    while (j < list_id_questions.length){
        const answers = await AnswersBD.findAll({where:{
            id_questions:list_id_questions[j]
        }})
        if(answers){
            const discription = await DescriptionBD.findOne({where:{
                id_question:answers[0].id_questions
            }})
            list_discription.push(discription.text);
            len_answers = 0;
            list_answer_one_quesion =[];
            score = 0;
            while (len_answers<answers.length){
                //console.log(answers[len_answers].text)
                list_answer_one_quesion.push(answers[len_answers].text)
                score += answers[len_answers].status
                len_answers ++ 
            }
            list_answers_all.push(list_answer_one_quesion)
            list_score.push(score)
        }
        else{
            console.log('фигня')
        }
        j++
    }

    
        // var j = 0;
        // while (j < list_id_questions.length){
        //     const answers = await AnswersBD.findAll({where:{
        //         id_questions:list_id_questions[j]
        //     }})
        //     if (answers){
        //         console.log(answers.length)
        //         let one_answer_int = 0;
        //         let list_answer = [];
        //          while(one_answer_int < answers.length){
        //              list_answer.push(answers[one_answer_int].text)
        //              one_answer_int ++ 
        //          }
        //     j++
        // }
        // else{
        //     console.log('херого')
        // }
         res.json({
            list_score:list_score,
             name_questions: list_name,
             list_answers_all:list_answers_all,
             list_type:list_type,
             list_id_questions:list_id_questions,
             list_discription:list_discription,
             work_time:olimp.work_time,
         })
    // if (answers){
    //     console.log('answers найден');
    //     res.json({
    //         answers: answers,
    //     })
}
});

module.exports = router;
//     let id = Number(req.params.id) + 21; // БД пока что сырая используем выборку с нормальными вопросами
//     console.log(id);
//     const sql_to_questions =`SELECT questions.name, questions.id, questions.type FROM questions WHERE questions.id = ? ;`;
//     // Обращение к таблице с вопросами 
//     const sql_to_answer =`SELECT * FROM answers WHERE id_question = ? ;`;
//     // Обращение к таблице с ответами
//     var i = 0;
//     id = String(id)
//     pool.query(sql_to_questions,[id],async function(err, result){

//         question = result[0].name; // Находим необходимые параметры
//         id_test = result[0].id;
//         type = result[0].type;
//         if (type == 1){ // Если тип вопроса выбрать 1 правильный вариант ответа
//             pool.query(sql_to_answer,[id_test],async function(err, answers){
//                 let arr_answer = []; // Список возможных вариантов ответов
//                 let total =0; // Отвечает за количество баллов в тесте 
//                 let id_answer = [];
//                 while(i < answers.length){
//                     total +=Number(answers[i].status) // если status==1(Правильный ответ ), добавляем 1 
//                     // Если status==0 добавляем 0
//                     id_answer.push(answers[i].id)
//                     arr_answer.push(answers[i].text)
//                     // Создаем списки с id ответами и самим текстом ответов
//                     i += 1 
//                     }
//                 res.json({id_question:id_test,//ответ клиенту 
//                         type_question:type,
//                         question:question,
//                         answers: arr_answer,
//                         id_answer:id_answer,
//                         score:total
//                             })
//             })
//         };

//         if (type == 2){ // если необходимо пользователю ввести правильный ответ 
//             pool.query(sql_to_answer,[id_test],async function(err, answers){
//                 while(i < answers.length)
//                 {console.log(answers[i].text)
//                     i += 1}
//                 res.json({id_question:id_test,
//                         type_question:type,
//                         question:question,
//                             })
//             })
//         };
//         if (type == 0){ // 
//             pool.query(sql_to_answer,[id_test],async function(err, answers){
//                 let arr_answer = [];
//                 let total =0; 
//                 while(i < answers.length){
//                     total +=Number(answers[i].status)

//                     console.log(answers[i].text)
//                     arr_answer.push(answers[i].text)
//                     i += 1
//                     }
//                 res.json({id_question:id_test,
//                         type_question:type,
//                         question:question,
//                         answers: arr_answer,
//                         score:total})
//             })
//         };
// })


