//import {createRouter, createWebHistory} from 'vue-router'
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes
// })
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router