import Vue from "vue"
import Router from "vue-router"
import Home from './views/Home.vue'
import Produtos from './views/Produtos.vue'
Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [


        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: '/produtos',
            name: 'produtos',
            component: Produtos
        }
    ]
})

export default router