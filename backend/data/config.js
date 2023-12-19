const mysql2 = require('mysql2');




// Set database connection credentials
const pool = mysql2.createPool({ //Коннектит к базе данных
    host: 'localhost', //пока что всегда локал хост работает на локальной машине 
    user: 'root', //пользователь  root
    database: "test_user_answers",//имя базы данных test_user_answers
    password:'4150',//ВАШ пароль 
})


module.exports = pool;