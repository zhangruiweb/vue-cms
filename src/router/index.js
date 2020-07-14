import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Classify from '@/view/classify'
import Shop from '@/view/Shop'
import Mine from '@/view/mine'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/classify',
            name: 'Classify',
            component: Classify
        },
        {
            path: '/shop',
            name: 'Shop',
            component: Shop
        },
        {
            path: '/mine',
            name: 'Mine',
            component: Mine
        }
    ]
})
