(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"081b":function(t,e,s){t.exports=s.p+"img/sponsor-2.bd859a51.png"},"0fe1":function(t,e,s){"use strict";s("14f6")},"110d":function(t,e,s){"use strict";s("e55d")},"139d":function(t,e,s){t.exports=s.p+"img/emblem.193bf284.svg"},"14f6":function(t,e,s){},"1e01":function(t,e,s){"use strict";s("3e5c")},"244a":function(t,e,s){},"3e5c":function(t,e,s){},"4f62":function(t,e,s){},"54fa":function(t,e,s){},"564a":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app"},[e("header-vue"),e("router-view")],1)},n=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("logo"),e("div",{staticClass:"logo-header"}),e("div",{staticClass:"title"},[t._v("Военно-космическая академия имени А.Ф. Можайского")])],1)},o=[],l=function(){var t=this;t._self._c;return t._m(0)},c=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo"},[e("a",{staticStyle:{"z-index":"1000"},attrs:{href:"/"}},[e("img",{staticClass:"logo-image",staticStyle:{"z-index":"10"},attrs:{src:s("139d")}})])])}],u={name:"logo"},d=u,m=(s("adfe"),s("2877")),p=Object(m["a"])(d,l,c,!1,null,null,null),h=p.exports,v={name:"header",components:{logo:h}},f=v,g=(s("e8a9"),Object(m["a"])(f,r,o,!1,null,"119c05da",null)),_=g.exports,w={name:"App",components:{headerVue:_}},b=w,C=(s("fac7"),Object(m["a"])(b,i,n,!1,null,null,null)),y=C.exports,k=s("8c4f"),$=(s("14d9"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-page"},[e("div",{staticClass:"main-page-container"},[t._m(0),e("div",{staticClass:"main-page-buttons-wrapper"},[e("button",{staticClass:"sign-up-button"},[e("p",{staticClass:"sign-up-button-text",on:{click:function(e){return t.$router.push({name:"CongratsPage"})}}},[t._v("Об олимпиаде")])]),e("div",{staticClass:"main-page-login-buttons"},[e("button",{staticClass:"sign-up-button"},[e("p",{staticClass:"sign-up-button-text",on:{click:function(e){return t.$router.push({name:"register"})}}},[t._v("Регистрация")])]),e("div",{staticClass:"main-page-auth-buttons"},[e("button",{staticClass:"sign-up-button"},[e("p",{staticClass:"sign-up-button-text",on:{click:function(e){return t.$router.push({name:"login"})}}},[t._v("Войти")])]),t._m(1)])])])])])}),x=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"main-text"},[t._v("Приглашаем вас принять участие в нашей олимпиаде."),e("br"),e("br"),t._v(" Проверьте свои знания и навыки в области информатики и математики")])},function(){var t=this,e=t._self._c;return e("button",{staticClass:"sign-up-button-yandex"},[e("a",{staticClass:"sign-up-button-text",attrs:{href:"https://oauth.yandex.ru/authorize?response_type=token&client_id=e5684b66613f4cf1b3658e06514b4d75"}},[e("img",{staticClass:"main-page-yandex-icon",attrs:{src:s("d7e7"),alt:"Войти через yandex"}}),t._v(" Яндекс ID ")])])}],A={name:"mainPage"},S=A,I=(s("dc17"),Object(m["a"])(S,$,x,!1,null,"48543139",null)),O=I.exports,q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Congrats-page"},[e("header-vue"),t._m(0)],1)},T=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"greeting-page-container"},[e("h1",{staticClass:"greeting-page-title"},[t._v("Добро пожаловать!")]),e("p",[t._v("На сайт онлайн-олимпиады для школьников 10 - 11 классов "),e("b",[t._v("«Современные информационные технологии»")]),t._v("! ")]),e("p",[t._v("Олимпиада проводится "),e("b",[t._v("Военно-космической академией имени Александра Федоровича Можайского")]),t._v(" – крупнейшим политехническим вузом Министерства обороны Российской Федерации.")]),e("a",{staticClass:"greeting-page-tg-link",attrs:{target:"_blank",href:"https://t.me/vka62kaf_education"}},[t._v("Наш Telegram-канал")]),e("h2",{staticClass:"greeting-page-title"},[t._v("Основными целями Олимпиады являются:")]),e("ul",[e("li",[t._v("поиск и поддержка одаренных детей и талантливой молодежи во всех регионах Российской Федерации;")]),e("li",[t._v("стимулирование интереса детей и молодежи к инновационной деятельности в области высоких технологий, обеспечение равного доступа учеников к освоению передовых научных методов исследования;")]),e("li",[t._v("участие детей в научно-техническом творчестве, проведение ранней профессиональной ориентации молодежи;")]),e("li",[t._v("повышение образовательного уровня и отбор лучших участников в качестве абитуриентов Военно-космической академии имени А.Ф.Можайского.")])]),e("h2",{staticClass:"greeting-page-title"},[t._v("Возможности, дающие участие в Олимпиаде:")]),e("ol",[e("li",[t._v("Для победителей и призеров Олимпиады - получение льгот при поступлении в нашу Академию.")]),e("li",[t._v("Для наставников/тренеров – участие в мероприятии национального уровня, позволяющее увеличить аттестационные показатели педагогических работников.")]),e("li",[t._v("Для школ – повышение рейтинга образовательной организации.")])]),e("h4",{staticClass:"greeting-page-title"},[t._v(" Олимпиада проводится при поддержке ")]),e("ol",[e("li",[e("a",{staticClass:"sponsor11-link11",attrs:{target:"_blank",href:"https://www.78isb.ru/"}},[t._v("ООО «Инновационные системы безопасности»")])]),e("li",[e("a",{staticClass:"sponsor11-link11",attrs:{target:"_blank",href:"https://www.78isb.ru/"}},[t._v("Центр защиты информации ГК «Конфидент»")]),e("br"),e("img",{staticClass:"sponsor-img",attrs:{src:s("081b"),alt:"Центр защиты информации ГК «Конфидент»"}}),e("p",{staticClass:"sponsor-desc"},[t._v("Российский разработчик линейки средств защиты информации. Решения компании применяются для защиты конфиденциальной информации, в том числе содержащейся в ГИС, ИСПДн и АСУ ТП, значимых объектах КИИ и сведений, составляющих гостайну до уровня «совершенно секретно». Предназначены для разграничения, защиты и контроля доступа, межсетевого экранирования, доверенной загрузки, предотвращения вторжений и защиты виртуальных сред. Сертифицированы ФСТЭК России и Минобороны России.")])])]),e("p",[t._v(" Регистрация участников доступна до: "),e("b",[t._v("23:59 09 февраля 2024 года")])]),e("p",[t._v(" Даты проведения олимпиады: "),e("b",[t._v("10–11 февраля 2024 года")])])])}],j={name:"CongratsPage",components:{headerVue:_}},P=j,F=(s("b540"),Object(m["a"])(P,q,T,!1,null,"7a2ddd54",null)),B=F.exports,N=function(){var t=this,e=t._self._c;return e("div",{staticClass:"back-container"},[e("div",{staticClass:"container"},[e("div",{staticClass:"title-p"},[t._v("Регистрация")]),e("registerForm"),e("div",{staticClass:"title-end"},[t._v(" Уже зарегистрированы? "),e("div",{staticClass:"margin-left pointer",on:{click:function(e){return t.$router.push({name:"login"})}}},[t._v("Войти")])])],1)])},L=[],D=function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.checkForm.apply(null,arguments)}}},[e("div",{staticClass:"string"},[e("span",[t._v("ФИО:")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.name,expression:"form.name",modifiers:{trim:!0}}],attrs:{id:"name",type:"name",placeholder:"Иванов Иван Иванович"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),!t.$v.form.name.required&&t.$v.form.name.$dirty?e("p",{staticClass:"error-feedback"},[t._v(" Обязательное поле ")]):t._e()]),e("div",{staticClass:"string"},[e("span",[t._v("E-mail:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{id:"email",type:"email",placeholder:"ivanov@mail.ru"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),!this.$v.form.email.required&&t.$v.form.name.$dirty?e("p",{staticClass:"error-feedback"},[t._v(" Обязательное поле ")]):t._e(),!this.$v.form.email.email&&t.$v.form.name.$dirty?e("p",{staticClass:"error-feedback"},[t._v(" Некорректный email ")]):t._e()]),e("div",{staticClass:"string"},[e("span",[t._v("Школа:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.school,expression:"form.school"}],attrs:{id:"school",type:"text",placeholder:"1234"},domProps:{value:t.form.school},on:{input:function(e){e.target.composing||t.$set(t.form,"school",e.target.value)}}}),!this.$v.form.school.required&&t.$v.form.name.$dirty?e("p",{staticClass:"error-feedback"},[t._v(" Обязательное поле ")]):t._e()]),e("div",{staticClass:"string"},[e("span",[t._v("Класс:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.class,expression:"form.class"}],attrs:{id:"class",type:"text",placeholder:"11А"},domProps:{value:t.form.class},on:{input:function(e){e.target.composing||t.$set(t.form,"class",e.target.value)}}}),!this.$v.form.class.required&&t.$v.form.name.$dirty?e("p",{staticClass:"error-feedback"},[t._v(" Обязательное поле ")]):t._e()]),e("div",{staticClass:"string"},[e("span",[t._v("Пароль:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{id:"password",type:"password",placeholder:"Введите пароль"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),!this.$v.form.password.required&&t.$v.form.name.$dirty?e("p",{staticClass:"error-feedback"},[t._v(" Обязательное поле ")]):t._e(),!this.$v.form.password.minLength&&t.$v.form.name.$dirty?e("p",{staticClass:"error-feedback"},[t._v(" Здесь должно быть больше 7-и символов ")]):t._e()]),e("button",{staticClass:"btn glow-on-hover",attrs:{type:"submit"}},[t._v("Зарегистрироваться")])])},M=[],V=s("1dce"),E=s("b5ae");function J(t,e){return t>>>e|t<<32-e}function U(t){for(var e,s,a=Math.pow,i=a(2,32),n="length",r="",o=[],l=8*t[n],c=U.h=U.h||[],u=U.k=U.k||[],d=u[n],m={},p=2;d<64;p++)if(!m[p]){for(e=0;e<313;e+=p)m[e]=p;c[d]=a(p,.5)*i|0,u[d++]=a(p,1/3)*i|0}t+="";while(t[n]%64-56)t+="\0";for(e=0;e<t[n];e++){if(s=t.charCodeAt(e),s>>8)return;o[e>>2]|=s<<(3-e)%4*8}for(o[o[n]]=l/i|0,o[o[n]]=l,s=0;s<o[n];){var h=o.slice(s,s+=16),v=c;for(c=c.slice(0,8),e=0;e<64;e++){var f=h[e-15],g=h[e-2],_=c[0],w=c[4],b=c[7]+(J(w,6)^J(w,11)^J(w,25))+(w&c[5]^~w&c[6])+u[e]+(h[e]=e<16?h[e]:h[e-16]+(J(f,7)^J(f,18)^f>>>3)+h[e-7]+(J(g,17)^J(g,19)^g>>>10)|0),C=(J(_,2)^J(_,13)^J(_,22))+(_&c[1]^_&c[2]^c[1]&c[2]);c=[b+C|0].concat(c),c[4]=c[4]+b|0}for(e=0;e<8;e++)c[e]=c[e]+v[e]|0}for(e=0;e<8;e++)for(s=3;s+1;s--){var y=c[e]>>8*s&255;r+=(y<16?0:"")+y.toString(16)}return r}var R={name:"registerForm",mixins:[V["validationMixin"]],data(){return{form:{name:"",email:"",school:"",class:"",password:""}}},validations:{form:{name:{required:E["required"]},password:{required:E["required"],minLength:Object(E["minLength"])(7)},email:{required:E["required"],email:E["email"]},school:{required:E["required"]},class:{required:E["required"]}}},methods:{async checkForm(){if(this.$v.form.$touch(),!this.$v.form.$error)try{const t=U(this.form.password),e=JSON.stringify({name:this.form.name,email:this.form.email,school:this.form.school,class:this.form.class,password:t}),s=await this.$api.auth.register(e);"success"==s.data.status?(window.localStorage.setItem("email",this.form.email),this.$router.push({name:"login"})):"email is busy"==s.data.status&&alert("Этот адрес электронной почты занят используйте другой!")}catch(t){console.log(t)}}}},W=R,X=(s("a743"),Object(m["a"])(W,D,M,!1,null,"3e61546c",null)),Y=X.exports,H={name:"registerPage",components:{registerForm:Y}},Z=H,z=(s("a6c2"),Object(m["a"])(Z,N,L,!1,null,"6435fe22",null)),Q=z.exports,G=function(){var t=this;t._self._c;return t._m(0)},K=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-container"},[e("h1",[t._v("Auth")])])}],tt={name:"Auth",async mounted(){window.localStorage.setItem("getTime",!1);let t=/access_token=([^&]+)/.exec(document.location.href)[1];if(""!=t){window.localStorage.setItem("token",t);const s=await this.$api.auth.yandexAuthGetInfo(t),a=JSON.stringify({username:s.data.login,first_name:s.data.first_name,last_name:s.data.last_name,email:s.data.default_email,token:t,platorm:"yandex"});window.localStorage.setItem("email",s.data.default_email);try{const t=await this.$api.auth.postYandexAuth(a);window.localStorage.setItem("userId",t.data.id_user),window.localStorage.setItem("authFlag",!0)}catch(e){console.log(e)}}this.$router.push({name:"personalCabinet"})},data(){return{token:""}}},et=tt,st=Object(m["a"])(et,G,K,!1,null,"66a9b722",null),at=st.exports,it=function(){var t=this,e=t._self._c;return e("div",[e("headerVue"),e("div",{staticClass:"table-title"},[t._v("Таблица результатов")]),e("div",{staticClass:"lider"},[e("table",[t._m(0),e("tbody",t._l(t.table,(function(s){return e("tr",{key:s},[e("th",{attrs:{scope:"row"}},[t._v(t._s(s.id+1))]),e("td",[t._v(t._s(s.name))]),e("td",[t._v(t._s(s.score))])])})),0)])])],1)},nt=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Место")]),e("th",{attrs:{scope:"col"}},[t._v("Фамилия Имя")]),e("th",{attrs:{scope:"col"}},[t._v("Количество баллов")])])])}],rt={name:"leaderboard",components:{headerVue:_},created(){"false"==window.localStorage.getItem("authFlag")&&this.$router.push({name:"mainPage"})},mounted(){for(let t=0;t<this.$store.state.leaderboard.users.length;t++)this.table.push({id:t,name:this.$store.state.leaderboard.users[t],score:this.$store.state.leaderboard.scores[t]})},data(){return{table:[]}}},ot=rt,lt=(s("0fe1"),Object(m["a"])(ot,it,nt,!1,null,"29105320",null)),ct=lt.exports,ut=function(){var t=this,e=t._self._c;return e("div",{staticClass:"start-olympic-page"},[e("div",{staticClass:"start-olympic-page-container"},[e("h1",[t._v(t._s(t.title))]),t._m(0),e("button",{staticClass:"start-button"},[e("p",{staticClass:"start-button-text",on:{click:function(e){return t.$router.push({name:"olimpPage"})}}},[t._v("НАЧАТЬ ОЛИМПИАДУ")])])])])},dt=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"main-text"},[t._v("Задания расчитаны на учащихся 9-11 классов. Будут затронуты такие темы как: обьектно-ориентированное программирование, булевая алгербра, теория множеств, реляционная модель данных."),e("br"),t._v(" Тестирование идет 2 часа 30 минут."),e("br"),t._v(" Примеры тестовых заданий, можно увидеть по ссылке."),e("br"),t._v(" Будьте внимательны, после начала олимпиады, остановить ее уже будет нельзя."),e("br"),t._v(" Желаем удачи!"),e("br")])}],mt={name:"startOlympicPage",async mounted(){try{const t=await this.$api.mainPage.getInfo();this.title=t.data.olimpiad[0].name_olimpiad,this.$store.state.startTime=t.data.olimpiad[0].date_start,this.$store.state.endTime=t.data.olimpiad[0].date_end,this.$store.state.duration=t.data.olimpiad[0].work_time,this.$store.state.olimpId=t.data.olimpiad[0].id}catch(t){console.log(t)}},data(){return{title:"Olympiad"}}},pt=mt,ht=(s("d571"),Object(m["a"])(pt,ut,dt,!1,null,null,null)),vt=ht.exports,ft=function(){var t=this,e=t._self._c;return e("div",{staticClass:"back-container"},[e("div",{staticClass:"workspace"},[e("div",{staticClass:"left-side"},t._l(t.tasks,(function(s){return e("div",{key:s.id,staticClass:"task-container"},[e("div",{staticClass:"task-header"},[e("div",{staticClass:"number-task"},[t._v(" Задание № "+t._s(s.id+1)+" ")]),e("div",{staticClass:"ball-task"},[t._v(" "+t._s(t.scores[s.id])+" балла ")])]),e("div",{staticClass:"question"},[t._v(" "+t._s(s.question)+" ")]),"no_supplement"!=s.filename[s.id]?e("a",{staticClass:"link",attrs:{href:s.filename[s.id],download:""}},[t._v("скачать файл")]):t._e(),e("div",{staticClass:"answer"},[t._v(" Выберите правильный ответ: ")]),1==s.type?e("div",{staticClass:"reply"},t._l(s.answer,(function(a){return e("div",{key:a},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user_answers[s.id],expression:"user_answers[task.id]"}],attrs:{type:"radio"},domProps:{value:a,checked:t._q(t.user_answers[s.id],a)},on:{input:function(e){return t.inputHandler(s.id+1)},change:function(e){return t.$set(t.user_answers,s.id,a)}}}),e("label",[t._v(t._s(a))])])})),0):t._e(),2==s.type?e("div",{staticClass:"reply"},t._l(s.answer,(function(a){return e("div",{key:a},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user_answers[s.id],expression:"user_answers[task.id]"}],attrs:{type:"checkbox"},domProps:{value:a,checked:Array.isArray(t.user_answers[s.id])?t._i(t.user_answers[s.id],a)>-1:t.user_answers[s.id]},on:{input:function(e){return t.inputHandler(s.id+1)},change:function(e){var i=t.user_answers[s.id],n=e.target,r=!!n.checked;if(Array.isArray(i)){var o=a,l=t._i(i,o);n.checked?l<0&&t.$set(t.user_answers,s.id,i.concat([o])):l>-1&&t.$set(t.user_answers,s.id,i.slice(0,l).concat(i.slice(l+1)))}else t.$set(t.user_answers,s.id,r)}}}),e("label",[t._v(t._s(a))])])})),0):t._e(),3==s.type?e("div",{staticClass:"reply"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user_answers[s.id],expression:"user_answers[task.id]"}],attrs:{type:"text"},domProps:{value:t.user_answers[s.id]},on:{input:[function(e){e.target.composing||t.$set(t.user_answers,s.id,e.target.value)},function(e){return t.inputHandler(s.id+1)}]}})]):t._e(),e("button",{staticClass:"hint-btn",on:{click:function(e){return t.hintHandler(s.id)}}},[t._v("Подсказка")]),s.show_hint?e("div",{staticClass:"hint"},[t._v(t._s(s.hint))]):t._e()])})),0),e("div",{staticClass:"right-side"},[e("div",{staticClass:"task-list"},t._l(t.n_tasks,(function(s){return e("div",{key:s,class:{square:!t.passed_questions.includes(s),"active-square":t.passed_questions.includes(s)},attrs:{id:s}},[t._v(" "+t._s(s)+" ")])})),0),e("div",{staticClass:"center"},[e("button",{staticClass:"send",on:{click:function(e){return t.postAnswers()}}},[t._v(" Отправить результаты ")])]),e("timerVue",{staticClass:"timer"})],1)])])},gt=[],_t=(s("13d5"),function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"timer-cell"},[t._v(t._s(t.time.divMinutes)+":"+t._s(t.time.divSeconds))])])}),wt=[],bt={name:"timer",data(){return{time:{divMinutes:0,divSeconds:0},timer:null}},mounted(){console.log(window.localStorage.getItem("endTime")),this.startTiming(window.localStorage.getItem("endTime"))},methods:{countTime(t){let e=Date.now(),s=parseInt((t-e)/1e3);s>0?(this.time.divMinutes=60*parseInt(s%86400/3600)+parseInt(s%3600/60),this.time.divSeconds=s%60):clearTimeout(this.timer)},startTiming(t){this.timer=setInterval(this.countTime,1e3,t)}}},Ct=bt,yt=(s("c3b4"),Object(m["a"])(Ct,_t,wt,!1,null,null,null)),kt=yt.exports,$t={name:"olimpPage",components:{timerVue:kt},created(){"false"==window.localStorage.getItem("authFlag")&&this.$router.push({name:"mainPage"})},async mounted(){const t=await this.$api.task.getTask(window.localStorage.getItem("olimId"));this.types=t.data.list_type,this.answers=t.data.list_answers_all,this.questions=t.data.name_questions,this.list_id_questions=t.data.list_id_questions,this.scores=t.data.list_score,this.hints=t.data.list_discription,this.$store.state.maxScore=this.scores.reduce((t,e)=>t+e,0),this.filenames_list=t.data.list_name_suppliement,this.user_answers=this.questions.map(t=>[t]),this.user_answers=[],this.n_tasks=this.questions.length;for(let e=0;e<this.questions.length;e++)this.user_answers.push([]);for(let e=0;e<this.questions.length;e++)this.tasks.push({id:e,type:this.types[e],question:this.questions[e],answer:this.answers[e],hint:this.hints[e],show_hint:!1,filename:this.filenames_list})},data(){return{tasks:[],user_answers:[],types:[],answers:[],questions:[],list_id_questions:[],checked:[],scores:[],passed_questions:[],hints:["hint","hint","hint","hint","hint","hint","hint"],n_tasks:null,filenames_list:[]}},methods:{async postAnswers(){for(let e=0;e<this.questions.length;e++){let s={id_olimpiad:window.localStorage.getItem("olimId"),email:window.localStorage.getItem("email"),id_guestions:this.list_id_questions[e],user_answers:this.user_answers[e]};if(console.log(s.user_answers),0!=s.user_answers.length)try{let t=await this.$api.task.postAnswer(s);console.log(t),window.localStorage.setItem("passOlimp",!0)}catch(t){console.log(t)}}this.$router.push({name:"end"})},hintHandler(t){this.tasks[t].show_hint=0==this.tasks[t].show_hint},inputHandler(t){this.passed_questions.push(t)}}},xt=$t,At=(s("110d"),Object(m["a"])(xt,ft,gt,!1,null,"1e13e7e5",null)),St=At.exports,It=function(){var t=this,e=t._self._c;return e("div",{staticClass:"congrat-page"},[e("headerVue"),e("div",{staticClass:"content"},[e("div",{staticClass:"olimp-title"},[t._v("Олимпиада")]),e("div",{staticClass:"wrap-text"},[t._v(" Поздравляем "+t._s(t.username)+" с окончанием теcтирования!"),e("br"),t._v(" Вы набрали "+t._s(t.score)+" из "+t._s(this.$store.state.maxScore)+" баллов"),e("br"),t._v(" Результаты можно будет узнать по "),e("a",{staticClass:"link-wrap",on:{click:function(e){return t.toLeaderBoard()}}},[t._v("ссылке")]),t._v(", после окончания олимпиады ")])])],1)},Ot=[],qt={name:"congratulations",components:{headerVue:_},created(){"false"==window.localStorage.getItem("authFlag")&&this.$router.push({name:"mainPage"})},async mounted(){const t=await this.$api.task.getScore(window.localStorage.getItem("userId"),window.localStorage.getItem("olimId"));this.score=t.data.score_user,this.username=t.data.user_name},data(){return{score:null,username:""}},methods:{async toLeaderBoard(){const t=await this.$api.task.getLeaderBoard(window.localStorage.getItem("olimId"));console.log(t),t.data.flag?(this.$store.state.leaderboard.users=t.data.list_users,this.$store.state.leaderboard.scores=t.data.list_users_score,this.$router.push({name:"results"})):alert("Олимпиада ещё не закончилась, вы сможете узнать результаты позднее")}}},Tt=qt,jt=(s("bb91"),Object(m["a"])(Tt,It,Ot,!1,null,"18a4baaa",null)),Pt=jt.exports,Ft=function(){var t=this,e=t._self._c;return e("div",{staticClass:"back-container"},[e("div",{staticClass:"container"},[e("div",{staticClass:"title-p"},[t._v("Войти")]),e("loginForm"),e("div",{staticClass:"title-end"},[t._v(" Нет аккаунта? "),e("div",{staticClass:"margin-left pointer",on:{click:function(e){return t.$router.push({name:"register"})}}},[t._v("Регистрация")])])],1)])},Bt=[],Nt=function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.checkForm.apply(null,arguments)}}},[e("div",{staticClass:"string"},[e("span",[t._v("E-mail:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{id:"email",type:"email",placeholder:"ivanov@mail.ru"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),!t.$v.form.email.required&&t.$v.form.email.$dirty?e("p",{staticClass:"error-feedback"},[t._v(" Обязательное поле ")]):t._e(),!t.$v.form.email.email&&t.$v.form.email.$dirty?e("p",{staticClass:"error-feedback"},[t._v(" Некорректный email ")]):t._e()]),e("div",{staticClass:"string"},[e("span",[t._v("Пароль:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{id:"password",type:"password",placeholder:"Введите свой пароль"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),!t.$v.form.password.required&&t.$v.form.password.$dirty?e("p",{staticClass:"error-feedback"},[t._v(" Обязательное поле ")]):t._e(),!t.$v.form.password.minLength&&t.$v.form.password.$dirty?e("p",{staticClass:"error-feedback"},[t._v(" Здесь должно быть больше 7-и символов ")]):t._e()]),e("button",{staticClass:"btn glow-on-hover",attrs:{type:"submit"}},[t._v("Войти")])])},Lt=[],Dt={name:"loginForm",mixins:[V["validationMixin"]],validations:{form:{password:{required:E["required"],minLength:Object(E["minLength"])(7)},email:{required:E["required"],email:E["email"]}}},data(){return{form:{email:"",password:""}}},methods:{async checkForm(){if(this.$v.form.$touch(),!this.$v.form.$error)try{window.localStorage.setItem("getTime",!1),window.localStorage.setItem("email",this.form.email);const t=U(this.form.password),e=JSON.stringify({email:this.form.email,token:t}),s=await this.$api.auth.login(e);console.log(s),"Logged in successfully"==s.data.message?(window.localStorage.setItem("authFlag",!0),window.localStorage.setItem("email",s.data.email),this.$router.push({name:"personalCabinet"})):alert("Неверное имя пользователя или пароль, попробуйте ещё раз!")}catch(t){console.log(t)}}}},Mt=Dt,Vt=(s("1e01"),Object(m["a"])(Mt,Nt,Lt,!1,null,"2f4105ae",null)),Et=Vt.exports,Jt={name:"signInPage",components:{loginForm:Et}},Ut=Jt,Rt=(s("f4ac"),Object(m["a"])(Ut,Ft,Bt,!1,null,"6c6bf27c",null)),Wt=Rt.exports,Xt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"personal-page"},[e("div",{staticClass:"personal-page-container"},[e("div",{staticClass:"personal-info-container"},[e("img",{staticClass:"avatar",attrs:{src:s("92ef")}}),e("div",{staticClass:"user-info-table"},[e("strong",[t._v(t._s(t.name))]),t._v(" "),t.class_?e("div",[t._v("Класс "),e("strong",[t._v(t._s(t.class_))])]):t._e(),t._v(" "),t.school?e("div",[t._v("Школа "),e("strong",[t._v(t._s(t.school))])]):t._e()])]),e("div",{staticClass:"olympiad-info-container"},[t._m(0),t._l(t.olimpiads,(function(a){return e("div",{key:a},[e("div",{staticClass:"info-block"},[t._m(1,!0),e("div",[e("p",{staticClass:"olympic-name"},[t._v(" "+t._s(a.title)+" ")])]),e("div",[e("p",{staticClass:"olympic-time"},[t._v(" "+t._s(a.timeString)+" ")])]),e("div",{staticClass:"personal-page-buttons-wrapper"},[e("div",{staticClass:"padding-top"},[e("button",{staticClass:"olympic-result-button",on:{click:function(e){return t.toLeaderBoard(a.id)}}},[e("img",{staticClass:"olympic-result",attrs:{src:s("85e4")}})])]),e("div",[e("button",{staticClass:"olympic-sing-in-button",on:{click:function(e){return t.startOlimp(a.id,a.isStarted)}}},[t._v(" Начать ")])])])]),e("div",{staticClass:"popup-not-started",attrs:{hidden:"true"}},[t._v(" Олимпиада ещё не началась! ")]),e("div",{staticClass:"popup-ended",attrs:{hidden:"true"}},[t._v(" Олимпиада закончилась! ")]),e("div",{staticClass:"not-ended",attrs:{hidden:"true"}},[t._v(" Олимпиада ещё не закончилась! ")])])}))],2)])])},Yt=[function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("Доступные олимпиады")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"point"},[e("img",{staticClass:"point",attrs:{src:s("7834")}})])}];const Ht={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};var Zt={name:"Personal_Page",created(){"false"==window.localStorage.getItem("authFlag")&&this.$router.push({name:"mainPage"})},async mounted(){try{const t=await this.$api.auth.getlk(window.localStorage.getItem("userId")),e=t.data.user.split(" ");this.name=e[0]+" "+e[1][0]+". ",this.lastname=t.data.user.split(" ")[1],this.class_=t.data.class,this.school=t.data.school;let s=t.data.list_time_end;window.localStorage.setItem("list-end",s);let a=t.data.olimpiads,i=[],n=t.data.list_id_olimpiad,r=t.data.list_flag_time,o=t.data.list_time_work;window.localStorage.setItem("getTime",!1);for(let l=0;l<s.length;l++)i.push(this.convertTimeStemp2String(1e3*s[l]));for(let l=0;l<a.length;l++)this.olimpiads.push({id:n[l],title:a[l],time_end:1e3*s[l],timeString:i[l],isStarted:r[l],workTime:o[l]})}catch(t){console.log(t)}},data(){return{class_:"",school:"",olimpiads:[],name:"",lastName:""}},methods:{convertTimeStemp2String(t){let e=new Date(t);return e.toLocaleString("ru",Ht)},startOlimp(t,e){if(e)document.getElementsByClassName("popup-not-started")[t-1].hidden=!1,setTimeout(()=>{document.getElementsByClassName("popup-not-started")[t-1].hidden=!0},2e3);else{let e=(new Date).getTime();if(e<1e3*this.olimpiads[t-1].time_end){if("false"===window.localStorage.getItem("getTime")){const e=(new Date).getTime();window.localStorage.setItem("endTime",e+1e3*this.olimpiads[t-1].workTime),window.localStorage.setItem("getTime",!0)}window.localStorage.setItem("olimId",t),this.$router.push({name:"olimpPage"})}else document.getElementsByClassName("popup-ended")[t-1].hidden=!1,setTimeout(()=>{document.getElementsByClassName("popup-ended")[t-1].hidden=!0},2e3)}},toLeaderBoard(t){let e=(new Date).getTime();e>1e3*this.olimpiads[t-1].time_end?this.$router.push({name:"results"}):(document.getElementsByClassName("not-ended")[t-1].hidden=!1,setTimeout(()=>{document.getElementsByClassName("not-ended")[t-1].hidden=!0},2e3))}}},zt=Zt,Qt=(s("60e8"),Object(m["a"])(zt,Xt,Yt,!1,null,"544fcd66",null)),Gt=Qt.exports;console.log(a);var Kt=new k["a"]({routes:[{path:"/",name:"mainPage",component:O},{path:"/greeting",name:"CongratsPage",component:B},{path:"/register",name:"register",component:Q},{path:"/login",name:"login",component:Wt},{path:"/auth",name:"auth",component:at},{path:"/results",name:"results",component:ct},{path:"/start-olympic-page",name:"startOlympicPage",component:vt},{path:"/olimp-page",name:"olimpPage",component:St},{path:"/personalCabinet",name:"personalCabinet",component:Gt},{path:"/end",name:"end",component:Pt}]}),te=s("2f62");a["default"].use(te["a"]);var ee=new te["a"].Store({state:{name:"",password:"",answers:new Map,passOlimpFlag:!1,email:"",startTime:null,duration:null,score:null,maxScore:null,total:null,getTime:!1,leaderboard:{users:[],scores:[]}}}),se=s("cee4");const ae=se["a"].create({baseURL:"http://localhost:3000/"});var ie=ae,ne=function(t){return{getTask(e){return t.get("/api/event/"+e)},postAnswerToServer(e,s){return t.post("/api/event/"+e,s,{headers:{"Content-Type":"application/json"}})},postAnswer(e){return t.post("api/end/",e,{headers:{"Content-Type":"application/json"}})},addOlimpiad(e){return t.post("/api/add_olimp",e,{headers:{"Content-Type":"application/json"}})},addTask(e){return t.post("/api/add_task",e,{headers:{"Content-Type":"application/json"}})},getResultBoard(){return t.get("/api/end")},getScore(e,s){return t.get(`/api/end/result?id_user=${e}&id_olimpiad=${s}`)},getLeaderBoard(e){return t.get("/api/leader_board?id_olimp="+e)}}},re=function(t){return{getTime(){return t.get("http://localhost:3000/api/time")},getInfo(){return t.get("http://localhost:3000/api/index")}}},oe=function(t){return{register(e){return t.post("/api/reqister",e,{headers:{"Content-Type":"application/json"}})},login(e){return t.post("/api/auth",e,{headers:{"Content-Type":"application/json"}})},postYandexAuth(e){return t.post("api/yandexAuth",e,{headers:{"Content-Type":"application/json"}})},yandexAuthGetInfo(e){return t.get("https://login.yandex.ru/info?format=json&oauth_token="+e)},getlk(e){return t.get("/api/lk?id_user="+e)}}},le={task:ne(ie),mainPage:re(ie),auth:oe(ie)},ce={install(t){t.prototype.$api=le}};s("927c");a["default"].use(k["a"]),a["default"].use(ce),new a["default"]({render:t=>t(y),router:Kt,store:ee}).$mount("#app")},"5ee7":function(t,e,s){},"60e8":function(t,e,s){"use strict";s("4f62")},"6c05":function(t,e,s){},7194:function(t,e,s){},7834:function(t,e,s){t.exports=s.p+"img/point.3d5ac0ff.svg"},"83e2":function(t,e,s){},"85e4":function(t,e,s){t.exports=s.p+"img/olympic-result.1f817606.svg"},"927c":function(t,e,s){},"92ef":function(t,e,s){t.exports=s.p+"img/avatar.3b62358e.jpg"},a258:function(t,e,s){},a6c2:function(t,e,s){"use strict";s("bfcc")},a743:function(t,e,s){"use strict";s("deaf")},adfe:function(t,e,s){"use strict";s("244a")},b540:function(t,e,s){"use strict";s("564a")},bb91:function(t,e,s){"use strict";s("e016")},bfcc:function(t,e,s){},c3b4:function(t,e,s){"use strict";s("6c05")},d571:function(t,e,s){"use strict";s("a258")},d7e7:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIwSURBVHgBrVUxb9NQEL57dpgq5DFDQB6YYMnIgCozwVYWYDW/IAEWtqRbJ0h/AVmBJSNjxFBGssBUiVRUoqOF2Jr3jrvnF0jc51cb+CTLlu983/nuvnsIAVCWJMbsDAghQ8CUAFJnKti6QIKZWukZHn0/qYuB/sDdVFP8ms0ZNIKZRudm7CNS1Rd69/pAU+dT8+A2TK478ULv9gZVC24H740IcQz/ACQaRx9O9y8QSOaENAl+3e0B7FwtrzWOvwD8/FElGTLJ4W+CsuZSFkguBOVgmD8FvP8QcDOwgxk+5nZ/rL4uovNVX3oSWyeKRt7gnLGavAWUzCWRs1MAuYT0xk0IINGdaMr3u3GZvcp9XjZzF3wr0/5tiJg4DMxkzJUxV/bqXNSde2Xm79/5ynApREOKG/ug1sPV3JbmLyACFR30az3W0+FpbjNgKgRJnZmOP9u74gkC14uWSFXIag6el3/Bf6Amb2xz20KxEJa1Vq69Hj6yd+xes5OD+RBaoFAUIhCwUvXBs40XCM1BC8Wynl/mpl68LB/OvgFNX0FT2HWuVHwYdOKSrMWmWWxtoFadmcL5kg8PmHs9ZFXkZXmMZN5OD1M8+npipyjC6AnYU2oDdnLcOmhZGrDLLh7LQ/26tgvtln20ethcySEbeNb1H5L/f+BsCU0MSCiDXkB7FC7z/S1CnydlaWpIj1gjOTTDnGueS1OrhqBqLJExe27jylJM3EdLEahoSMbcTaIXvwBMYfD27deRpgAAAABJRU5ErkJggg=="},dc17:function(t,e,s){"use strict";s("83e2")},deaf:function(t,e,s){},e016:function(t,e,s){},e55d:function(t,e,s){},e8a9:function(t,e,s){"use strict";s("7194")},f4ac:function(t,e,s){"use strict";s("5ee7")},fac7:function(t,e,s){"use strict";s("54fa")}});
//# sourceMappingURL=app.334c5f8e.js.map