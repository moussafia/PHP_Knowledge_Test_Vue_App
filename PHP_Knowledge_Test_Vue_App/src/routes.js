import { createWebHistory,createRouter } from "vue-router";
import Home from './components/home.vue'
import quizz from './components/quizz.vue'
import resultat from './components/resultat.vue'

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
    },
    {
        path:'/resultat',
        name: 'resultat',
        component: resultat
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router;