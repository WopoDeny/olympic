import axios from 'axios'

const instance = axios.create({
    // baseURL: 'https://olimpiadvka.ru' // вставьте свой url
    baseURL: 'http://localhost:3000/' // вставьте свой url
})
export default instance
