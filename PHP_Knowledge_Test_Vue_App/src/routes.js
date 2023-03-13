import { createWebHistory,createRouter } from "vue-router";
import Home from './components/home.vue'
import quizz from './components/quizz.vue'

const routes=[
    {
        path:'/',
        name: 'homme',
        component: Home
    },
    {
        path:'/quizz',
        name: 'quizz',
        component: quizz
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router;