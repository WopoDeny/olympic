(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},i=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"081b":function(t,e,s){t.exports=s.p+"img/sponsor-2.bd859a51.png"},"0fe1":function(t,e,s){"use strict";s("14f6")},"139d":function(t,e,s){t.exports=s.p+"img/emblem.193bf284.svg"},"14f6":function(t,e,s){},"1c1a":function(t,e,s){},"244a":function(t,e,s){},"4f62":function(t,e,s){},"54fa":function(t,e,s){},"564a":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app"},[e("header-vue"),e("router-view")],1)},i=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("logo"),e("div",{staticClass:"logo-header"}),e("div",{staticClass:"title"},[t._v("Военно-космическая академия имени А.Ф. Можайского")])],1)},o=[],l=function(){var t=this;t._self._c;return t._m(0)},c=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo"},[e("a",{staticStyle:{"z-index":"1000"},attrs:{href:"/"}},[e("img",{staticClass:"logo-image",staticStyle:{"z-index":"10"},attrs:{src:s("139d")}})])])}],u={name:"logo"},d=u,m=(s("adfe"),s("2877")),p=Object(m["a"])(d,l,c,!1,null,null,null),h=p.exports,g={name:"header",components:{logo:h}},v=g,f=(s("e8a9"),Object(m["a"])(v,r,o,!1,null,"119c05da",null)),_=f.exports,w={name:"App",components:{headerVue:_}},b=w,C=(s("fac7"),Object(m["a"])(b,n,i,!1,null,null,null)),y=C.exports,k=s("8c4f"),x=(s("14d9"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-page"},[e("div",{staticClass:"main-page-container"},[t._m(0),e("div",{staticClass:"main-page-buttons-wrapper"},[e("button",{staticClass:"sign-up-button"},[e("p",{staticClass:"sign-up-button-text",on:{click:function(e){return t.$router.push({name:"CongratsPage"})}}},[t._v("Об олимпиаде")])]),e("div",{staticClass:"main-page-login-buttons"},[e("button",{staticClass:"sign-up-button"},[e("p",{staticClass:"sign-up-button-text",on:{click:function(e){return t.$router.push({name:"register"})}}},[t._v("Регистрация")])]),e("div",{staticClass:"main-page-auth-buttons"},[e("button",{staticClass:"sign-up-button"},[e("p",{staticClass:"sign-up-button-text",on:{click:function(e){return t.$router.push({name:"login"})}}},[t._v("Войти")])]),t._m(1)])])])])])}),A=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"main-text"},[t._v("Приглашаем вас принять участие в нашей олимпиаде."),e("br"),e("br"),t._v(" Проверьте свои знания и навыки в области информатики и математики")])},function(){var t=this,e=t._self._c;return e("button",{staticClass:"sign-up-button-yandex"},[e("a",{staticClass:"sign-up-button-text",attrs:{href:"https://oauth.yandex.ru/authorize?response_type=token&client_id=e5684b66613f4cf1b3658e06514b4d75"}},[e("img",{staticClass:"main-page-yandex-icon",attrs:{src:s("d7e7"),alt:"Войти через yandex"}}),t._v(" Яндекс ID ")])])}],S={name:"mainPage"},I=S,$=(s("dc17"),Object(m["a"])(I,x,A,!1,null,"48543139",null)),O=$.exports,T=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Congrats-page"},[e("header-vue"),t._m(0)],1)},j=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"greeting-page-container"},[e("h1",{staticClass:"greeting-page-title"},[t._v("Добро пожаловать!")]),e("p",[t._v("На сайт онлайн-олимпиады для школьников 10 - 11 классов "),e("b",[t._v("«Современные информационные технологии»")]),t._v("! ")]),e("p",[t._v("Олимпиада проводится "),e("b",[t._v("Военно-космической академией имени Александра Федоровича Можайского")]),t._v(" – крупнейшим политехническим вузом Министерства обороны Российской Федерации.")]),e("a",{staticClass:"greeting-page-tg-link",attrs:{target:"_blank",href:"https://t.me/vka62kaf_education"}},[t._v("Наш Telegram-канал")]),e("h2",{staticClass:"greeting-page-title"},[t._v("Основными целями Олимпиады являются:")]),e("ul",[e("li",[t._v("поиск и поддержка одаренных детей и талантливой молодежи во всех регионах Российской Федерации;")]),e("li",[t._v("стимулирование интереса детей и молодежи к инновационной деятельности в области высоких технологий, обеспечение равного доступа учеников к освоению передовых научных методов исследования;")]),e("li",[t._v("участие детей в научно-техническом творчестве, проведение ранней профессиональной ориентации молодежи;")]),e("li",[t._v("повышение образовательного уровня и отбор лучших участников в качестве абитуриентов Военно-космической академии имени А.Ф.Можайского.")])]),e("h2",{staticClass:"greeting-page-title"},[t._v("Возможности, дающие участие в Олимпиаде:")]),e("ol",[e("li",[t._v("Для победителей и призеров Олимпиады - получение льгот при поступлении в нашу Академию.")]),e("li",[t._v("Для наставников/тренеров – участие в мероприятии национального уровня, позволяющее увеличить аттестационные показатели педагогических работников.")]),e("li",[t._v("Для школ – повышение рейтинга образовательной организации.")])]),e("h4",{staticClass:"greeting-page-title"},[t._v(" Олимпиада проводится при поддержке ")]),e("ol",[e("li",[e("a",{staticClass:"sponsor11-link11",attrs:{target:"_blank",href:"https://www.78isb.ru/"}},[t._v("ООО «Инновационные системы безопасности»")])]),e("li",[e("a",{staticClass:"sponsor11-link11",attrs:{target:"_blank",href:"https://www.78isb.ru/"}},[t._v("Центр защиты информации ГК «Конфидент»")]),e("br"),e("img",{staticClass:"sponsor-img",attrs:{src:s("081b"),alt:"Центр защиты информации ГК «Конфидент»"}}),e("p",{staticClass:"sponsor-desc"},[t._v("Российский разработчик линейки средств защиты информации. Решения компании применяются для защиты конфиденциальной информации, в том числе содержащейся в ГИС, ИСПДн и АСУ ТП, значимых объектах КИИ и сведений, составляющих гостайну до уровня «совершенно секретно». Предназначены для разграничения, защиты и контроля доступа, межсетевого экранирования, доверенной загрузки, предотвращения вторжений и защиты виртуальных сред. Сертифицированы ФСТЭК России и Минобороны России.")])])]),e("p",[t._v(" Регистрация участников доступна до: "),e("b",[t._v("23:59 09 февраля 2024 года")])]),e("p",[t._v(" Даты проведения олимпиады: "),e("b",[t._v("10–11 февраля 2024 года")])])])}],P={name:"CongratsPage",components:{headerVue:_}},F=P,B=(s("b540"),Object(m["a"])(F,T,j,!1,null,"7a2ddd54",null)),N=B.exports,q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"back-container"},[e("div",{staticClass:"container"},[e("div",{staticClass:"title-p"},[t._v("Регистрация")]),e("registerForm"),e("div",{staticClass:"title-end"},[t._v(" Уже зарегистрированы? "),e("div",{staticClass:"margin-left pointer",on:{click:function(e){return t.$router.push({name:"login"})}}},[t._v("Войти")])])],1)])},D=[],L=function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.checkForm.apply(null,arguments)}}},[e("div",{staticClass:"string"},[e("span",[t._v("ФИО:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],attrs:{id:"name",type:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),e("div",{staticClass:"string"},[e("span",[t._v("E-mail:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{id:"email",type:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),e("div",{staticClass:"string"},[e("span",[t._v("Школа:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.school,expression:"form.school"}],attrs:{id:"school",type:"text"},domProps:{value:t.form.school},on:{input:function(e){e.target.composing||t.$set(t.form,"school",e.target.value)}}})]),e("div",{staticClass:"string"},[e("span",[t._v("Класс:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.class,expression:"form.class"}],attrs:{id:"class",type:"text"},domProps:{value:t.form.class},on:{input:function(e){e.target.composing||t.$set(t.form,"class",e.target.value)}}})]),e("div",{staticClass:"string"},[e("span",[t._v("Пароль:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{id:"password",type:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),e("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Зарегистрироваться")])])},M=[];function V(t,e){return t>>>e|t<<32-e}function E(t){for(var e,s,a=Math.pow,n=a(2,32),i="length",r="",o=[],l=8*t[i],c=E.h=E.h||[],u=E.k=E.k||[],d=u[i],m={},p=2;d<64;p++)if(!m[p]){for(e=0;e<313;e+=p)m[e]=p;c[d]=a(p,.5)*n|0,u[d++]=a(p,1/3)*n|0}t+="";while(t[i]%64-56)t+="\0";for(e=0;e<t[i];e++){if(s=t.charCodeAt(e),s>>8)return;o[e>>2]|=s<<(3-e)%4*8}for(o[o[i]]=l/n|0,o[o[i]]=l,s=0;s<o[i];){var h=o.slice(s,s+=16),g=c;for(c=c.slice(0,8),e=0;e<64;e++){var v=h[e-15],f=h[e-2],_=c[0],w=c[4],b=c[7]+(V(w,6)^V(w,11)^V(w,25))+(w&c[5]^~w&c[6])+u[e]+(h[e]=e<16?h[e]:h[e-16]+(V(v,7)^V(v,18)^v>>>3)+h[e-7]+(V(f,17)^V(f,19)^f>>>10)|0),C=(V(_,2)^V(_,13)^V(_,22))+(_&c[1]^_&c[2]^c[1]&c[2]);c=[b+C|0].concat(c),c[4]=c[4]+b|0}for(e=0;e<8;e++)c[e]=c[e]+g[e]|0}for(e=0;e<8;e++)for(s=3;s+1;s--){var y=c[e]>>8*s&255;r+=(y<16?0:"")+y.toString(16)}return r}var J={name:"registerForm",data(){return{form:{name:"",email:"",school:"",class:"",password:""}}},methods:{async checkForm(){try{const t=E(this.form.password),e=JSON.stringify({name:this.form.name,email:this.form.email,school:this.form.school,class:this.form.class,password:t}),s=await this.$api.auth.register(e);console.log(s),"success"==s.data.status&&(window.localStorage.setItem("authFlag",!0),//!!!! потом исправить
this.$router.push({name:"login"}))}catch(t){console.log(t)}}}},R=J,U=(s("8111"),Object(m["a"])(R,L,M,!1,null,"52622018",null)),W=U.exports,X={name:"registerPage",components:{registerForm:W}},Y=X,Z=(s("a6c2"),Object(m["a"])(Y,q,D,!1,null,"6435fe22",null)),z=Z.exports,H=function(){var t=this;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-container"},[e("h1",[t._v("Auth")])])}],G={name:"Auth",async mounted(){window.localStorage.setItem("getTime",!1);let t=/access_token=([^&]+)/.exec(document.location.href)[1];if(""!=t){window.localStorage.setItem("token",t);const s=await this.$api.auth.yandexAuthGetInfo(t),a=JSON.stringify({username:s.data.login,first_name:s.data.first_name,last_name:s.data.last_name,email:s.data.default_email,token:t,platorm:"yandex"});try{const t=await this.$api.auth.postYandexAuth(a);window.localStorage.setItem("userId",t.data.id_user),window.localStorage.setItem("authFlag",!0)}catch(e){console.log(e)}}this.$router.push({name:"personalCabinet"})},data(){return{token:""}}},K=G,tt=Object(m["a"])(K,H,Q,!1,null,"644c5c64",null),et=tt.exports,st=function(){var t=this,e=t._self._c;return e("div",[e("headerVue"),e("div",{staticClass:"table-title"},[t._v("Таблица результатов")]),e("div",{staticClass:"lider"},[e("table",[t._m(0),e("tbody",t._l(t.table,(function(s){return e("tr",{key:s},[e("th",{attrs:{scope:"row"}},[t._v(t._s(s.id+1))]),e("td",[t._v(t._s(s.name))]),e("td",[t._v(t._s(s.score))])])})),0)])])],1)},at=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Место")]),e("th",{attrs:{scope:"col"}},[t._v("Фамилия Имя")]),e("th",{attrs:{scope:"col"}},[t._v("Количество баллов")])])])}],nt={name:"leaderboard",components:{headerVue:_},created(){"false"==window.localStorage.getItem("authFlag")&&this.$router.push({name:"mainPage"})},mounted(){for(let t=0;t<this.$store.state.leaderboard.users.length;t++)this.table.push({id:t,name:this.$store.state.leaderboard.users[t],score:this.$store.state.leaderboard.scores[t]})},data(){return{table:[]}}},it=nt,rt=(s("0fe1"),Object(m["a"])(it,st,at,!1,null,"29105320",null)),ot=rt.exports,lt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"start-olympic-page"},[e("div",{staticClass:"start-olympic-page-container"},[e("h1",[t._v(t._s(t.title))]),t._m(0),e("button",{staticClass:"start-button"},[e("p",{staticClass:"start-button-text",on:{click:function(e){return t.$router.push({name:"olimpPage"})}}},[t._v("НАЧАТЬ ОЛИМПИАДУ")])])])])},ct=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"main-text"},[t._v("Задания расчитаны на учащихся 9-11 классов. Будут затронуты такие темы как: обьектно-ориентированное программирование, булевая алгербра, теория множеств, реляционная модель данных."),e("br"),t._v(" Тестирование идет 2 часа 30 минут."),e("br"),t._v(" Примеры тестовых заданий, можно увидеть по ссылке."),e("br"),t._v(" Будьте внимательны, после начала олимпиады, остановить ее уже будет нельзя."),e("br"),t._v(" Желаем удачи!"),e("br")])}],ut={name:"startOlympicPage",async mounted(){try{const t=await this.$api.mainPage.getInfo();this.title=t.data.olimpiad[0].name_olimpiad,this.$store.state.startTime=t.data.olimpiad[0].date_start,this.$store.state.endTime=t.data.olimpiad[0].date_end,this.$store.state.duration=t.data.olimpiad[0].work_time,this.$store.state.olimpId=t.data.olimpiad[0].id}catch(t){console.log(t)}},data(){return{title:"Olympiad"}}},dt=ut,mt=(s("d571"),Object(m["a"])(dt,lt,ct,!1,null,null,null)),pt=mt.exports,ht=function(){var t=this,e=t._self._c;return e("div",{staticClass:"back-container"},[e("div",{staticClass:"workspace"},[e("div",{staticClass:"left-side"},t._l(t.tasks,(function(s){return e("div",{key:s.id,staticClass:"task-container"},[e("div",{staticClass:"task-header"},[e("div",{staticClass:"number-task"},[t._v(" Задание № "+t._s(s.id+1)+" ")]),e("div",{staticClass:"ball-task"},[t._v(" "+t._s(t.scores[s.id])+" балла ")])]),e("div",{staticClass:"question"},[t._v(" "+t._s(s.question)+" ")]),e("div",{staticClass:"answer"},[t._v(" Выберите правильный ответ: ")]),1==s.type?e("div",{staticClass:"reply"},t._l(s.answer,(function(a){return e("div",{key:a},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user_answers[s.id],expression:"user_answers[task.id]"}],attrs:{type:"radio"},domProps:{value:a,checked:t._q(t.user_answers[s.id],a)},on:{change:function(e){return t.$set(t.user_answers,s.id,a)}}}),e("label",[t._v(t._s(a))])])})),0):t._e(),2==s.type?e("div",{staticClass:"reply"},t._l(s.answer,(function(a){return e("div",{key:a},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user_answers[s.id],expression:"user_answers[task.id]"}],attrs:{type:"checkbox"},domProps:{value:a,checked:Array.isArray(t.user_answers[s.id])?t._i(t.user_answers[s.id],a)>-1:t.user_answers[s.id]},on:{change:function(e){var n=t.user_answers[s.id],i=e.target,r=!!i.checked;if(Array.isArray(n)){var o=a,l=t._i(n,o);i.checked?l<0&&t.$set(t.user_answers,s.id,n.concat([o])):l>-1&&t.$set(t.user_answers,s.id,n.slice(0,l).concat(n.slice(l+1)))}else t.$set(t.user_answers,s.id,r)}}}),e("label",[t._v(t._s(a))])])})),0):t._e(),3==s.type?e("div",{staticClass:"reply"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user_answers[s.id],expression:"user_answers[task.id]"}],attrs:{type:"text"},domProps:{value:t.user_answers[s.id]},on:{input:[function(e){e.target.composing||t.$set(t.user_answers,s.id,e.target.value)},function(e){return t.inputHandler(s.id+1)}]}})]):t._e(),e("button",{staticClass:"hint-btn",on:{click:function(e){return t.hintHandler(s.id)}}},[t._v("Подсказка")]),s.show_hint?e("div",{staticClass:"hint"},[t._v(t._s(s.hint))]):t._e()])})),0),e("div",{staticClass:"right-side"},[e("div",{staticClass:"task-list"},t._l(t.n_tasks,(function(s){return e("div",{key:s,class:{square:!t.passed_questions.includes(s),"active-square":t.passed_questions.includes(s)},attrs:{id:s}},[t._v(" "+t._s(s)+" ")])})),0),e("div",{staticClass:"center"},[e("button",{staticClass:"send",on:{click:function(e){return t.postAnswers()}}},[t._v(" Отправить результаты ")])]),e("timerVue",{staticClass:"timer"})],1)])])},gt=[],vt=(s("13d5"),function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"timer-cell"},[t._v(t._s(t.time.divMinutes)+":"+t._s(t.time.divSeconds))])])}),ft=[],_t={name:"timer",data(){return{time:{divMinutes:0,divSeconds:0},timer:null}},mounted(){console.log(window.localStorage.getItem("endTime")),this.startTiming(window.localStorage.getItem("endTime"))},methods:{countTime(t){let e=Date.now(),s=parseInt((t-e)/1e3);s>0?(this.time.divMinutes=60*parseInt(s%86400/3600)+parseInt(s%3600/60),this.time.divSeconds=s%60):clearTimeout(this.timer)},startTiming(t){this.timer=setInterval(this.countTime,1e3,t)}}},wt=_t,bt=(s("c3b4"),Object(m["a"])(wt,vt,ft,!1,null,null,null)),Ct=bt.exports,yt={name:"olimpPage",components:{timerVue:Ct},created(){"false"==window.localStorage.getItem("authFlag")&&this.$router.push({name:"mainPage"})},async mounted(){const t=await this.$api.task.getTask(window.localStorage.getItem("olimId"));this.types=t.data.list_type,this.answers=t.data.list_answers_all,this.questions=t.data.name_questions,this.list_id_questions=t.data.list_id_questions,this.scores=t.data.list_score,this.hints=t.data.list_discription,this.$store.state.maxScore=this.scores.reduce((t,e)=>t+e,0),this.user_answers=this.questions.map(t=>[t]),this.user_answers=[],this.n_tasks=this.questions.length;for(let e=0;e<this.questions.length;e++)this.user_answers.push([]);for(let e=0;e<this.questions.length;e++)this.tasks.push({id:e,type:this.types[e],question:this.questions[e],answer:this.answers[e],hint:this.hints[e],show_hint:!1})},data(){return{tasks:[],user_answers:[],types:[],answers:[],questions:[],list_id_questions:[],checked:[],scores:[],passed_questions:[],hints:["hint","hint","hint","hint","hint","hint","hint"],n_tasks:null}},methods:{async postAnswers(){for(let e=0;e<this.questions.length;e++){let s={id_olimpiad:window.localStorage.getItem("olimId"),id_user:window.localStorage.getItem("userId"),id_guestions:this.list_id_questions[e],user_answers:this.user_answers[e]};if(console.log(s.user_answers),0!=s.user_answers.length)try{let t=await this.$api.task.postAnswer(s);console.log(t)}catch(t){console.log(t)}}this.$router.push({name:"end"})},hintHandler(t){this.tasks[t].show_hint=0==this.tasks[t].show_hint},inputHandler(t){this.passed_questions.push(t)}}},kt=yt,xt=(s("80fe"),Object(m["a"])(kt,ht,gt,!1,null,"68e68628",null)),At=xt.exports,St=function(){var t=this,e=t._self._c;return e("div",{staticClass:"congrat-page"},[e("headerVue"),e("div",{staticClass:"content"},[e("div",{staticClass:"olimp-title"},[t._v("Олимпиада")]),e("div",{staticClass:"wrap-text"},[t._v(" Поздравляем "+t._s(t.username)+" с окончанием теcтирования!"),e("br"),t._v(" Вы набрали "+t._s(t.score)+" из "+t._s(this.$store.state.maxScore)+" баллов"),e("br"),t._v(" Результаты можно будет узнать по "),e("a",{staticClass:"link-wrap",on:{click:function(e){return t.toLeaderBoard()}}},[t._v("ссылке")]),t._v(", после окончания олимпиады ")])])],1)},It=[],$t={name:"congratulations",components:{headerVue:_},created(){"false"==window.localStorage.getItem("authFlag")&&this.$router.push({name:"mainPage"})},async mounted(){const t=await this.$api.task.getScore(window.localStorage.getItem("userId"),window.localStorage.getItem("olimId"));this.score=t.data.score_user,this.username=t.data.user_name},data(){return{score:null,username:""}},methods:{async toLeaderBoard(){const t=await this.$api.task.getLeaderBoard(window.localStorage.getItem("olimId"));console.log(t),t.data.flag?(this.$store.state.leaderboard.users=t.data.list_users,this.$store.state.leaderboard.scores=t.data.list_users_score,this.$router.push({name:"results"})):alert("Олимпиада ещё не закончилась, вы сможете узнать результаты позднее")}}},Ot=$t,Tt=(s("bb91"),Object(m["a"])(Ot,St,It,!1,null,"18a4baaa",null)),jt=Tt.exports,Pt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"back-container"},[e("div",{staticClass:"container"},[e("div",{staticClass:"title-p"},[t._v("Войти")]),e("loginForm"),e("div",{staticClass:"title-end"},[t._v(" Нет аккаунта? "),e("div",{staticClass:"margin-left pointer",on:{click:function(e){return t.$router.push({name:"register"})}}},[t._v("Регистрация")])])],1)])},Ft=[],Bt=function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.checkForm.apply(null,arguments)}}},[e("div",{staticClass:"string"},[e("span",[t._v("E-mail:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{id:"email",type:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),e("div",{staticClass:"string"},[e("span",[t._v("Пароль:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{id:"password",type:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),e("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Войти")])])},Nt=[],qt={name:"loginForm",data(){return{form:{email:"",password:""}}},methods:{async checkForm(){try{window.localStorage.setItem("getTime",!1);const t=E(this.form.password),e=JSON.stringify({email:this.form.email,token:t}),s=await this.$api.auth.login(e);window.localStorage.setItem("authFlag",!0),window.localStorage.setItem("userId",s.data.id_user),this.$router.push({name:"personalCabinet"})}catch(t){console.log(t)}}}},Dt=qt,Lt=(s("f9f8"),Object(m["a"])(Dt,Bt,Nt,!1,null,"c67de7ae",null)),Mt=Lt.exports,Vt={name:"signInPage",components:{loginForm:Mt}},Et=Vt,Jt=(s("f4ac"),Object(m["a"])(Et,Pt,Ft,!1,null,"6c6bf27c",null)),Rt=Jt.exports,Ut=function(){var t=this,e=t._self._c;return e("div",{staticClass:"personal-page"},[e("div",{staticClass:"personal-page-container"},[e("div",{staticClass:"personal-info-container"},[e("img",{staticClass:"avatar",attrs:{src:s("92ef")}}),e("div",{staticClass:"user-info-table"},[e("strong",[t._v(t._s(t.name))]),t._v(" "),t.class_?e("div",[t._v("Класс "),e("strong",[t._v(t._s(t.class_))])]):t._e(),t._v(" "),t.school?e("div",[t._v("Школа "),e("strong",[t._v(t._s(t.school))])]):t._e()])]),e("div",{staticClass:"olympiad-info-container"},[t._m(0),t._l(t.olimpiads,(function(a){return e("div",{key:a},[e("div",{staticClass:"info-block"},[t._m(1,!0),e("div",[e("p",{staticClass:"olympic-name"},[t._v(" "+t._s(a.title)+" ")])]),e("div",[e("p",{staticClass:"olympic-time"},[t._v(" "+t._s(a.timeString)+" ")])]),e("div",{staticClass:"personal-page-buttons-wrapper"},[e("div",{staticClass:"padding-top"},[e("button",{staticClass:"olympic-result-button",on:{click:function(e){return t.toLeaderBoard(a.id)}}},[e("img",{staticClass:"olympic-result",attrs:{src:s("85e4")}})])]),e("div",[e("button",{staticClass:"olympic-sing-in-button",on:{click:function(e){return t.startOlimp(a.id,a.isStarted)}}},[t._v(" Начать ")])])])]),e("div",{staticClass:"popup-not-started",attrs:{hidden:"true"}},[t._v(" Олимпиада ещё не началась! ")]),e("div",{staticClass:"popup-ended",attrs:{hidden:"true"}},[t._v(" Олимпиада закончилась! ")]),e("div",{staticClass:"not-ended",attrs:{hidden:"true"}},[t._v(" Олимпиада ещё не закончилась! ")])])}))],2)])])},Wt=[function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("Доступные олимпиады")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"point"},[e("img",{staticClass:"point",attrs:{src:s("7834")}})])}];const Xt={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};var Yt={name:"Personal_Page",created(){"false"==window.localStorage.getItem("authFlag")&&this.$router.push({name:"mainPage"})},async mounted(){try{const t=await this.$api.auth.getlk(window.localStorage.getItem("userId")),e=t.data.user.split(" ");this.name=e[0]+" "+e[1][0]+". ",this.lastname=t.data.user.split(" ")[1],this.class_=t.data.class,this.school=t.data.school;let s=t.data.list_time_end;window.localStorage.setItem("list-end",s);let a=t.data.olimpiads,n=[],i=t.data.list_id_olimpiad,r=t.data.list_flag_time,o=t.data.list_time_work;window.localStorage.setItem("getTime",!1);for(let l=0;l<s.length;l++)n.push(this.convertTimeStemp2String(1e3*s[l]));for(let l=0;l<a.length;l++)this.olimpiads.push({id:i[l],title:a[l],time_end:1e3*s[l],timeString:n[l],isStarted:r[l],workTime:o[l]})}catch(t){console.log(t)}},data(){return{class_:"",school:"",olimpiads:[],name:"",lastName:""}},methods:{convertTimeStemp2String(t){let e=new Date(t);return e.toLocaleString("ru",Xt)},startOlimp(t,e){if(e)document.getElementsByClassName("popup-not-started")[t-1].hidden=!1,setTimeout(()=>{document.getElementsByClassName("popup-not-started")[t-1].hidden=!0},2e3);else{let e=(new Date).getTime();if(e<1e3*this.olimpiads[t-1].time_end){if("false"===window.localStorage.getItem("getTime")){const e=(new Date).getTime();window.localStorage.setItem("endTime",e+1e3*this.olimpiads[t-1].workTime),window.localStorage.setItem("getTime",!0)}window.localStorage.setItem("olimId",t),this.$router.push({name:"olimpPage"})}else document.getElementsByClassName("popup-ended")[t-1].hidden=!1,setTimeout(()=>{document.getElementsByClassName("popup-ended")[t-1].hidden=!0},2e3)}},toLeaderBoard(t){let e=(new Date).getTime();e>1e3*this.olimpiads[t-1].time_end?this.$router.push({name:"results"}):(document.getElementsByClassName("not-ended")[t-1].hidden=!1,setTimeout(()=>{document.getElementsByClassName("not-ended")[t-1].hidden=!0},2e3))}}},Zt=Yt,zt=(s("60e8"),Object(m["a"])(Zt,Ut,Wt,!1,null,"544fcd66",null)),Ht=zt.exports;console.log(a);var Qt=new k["a"]({routes:[{path:"/",name:"mainPage",component:O},{path:"/greeting",name:"CongratsPage",component:N},{path:"/register",name:"register",component:z},{path:"/login",name:"login",component:Rt},{path:"/auth",name:"auth",component:et},{path:"/results",name:"results",component:ot},{path:"/start-olympic-page",name:"startOlympicPage",component:pt},{path:"/olimp-page",name:"olimpPage",component:At},{path:"/personalCabinet",name:"personalCabinet",component:Ht},{path:"/end",name:"end",component:jt}]}),Gt=s("2f62");a["default"].use(Gt["a"]);var Kt=new Gt["a"].Store({state:{name:"",password:"",answers:new Map,passOlimpFlag:!1,email:"",startTime:null,duration:null,score:null,maxScore:null,total:null,getTime:!1,leaderboard:{users:[],scores:[]}}}),te=s("cee4");const ee=te["a"].create({baseURL:"http://localhost:3000/"});var se=ee,ae=function(t){return{getTask(e){return t.get("/api/event/"+e)},postAnswerToServer(e,s){return t.post("/api/event/"+e,s,{headers:{"Content-Type":"application/json"}})},postAnswer(e){return t.post("api/end/",e,{headers:{"Content-Type":"application/json"}})},addOlimpiad(e){return t.post("/api/add_olimp",e,{headers:{"Content-Type":"application/json"}})},addTask(e){return t.post("/api/add_task",e,{headers:{"Content-Type":"application/json"}})},getResultBoard(){return t.get("/api/end")},getScore(e,s){return t.get(`/api/end/result?id_user=${e}&id_olimpiad=${s}`)},getLeaderBoard(e){return t.get("/api/leader_board?id_olimp="+e)}}},ne=function(t){return{getTime(){return t.get("http://localhost:3000/api/time")},getInfo(){return t.get("http://localhost:3000/api/index")}}},ie=function(t){return{register(e){return t.post("/api/reqister",e,{headers:{"Content-Type":"application/json"}})},login(e){return t.post("/api/auth",e,{headers:{"Content-Type":"application/json"}})},postYandexAuth(e){return t.post("api/yandexAuth",e,{headers:{"Content-Type":"application/json"}})},yandexAuthGetInfo(e){return t.get("https://login.yandex.ru/info?format=json&oauth_token="+e)},getlk(e){return t.get("/api/lk?id_user="+e)}}},re={task:ae(se),mainPage:ne(se),auth:ie(se)},oe={install(t){t.prototype.$api=re}};s("927c");a["default"].use(k["a"]),a["default"].use(oe),new a["default"]({render:t=>t(y),router:Qt,store:Kt}).$mount("#app")},"5ee7":function(t,e,s){},"60e8":function(t,e,s){"use strict";s("4f62")},"659f":function(t,e,s){},"6c05":function(t,e,s){},7194:function(t,e,s){},7834:function(t,e,s){t.exports=s.p+"img/point.3d5ac0ff.svg"},"80fe":function(t,e,s){"use strict";s("f10c")},8111:function(t,e,s){"use strict";s("659f")},"83e2":function(t,e,s){},"85e4":function(t,e,s){t.exports=s.p+"img/olympic-result.1f817606.svg"},"927c":function(t,e,s){},"92ef":function(t,e,s){t.exports=s.p+"img/avatar.3b62358e.jpg"},a258:function(t,e,s){},a6c2:function(t,e,s){"use strict";s("bfcc")},adfe:function(t,e,s){"use strict";s("244a")},b540:function(t,e,s){"use strict";s("564a")},bb91:function(t,e,s){"use strict";s("e016")},bfcc:function(t,e,s){},c3b4:function(t,e,s){"use strict";s("6c05")},d571:function(t,e,s){"use strict";s("a258")},d7e7:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIwSURBVHgBrVUxb9NQEL57dpgq5DFDQB6YYMnIgCozwVYWYDW/IAEWtqRbJ0h/AVmBJSNjxFBGssBUiVRUoqOF2Jr3jrvnF0jc51cb+CTLlu983/nuvnsIAVCWJMbsDAghQ8CUAFJnKti6QIKZWukZHn0/qYuB/sDdVFP8ms0ZNIKZRudm7CNS1Rd69/pAU+dT8+A2TK478ULv9gZVC24H740IcQz/ACQaRx9O9y8QSOaENAl+3e0B7FwtrzWOvwD8/FElGTLJ4W+CsuZSFkguBOVgmD8FvP8QcDOwgxk+5nZ/rL4uovNVX3oSWyeKRt7gnLGavAWUzCWRs1MAuYT0xk0IINGdaMr3u3GZvcp9XjZzF3wr0/5tiJg4DMxkzJUxV/bqXNSde2Xm79/5ynApREOKG/ug1sPV3JbmLyACFR30az3W0+FpbjNgKgRJnZmOP9u74gkC14uWSFXIag6el3/Bf6Amb2xz20KxEJa1Vq69Hj6yd+xes5OD+RBaoFAUIhCwUvXBs40XCM1BC8Wynl/mpl68LB/OvgFNX0FT2HWuVHwYdOKSrMWmWWxtoFadmcL5kg8PmHs9ZFXkZXmMZN5OD1M8+npipyjC6AnYU2oDdnLcOmhZGrDLLh7LQ/26tgvtln20ethcySEbeNb1H5L/f+BsCU0MSCiDXkB7FC7z/S1CnydlaWpIj1gjOTTDnGueS1OrhqBqLJExe27jylJM3EdLEahoSMbcTaIXvwBMYfD27deRpgAAAABJRU5ErkJggg=="},dc17:function(t,e,s){"use strict";s("83e2")},e016:function(t,e,s){},e8a9:function(t,e,s){"use strict";s("7194")},f10c:function(t,e,s){},f4ac:function(t,e,s){"use strict";s("5ee7")},f9f8:function(t,e,s){"use strict";s("1c1a")},fac7:function(t,e,s){"use strict";s("54fa")}});
//# sourceMappingURL=app.58d5cf2e.js.map