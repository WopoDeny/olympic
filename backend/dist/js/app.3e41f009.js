(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},i=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"07d8":function(t,e,s){},"0fe1":function(t,e,s){"use strict";s("14f6")},"139d":function(t,e,s){t.exports=s.p+"img/emblem.c3580198.svg"},"14f6":function(t,e,s){},"1c84":function(t,e,s){"use strict";s("bdf8")},2045:function(t,e,s){"use strict";s("20e6")},"20e6":function(t,e,s){},2534:function(t,e,s){},"43de":function(t,e,s){},"50e9":function(t,e,s){"use strict";s("dbc2")},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app"},[e("router-view")],1)},i=[],r={name:"App"},o=r,l=(s("e6c0"),s("2877")),c=Object(l["a"])(o,n,i,!1,null,null,null),u=c.exports,d=s("8c4f"),m=(s("14d9"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-page"},[e("header-vue"),e("div",{staticClass:"main-page-container"},[t._m(0),e("button",{staticClass:"sign-up-button"},[e("p",{staticClass:"sign-up-button-text",on:{click:function(e){return t.$router.push({name:"register"})}}},[t._v("Зарегистрироваться")])])])],1)}),p=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"main-text"},[t._v("Приглашаем вас принять участие в нашей олимпиаде. "),e("br"),e("br"),t._v(" Проверьте свои знания и навыки в области информатики и математики")])}],h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("logo"),e("div",{staticClass:"title"},[t._v("Военно-космическая академия имени А.Ф. Можайского")])],1)},f=[],v=function(){var t=this;t._self._c;return t._m(0)},g=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo"},[e("img",{staticClass:"logo-image",attrs:{src:s("139d")}})])}],_={name:"logo"},w=_,b=(s("cc55"),Object(l["a"])(w,v,g,!1,null,null,null)),y=b.exports,C={name:"header",components:{logo:y}},k=C,x=(s("2045"),Object(l["a"])(k,h,f,!1,null,"eadaba6e",null)),S=x.exports,$={name:"mainPage",components:{headerVue:S}},I=$,T=(s("da1e"),Object(l["a"])(I,m,p,!1,null,"1e1e7e34",null)),O=T.exports,j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"back-container"},[e("headVue"),e("div",{staticClass:"container"},[e("div",{staticClass:"title-p"},[t._v("Регистрация")]),e("registerForm"),e("div",{staticClass:"media-auth"},[e("yandexAuthVue",{staticClass:"padding"})],1),e("div",{staticClass:"title-end"},[t._v(" Уже зарегистрированы? "),e("div",{staticClass:"margin-left pointer",on:{click:function(e){return t.$router.push({name:"login"})}}},[t._v("Войти")])])],1)],1)},P=[],A=function(){var t=this,e=t._self._c;return e("div",{on:{click:t.signIn}},[e("img",{staticClass:"doc-c-image doc-c-image",attrs:{src:s("81ee")}})])},V=[];const q="e5684b66613f4cf1b3658e06514b4d75";var N={name:"yandexAuth",data(){return{externalScript:null}},methods:{async signIn(){window.location.href="https://oauth.yandex.ru/authorize?response_type=token&client_id="+q}}},F=N,B=Object(l["a"])(F,A,V,!1,null,"74752643",null),M=B.exports,E=function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.checkForm.apply(null,arguments)}}},[e("div",{staticClass:"string"},[e("span",[t._v("ФИО:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],attrs:{id:"name",type:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),e("div",{staticClass:"string"},[e("span",[t._v("E-mail:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{id:"email",type:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),e("div",{staticClass:"string"},[e("span",[t._v("Школа:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.school,expression:"form.school"}],attrs:{id:"school",type:"text"},domProps:{value:t.form.school},on:{input:function(e){e.target.composing||t.$set(t.form,"school",e.target.value)}}})]),e("div",{staticClass:"string"},[e("span",[t._v("Класс:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.class,expression:"form.class"}],attrs:{id:"class",type:"text"},domProps:{value:t.form.class},on:{input:function(e){e.target.composing||t.$set(t.form,"class",e.target.value)}}})]),e("div",{staticClass:"string"},[e("span",[t._v("Пароль:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{id:"password",type:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),e("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Зарегистрироваться")])])},L=[];function D(t,e){return t>>>e|t<<32-e}function J(t){for(var e,s,a=Math.pow,n=a(2,32),i="length",r="",o=[],l=8*t[i],c=J.h=J.h||[],u=J.k=J.k||[],d=u[i],m={},p=2;d<64;p++)if(!m[p]){for(e=0;e<313;e+=p)m[e]=p;c[d]=a(p,.5)*n|0,u[d++]=a(p,1/3)*n|0}t+="";while(t[i]%64-56)t+="\0";for(e=0;e<t[i];e++){if(s=t.charCodeAt(e),s>>8)return;o[e>>2]|=s<<(3-e)%4*8}for(o[o[i]]=l/n|0,o[o[i]]=l,s=0;s<o[i];){var h=o.slice(s,s+=16),f=c;for(c=c.slice(0,8),e=0;e<64;e++){var v=h[e-15],g=h[e-2],_=c[0],w=c[4],b=c[7]+(D(w,6)^D(w,11)^D(w,25))+(w&c[5]^~w&c[6])+u[e]+(h[e]=e<16?h[e]:h[e-16]+(D(v,7)^D(v,18)^v>>>3)+h[e-7]+(D(g,17)^D(g,19)^g>>>10)|0),y=(D(_,2)^D(_,13)^D(_,22))+(_&c[1]^_&c[2]^c[1]&c[2]);c=[b+y|0].concat(c),c[4]=c[4]+b|0}for(e=0;e<8;e++)c[e]=c[e]+f[e]|0}for(e=0;e<8;e++)for(s=3;s+1;s--){var C=c[e]>>8*s&255;r+=(C<16?0:"")+C.toString(16)}return r}var G={name:"registerForm",data(){return{form:{name:"",email:"",school:"",class:"",password:""}}},methods:{async checkForm(){try{const t=J(this.form.password),e=JSON.stringify({name:this.form.name,email:this.form.email,school:this.form.school,class:this.form.class,password:t}),s=await this.$api.auth.register(e);console.log(s),"success"==s.data.status&&(window.localStorage.setItem("authFlag",!0),//!!!! потом исправить
this.$router.push({name:"login"}))}catch(t){console.log(t)}}}},H=G,R=(s("f61b"),Object(l["a"])(H,E,L,!1,null,"5167ecb0",null)),Y=R.exports,z={name:"registerPage",components:{headVue:S,yandexAuthVue:M,registerForm:Y}},U=z,K=(s("867b"),Object(l["a"])(U,j,P,!1,null,"868c10d2",null)),Q=K.exports,W=function(){var t=this;t._self._c;return t._m(0)},X=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-container"},[e("h1",[t._v("Auth")])])}],Z={name:"Auth",async mounted(){window.localStorage.setItem("getTime",!1);let t=/access_token=([^&]+)/.exec(document.location.href)[1];if(""!=t){window.localStorage.setItem("token",t);const s=await this.$api.auth.yandexAuthGetInfo(t),a=JSON.stringify({username:s.data.login,first_name:s.data.first_name,last_name:s.data.last_name,email:s.data.default_email,token:t,platorm:"yandex"});try{const t=await this.$api.auth.postYandexAuth(a);window.localStorage.setItem("userId",t.data.id_user),window.localStorage.setItem("authFlag",!0)}catch(e){console.log(e)}}this.$router.push({name:"personalCabinet"})},data(){return{token:""}}},tt=Z,et=Object(l["a"])(tt,W,X,!1,null,"644c5c64",null),st=et.exports,at=function(){var t=this,e=t._self._c;return e("div",[e("headerVue"),e("div",{staticClass:"table-title"},[t._v("Таблица результатов")]),e("div",{staticClass:"lider"},[e("table",[t._m(0),e("tbody",t._l(t.table,(function(s){return e("tr",{key:s},[e("th",{attrs:{scope:"row"}},[t._v(t._s(s.id+1))]),e("td",[t._v(t._s(s.name))]),e("td",[t._v(t._s(s.score))])])})),0)])])],1)},nt=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Место")]),e("th",{attrs:{scope:"col"}},[t._v("Фамилия Имя")]),e("th",{attrs:{scope:"col"}},[t._v("Количество баллов")])])])}],it={name:"leaderboard",components:{headerVue:S},created(){"false"==window.localStorage.getItem("authFlag")&&this.$router.push({name:"mainPage"})},mounted(){for(let t=0;t<this.$store.state.leaderboard.users.length;t++)this.table.push({id:t,name:this.$store.state.leaderboard.users[t],score:this.$store.state.leaderboard.scores[t]})},data(){return{table:[]}}},rt=it,ot=(s("0fe1"),Object(l["a"])(rt,at,nt,!1,null,"29105320",null)),lt=ot.exports,ct=function(){var t=this,e=t._self._c;return e("div",{staticClass:"start-olympic-page"},[e("header-vue"),e("div",{staticClass:"start-olympic-page-container"},[e("h1",[t._v(t._s(t.title))]),t._m(0),e("button",{staticClass:"start-button"},[e("p",{staticClass:"start-button-text",on:{click:function(e){return t.$router.push({name:"olimpPage"})}}},[t._v("НАЧАТЬ ОЛИМПИАДУ")])])])],1)},ut=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"main-text"},[t._v("Задания расчитаны на учащихся 9-11 классов. Будут затронуты такие темы как: обьектно-ориентированное программирование, булевая алгербра, теория множеств, реляционная модель данных."),e("br"),t._v(" Тестирование идет 2 часа 30 минут."),e("br"),t._v(" Примеры тестовых заданий, можно увидеть по ссылке."),e("br"),t._v(" Будьте внимательны, после начала олимпиады, остановить ее уже будет нельзя."),e("br"),t._v(" Желаем удачи!"),e("br")])}],dt={name:"startOlympicPage",components:{headerVue:S},async mounted(){try{const t=await this.$api.mainPage.getInfo();this.title=t.data.olimpiad[0].name_olimpiad,this.$store.state.startTime=t.data.olimpiad[0].date_start,this.$store.state.endTime=t.data.olimpiad[0].date_end,this.$store.state.duration=t.data.olimpiad[0].work_time,this.$store.state.olimpId=t.data.olimpiad[0].id}catch(t){console.log(t)}},data(){return{title:"Olympiad"}}},mt=dt,pt=(s("9154"),Object(l["a"])(mt,ct,ut,!1,null,null,null)),ht=pt.exports,ft=function(){var t=this,e=t._self._c;return e("div",{staticClass:"back-container"},[e("headerVue"),e("div",{staticClass:"workspace"},[e("div",{staticClass:"left-side"},t._l(t.tasks,(function(s){return e("div",{key:s.id,staticClass:"task-container"},[e("div",{staticClass:"task-header"},[e("div",{staticClass:"number-task"},[t._v(" Задание № "+t._s(s.id+1)+" ")]),e("div",{staticClass:"ball-task"},[t._v(" "+t._s(t.scores[s.id])+" балла ")])]),e("div",{staticClass:"question"},[t._v(" "+t._s(s.question)+" ")]),e("div",{staticClass:"answer"},[t._v(" Выберите правильный ответ: ")]),1==s.type?e("div",{staticClass:"reply"},t._l(s.answer,(function(a){return e("div",{key:a},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user_answers[s.id],expression:"user_answers[task.id]"}],attrs:{type:"radio"},domProps:{value:a,checked:t._q(t.user_answers[s.id],a)},on:{change:function(e){return t.$set(t.user_answers,s.id,a)}}}),e("label",[t._v(t._s(a))])])})),0):t._e(),2==s.type?e("div",{staticClass:"reply"},t._l(s.answer,(function(a){return e("div",{key:a},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user_answers[s.id],expression:"user_answers[task.id]"}],attrs:{type:"checkbox"},domProps:{value:a,checked:Array.isArray(t.user_answers[s.id])?t._i(t.user_answers[s.id],a)>-1:t.user_answers[s.id]},on:{change:function(e){var n=t.user_answers[s.id],i=e.target,r=!!i.checked;if(Array.isArray(n)){var o=a,l=t._i(n,o);i.checked?l<0&&t.$set(t.user_answers,s.id,n.concat([o])):l>-1&&t.$set(t.user_answers,s.id,n.slice(0,l).concat(n.slice(l+1)))}else t.$set(t.user_answers,s.id,r)}}}),e("label",[t._v(t._s(a))])])})),0):t._e(),e("button",{staticClass:"hint-btn",on:{click:function(e){return t.hintHandler(s.id)}}},[t._v("Подсказка")]),s.show_hint?e("div",{staticClass:"hint"},[t._v(t._s(s.hint))]):t._e()])})),0),e("div",{staticClass:"right-side"},[e("div",{staticClass:"task-list"},t._l(t.n_tasks,(function(s){return e("div",{key:s,staticClass:"square"},[t._v(" "+t._s(s)+" ")])})),0),e("div",{staticClass:"center"},[e("button",{staticClass:"send",on:{click:function(e){return t.postAnswers()}}},[t._v(" Отправить результаты ")])]),e("timerVue",{staticClass:"timer"})],1)])],1)},vt=[],gt=(s("13d5"),function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"timer-cell"},[t._v(t._s(t.time.divMinutes)+":"+t._s(t.time.divSeconds))])])}),_t=[],wt={name:"timer",data(){return{time:{divMinutes:0,divSeconds:0},timer:null}},mounted(){console.log(window.localStorage.getItem("endTime")),this.startTiming(window.localStorage.getItem("endTime"))},methods:{countTime(t){let e=Date.now(),s=parseInt((t-e)/1e3);s>0?(this.time.divMinutes=60*parseInt(s%86400/3600)+parseInt(s%3600/60),this.time.divSeconds=s%60):clearTimeout(this.timer)},startTiming(t){this.timer=setInterval(this.countTime,1e3,t)}}},bt=wt,yt=(s("581d"),Object(l["a"])(bt,gt,_t,!1,null,null,null)),Ct=yt.exports,kt={name:"olimpPage",components:{headerVue:S,timerVue:Ct},created(){"false"==window.localStorage.getItem("authFlag")&&this.$router.push({name:"mainPage"})},async mounted(){const t=await this.$api.task.getTask(window.localStorage.getItem("olimId"));this.types=t.data.list_type,this.answers=t.data.list_answers_all,this.questions=t.data.name_questions,this.list_id_questions=t.data.list_id_questions,this.scores=t.data.list_score,this.hints=t.data.list_discription,this.$store.state.maxScore=this.scores.reduce((t,e)=>t+e,0),this.user_answers=this.questions.map(t=>[t]),this.user_answers=[],this.n_tasks=this.questions.length;for(let e=0;e<this.questions.length;e++)this.user_answers.push([]);for(let e=0;e<this.questions.length;e++)this.tasks.push({id:e,type:this.types[e],question:this.questions[e],answer:this.answers[e],hint:this.hints[e],show_hint:!1})},data(){return{tasks:[],user_answers:[],types:[],answers:[],questions:[],list_id_questions:[],checked:[],scores:[],hints:["hint","hint","hint","hint","hint","hint","hint"],n_tasks:null}},methods:{async postAnswers(){for(let e=0;e<this.questions.length;e++){let s={id_olimpiad:window.localStorage.getItem("olimId"),id_user:window.localStorage.getItem("userId"),id_guestions:this.list_id_questions[e],user_answers:this.user_answers[e]};if(console.log(s.user_answers),0!=s.user_answers.length)try{let t=await this.$api.task.postAnswer(s);console.log(t)}catch(t){console.log(t)}}this.$router.push({name:"end"})},hintHandler(t){this.tasks[t].show_hint=0==this.tasks[t].show_hint}}},xt=kt,St=(s("bb3e"),Object(l["a"])(xt,ft,vt,!1,null,"0c805168",null)),$t=St.exports,It=function(){var t=this,e=t._self._c;return e("div",{staticClass:"congrat-page"},[e("headerVue"),e("div",{staticClass:"content"},[e("div",{staticClass:"olimp-title"},[t._v("Олимпиада")]),e("div",{staticClass:"wrap-text"},[t._v(" Поздравляем "+t._s(t.username)+" с окончанием теcтирования!"),e("br"),t._v(" Вы набрали "+t._s(t.score)+" из "+t._s(this.$store.state.maxScore)+" баллов"),e("br"),t._v(" Результаты можно будет узнать по "),e("a",{staticClass:"link-wrap",on:{click:function(e){return t.toLeaderBoard()}}},[t._v("ссылке")]),t._v(", после окончания олимпиады ")])])],1)},Tt=[],Ot={name:"congratulations",components:{headerVue:S},created(){"false"==window.localStorage.getItem("authFlag")&&this.$router.push({name:"mainPage"})},async mounted(){const t=await this.$api.task.getScore(window.localStorage.getItem("userId"),window.localStorage.getItem("olimId"));this.score=t.data.score_user,this.username=t.data.user_name},data(){return{score:null,username:""}},methods:{async toLeaderBoard(){const t=await this.$api.task.getLeaderBoard(window.localStorage.getItem("olimId"));console.log(t),t.data.flag?(this.$store.state.leaderboard.users=t.data.list_users,this.$store.state.leaderboard.scores=t.data.list_users_score,this.$router.push({name:"results"})):alert("Олимпиада ещё не закончилась, вы сможете узнать результаты позднее")}}},jt=Ot,Pt=(s("1c84"),Object(l["a"])(jt,It,Tt,!1,null,"36f2c274",null)),At=Pt.exports,Vt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"back-container"},[e("headVue"),e("div",{staticClass:"container"},[e("div",{staticClass:"title-p"},[t._v("Войти")]),e("loginForm"),e("div",{staticClass:"media-auth"},[e("yandexAuthVue",{staticClass:"padding"})],1),e("div",{staticClass:"title-end"},[t._v(" Нет аккаунта? "),e("div",{staticClass:"margin-left pointer",on:{click:function(e){return t.$router.push({name:"register"})}}},[t._v("Зарегистрироваться")])])],1)],1)},qt=[],Nt=function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.checkForm.apply(null,arguments)}}},[e("div",{staticClass:"string"},[e("span",[t._v("E-mail:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{id:"email",type:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),e("div",{staticClass:"string"},[e("span",[t._v("Пароль:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{id:"password",type:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),e("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Войти")])])},Ft=[],Bt={name:"loginForm",data(){return{form:{email:"",password:""}}},methods:{async checkForm(){try{window.localStorage.setItem("getTime",!1);const t=J(this.form.password),e=JSON.stringify({email:this.form.email,token:t}),s=await this.$api.auth.login(e);window.localStorage.setItem("authFlag",!0),window.localStorage.setItem("userId",s.data.id_user),this.$router.push({name:"personalCabinet"})}catch(t){console.log(t)}}}},Mt=Bt,Et=(s("a91e"),Object(l["a"])(Mt,Nt,Ft,!1,null,"66e2cfd2",null)),Lt=Et.exports,Dt={name:"signInPage",components:{headVue:S,yandexAuthVue:M,loginForm:Lt}},Jt=Dt,Gt=(s("50e9"),Object(l["a"])(Jt,Vt,qt,!1,null,"26f8873c",null)),Ht=Gt.exports,Rt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"personal-page"},[e("headerVue"),e("div",{staticClass:"personal-page-container"},[e("div",{staticClass:"personal-info-container"},[e("img",{staticClass:"avatar",attrs:{src:s("92ef")}}),e("div",{staticClass:"user-info-table"},[e("div",[t._v(t._s(t.name))]),t._v(" "),t.class_?e("div",[t._v(t._s(t.class_)+" класс")]):t._e(),t._v(" "),t.school?e("div",[t._v(t._s(t.school)+" школа")]):t._e()])]),e("div",{staticClass:"olympiad-info-container"},[t._m(0),t._l(t.olimpiads,(function(a){return e("div",{key:a},[e("div",{staticClass:"info-block"},[t._m(1,!0),e("div",[e("p",{staticClass:"olympic-name"},[t._v(" "+t._s(a.title)+" ")])]),e("div",[e("p",{staticClass:"olympic-time"},[t._v(" "+t._s(a.timeString)+" ")])]),e("div",{staticClass:"padding-top"},[e("button",{staticClass:"olympic-result-button",on:{click:function(e){return t.toLeaderBoard(a.id)}}},[e("img",{staticClass:"olympic-result",attrs:{src:s("85e4")}})])]),e("div",[e("button",{staticClass:"olympic-sing-in-button",on:{click:function(e){return t.startOlimp(a.id,a.isStarted)}}},[t._v(" Начать ")])])]),e("div",{staticClass:"popup-not-started",attrs:{hidden:"true"}},[t._v(" Олимпиада ещё не началась! ")]),e("div",{staticClass:"popup-ended",attrs:{hidden:"true"}},[t._v(" Олимпиада закончилась! ")]),e("div",{staticClass:"not-ended",attrs:{hidden:"true"}},[t._v(" Олимпиада ещё не закончилась! ")])])}))],2)])],1)},Yt=[function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("Доступные олимпиады")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"point"},[e("img",{staticClass:"point",attrs:{src:s("7834")}})])}];const zt={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};var Ut={name:"Personal_Page",components:{headerVue:S},created(){"false"==window.localStorage.getItem("authFlag")&&this.$router.push({name:"mainPage"})},async mounted(){try{const t=await this.$api.auth.getlk(window.localStorage.getItem("userId"));this.name=t.data.user.split(" ")[0],this.lastname=t.data.user.split(" ")[1],this.class_=t.data.class,this.school=t.data.school;let e=t.data.list_time_end;window.localStorage.setItem("list-end",e);let s=t.data.olimpiads,a=[],n=t.data.list_id_olimpiad,i=t.data.list_flag_time,r=t.data.list_time_work;window.localStorage.setItem("getTime",!1);for(let o=0;o<e.length;o++)a.push(this.convertTimeStemp2String(1e3*e[o]));for(let o=0;o<s.length;o++)this.olimpiads.push({id:n[o],title:s[o],time_end:1e3*e[o],timeString:a[o],isStarted:i[o],workTime:r[o]})}catch(t){console.log(t)}},data(){return{class_:"",school:"",olimpiads:[],name:"",lastName:""}},methods:{convertTimeStemp2String(t){let e=new Date(t);return e.toLocaleString("ru",zt)},startOlimp(t,e){if(e)document.getElementsByClassName("popup-not-started")[t-1].hidden=!1,setTimeout(()=>{document.getElementsByClassName("popup-not-started")[t-1].hidden=!0},2e3);else{let e=(new Date).getTime();if(e<1e3*this.olimpiads[t-1].time_end){if("false"===window.localStorage.getItem("getTime")){const e=(new Date).getTime();window.localStorage.setItem("endTime",e+1e3*this.olimpiads[t-1].workTime),window.localStorage.setItem("getTime",!0)}window.localStorage.setItem("olimId",t),this.$router.push({name:"olimpPage"})}else document.getElementsByClassName("popup-ended")[t-1].hidden=!1,setTimeout(()=>{document.getElementsByClassName("popup-ended")[t-1].hidden=!0},2e3)}},toLeaderBoard(t){let e=(new Date).getTime();e>1e3*this.olimpiads[t-1].time_end?this.$router.push({name:"results"}):(document.getElementsByClassName("not-ended")[t-1].hidden=!1,setTimeout(()=>{document.getElementsByClassName("not-ended")[t-1].hidden=!0},2e3))}}},Kt=Ut,Qt=(s("e863"),Object(l["a"])(Kt,Rt,Yt,!1,null,"3fb55977",null)),Wt=Qt.exports;console.log(a);var Xt=new d["a"]({routes:[{path:"/",name:"mainPage",component:O},{path:"/register",name:"register",component:Q},{path:"/login",name:"login",component:Ht},{path:"/auth",name:"auth",component:st},{path:"/results",name:"results",component:lt},{path:"/start-olympic-page",name:"startOlympicPage",component:ht},{path:"/olimp-page",name:"olimpPage",component:$t},{path:"/personalCabinet",name:"personalCabinet",component:Wt},{path:"/end",name:"end",component:At}]}),Zt=s("2f62");a["default"].use(Zt["a"]);var te=new Zt["a"].Store({state:{name:"",password:"",answers:new Map,passOlimpFlag:!1,email:"",startTime:null,duration:null,score:null,maxScore:null,total:null,getTime:!1,leaderboard:{users:[],scores:[]}}}),ee=s("cee4");const se=ee["a"].create({baseURL:"http://localhost:3000/"});var ae=se,ne=function(t){return{getTask(e){return t.get("/api/event/"+e)},postAnswerToServer(e,s){return t.post("/api/event/"+e,s,{headers:{"Content-Type":"application/json"}})},postAnswer(e){return t.post("api/end/",e,{headers:{"Content-Type":"application/json"}})},addOlimpiad(e){return t.post("/api/add_olimp",e,{headers:{"Content-Type":"application/json"}})},addTask(e){return t.post("/api/add_task",e,{headers:{"Content-Type":"application/json"}})},getResultBoard(){return t.get("/api/end")},getScore(e,s){return t.get(`/api/end/result?id_user=${e}&id_olimpiad=${s}`)},getLeaderBoard(e){return t.get("/api/leader_board?id_olimp="+e)}}},ie=function(t){return{getTime(){return t.get("http://localhost:3000/api/time")},getInfo(){return t.get("http://localhost:3000/api/index")}}},re=function(t){return{register(e){return t.post("/api/reqister",e,{headers:{"Content-Type":"application/json"}})},login(e){return t.post("/api/auth",e,{headers:{"Content-Type":"application/json"}})},postYandexAuth(e){return t.post("api/yandexAuth",e,{headers:{"Content-Type":"application/json"}})},yandexAuthGetInfo(e){return t.get("https://login.yandex.ru/info?format=json&oauth_token="+e)},getlk(e){return t.get("/api/lk?id_user="+e)}}},oe={task:ne(ae),mainPage:ie(ae),auth:re(ae)},le={install(t){t.prototype.$api=oe}};s("927c");a["default"].use(d["a"]),a["default"].use(le),new a["default"]({render:t=>t(u),router:Xt,store:te}).$mount("#app")},"581d":function(t,e,s){"use strict";s("be52")},"618e":function(t,e,s){},7643:function(t,e,s){},7834:function(t,e,s){t.exports=s.p+"img/point.3d5ac0ff.svg"},"81ee":function(t,e,s){t.exports=s.p+"img/yandex.f2d3e8b0.svg"},"85e4":function(t,e,s){t.exports=s.p+"img/olympic-result.1f817606.svg"},"867b":function(t,e,s){"use strict";s("43de")},9154:function(t,e,s){"use strict";s("9e79")},"927c":function(t,e,s){},"92ef":function(t,e,s){t.exports=s.p+"img/avatar.3b62358e.jpg"},"9e79":function(t,e,s){},a265:function(t,e,s){},a91e:function(t,e,s){"use strict";s("618e")},bb3e:function(t,e,s){"use strict";s("07d8")},bdf8:function(t,e,s){},be52:function(t,e,s){},cc55:function(t,e,s){"use strict";s("a265")},d9f8:function(t,e,s){},da1e:function(t,e,s){"use strict";s("de69")},dbc2:function(t,e,s){},de69:function(t,e,s){},e6c0:function(t,e,s){"use strict";s("2534")},e863:function(t,e,s){"use strict";s("d9f8")},f61b:function(t,e,s){"use strict";s("7643")}});
//# sourceMappingURL=app.3e41f009.js.map