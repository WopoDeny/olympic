const express = require('express');
const bodyParser = require("body-parser");
const sequelize = require("./initdb");
var cookieParser = require('cookie-parser');
const port = 3000;
const passport = require('passport');
var cookieParser = require('cookie-parser');

require('dotenv').config();
var cors = require('cors')
const app = express();

app.use(cors())
app.use(cookieParser());

require('./controllers/passport');


app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

//var salt = '$2b$10$qKhi8e4Il9pyNGFt8JOkfe' // Соль для штфрования добавляет строку к хешу/
sequelize.sync()
    .then(() => {console.log("[+] db in ready")}
    )

app.use(express.urlencoded({
    extended: false
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Configure api
var api_reqisterController = require('./controllers/reqister');
var apiAuth = require("./controllers/auth");
var api_logout = require("./controllers/logout");
var api_indexController = require('./controllers/index');
var api_timeController = require('./controllers/time');
var api_getlkController = require('./controllers/get_lk');
var api_post_lkController = require('./controllers/post_lk');
var api_yandexAuthController = require('./controllers/yandexAuth');
var api_get_event_idController = require('./controllers/get_event_id');
var api_post_endController = require('./controllers/post_end');
var api_get_endController = require('./controllers/get_end');
var api_get_LeaderboardController = require('./controllers/get_leaderBoard')




app.use('/api/reqister', api_reqisterController);
app.use('/api/auth', apiAuth);
app.use('/api/logout', api_logout);
app.use('/api/index', api_indexController);
app.use('/api/time', api_timeController);
app.use('/api/lk',api_getlkController);
app.use('/api/lk',api_post_lkController);
app.use('/api/yandexAuth', api_yandexAuthController);
app.use('/api/event/', api_get_event_idController);
app.use('/api/end', api_post_endController);
app.use('/api/end',api_get_endController);
app.use('/api/leader_board',api_get_LeaderboardController)





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
