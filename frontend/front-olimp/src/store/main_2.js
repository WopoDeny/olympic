import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{ //  храним логин и пароль
        name: '',
        password: '',
        answers: new Map(),
        passOlimpFlag: false, // флаг прохождения олимпиады
        email: '',
        startTime: null, // timestamp
        duration: null,
        score: null,
        maxScore: null,
        total: null,
        getTime: false,
        leaderboard : {
            users: [],
            scores: []
        }
    }
})