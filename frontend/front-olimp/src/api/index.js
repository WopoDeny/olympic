import instance from './instance.js'
import taskModule from './task.js'
import mainPageModule from './mainPage.js'
import authModule from './auth.js'

export default {
    task: taskModule(instance),
    mainPage: mainPageModule(instance),
    auth: authModule(instance)
}