import VueRouter from 'vue-router'
import * as Vue from 'vue'
console.log(Vue)
import mainPage from "../pages/MainPage";
import CongratsPage from "../pages/CongratsPage";
import registerPage from '../pages/RegisterPage.vue'
import Auth from '../components/auth.vue'
import leaderboard from '../pages/leaderPage.vue'
import startOlympicPage from '../pages/StartOlympePage.vue'
import OlimpPage from '../pages/olimpPage'
import congratulations from '../pages/congratulations.vue'
import signInPage from '../pages/singIn.vue'
import Personal_Page from '../pages/PersonalCabinet.vue'

export default new VueRouter({
    routes:[
        {
        path: '/',
        name: "mainPage",
        component: mainPage
        },
        {
            path: '/greeting',
            name: "CongratsPage",
            component: CongratsPage
        },
        {
            path: '/register',
            name: "register",
            component: registerPage
        },
        {
            path: '/login',
            name: "login",
            component: signInPage
        },
        {
            path: '/auth',
            name: 'auth',
            component: Auth
        },
        {
            path: '/results',
            name: 'results',
            component: leaderboard
        },
        {
            path: '/start-olympic-page',
            name: "startOlympicPage",
            component: startOlympicPage
        },
        {
            path: '/olimp-page',
            name: 'olimpPage',
            component: OlimpPage

        },
        {
            path: '/personalCabinet',
            name: 'personalCabinet',
            component: Personal_Page
        },
        {
            path: '/end',
            name: 'end',
            component: congratulations

        },
    ]
})
