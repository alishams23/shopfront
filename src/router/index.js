import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/body.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Register from '../views/Register.vue'
import Product from '../views/product.vue'
import Search from '../views/Search.vue'
import SearchBlog from '../views/searchBlog.vue'
import store from '@/store'
import Blog from '../views/Blog.vue'
import Contact from '../views/contact.vue'
import Cart from '../views/Cart.vue'
import Repairs from '../views/repairs.vue'
import Repair from '../views/repair.vue'
import Service from '../views/service.vue'
import Service_item from '../views/service_item.vue'
import peopleProduct from '../views/peopleProduct.vue'


const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { LoginRequired: false }

    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/logout',
        name: 'Logout',
        component: Logout,
        meta: { LoginRequired: true }

    },
    {
        path: '/search/',
        name: 'Search',
        component: Search,
        props: true
    },
    {
        path: '/blogSearch/',
        name: 'blogSearch',
        component: SearchBlog,
        props: true
    },
    {
        path: '/catalog/',
        name: 'catalog',
        component: SearchBlog,
        props: true
    },
    {
        path: '/application/',
        name: 'application',
        component: SearchBlog,
        props: true
    },
    {
        path: '/learn/',
        name: 'learn',
        component: SearchBlog,
        props: true
    },
    {
        path: '/categories/:idCategory/',
        name: 'categories',
        component: Search,
        props: true
    },
    {
        path: '/stocks/:idCategory/',
        name: 'stocks',
        component: Search,
        props: true
    },
    {
        path: '/product/:id/',
        name: 'Product',
        component: Product,
    },
    {
        path: '/blog/:id/',
        name: 'Blog',
        component: Blog,
    },
    {
        path: '/contact/',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/Cart/',
        name: 'Cart',
        component: Cart,
        meta: { LoginRequired: true }

    },
    {
        path: '/repairs/',
        name: 'repairs',
        component: Repairs,
    },
    {
        path: '/repair/:id/',
        name: 'repair',
        component: Repair,
        props: true

    },
    {
        path: '/service/',
        name: 'service',
        component: Service,
    },
    {
        path: '/service_item/:id/',
        name: 'service_item',
        component: Service_item,
        props: true

    },
    {
        path: '/peopleProduct/',
        name: 'peopleProduct',
        component: peopleProduct,
        meta: { LoginRequired: true }

    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.LoginRequired)) {

        if (store.state.isAuthenticated) {
            next()
        } else {
            next("/login")
        }
    } else if (to.matched.some(record => record.meta.LoginRedirect)) {
        if (!store.state.isAuthenticated) {
            next("/login")

        } else {
            next()
        }
    } else {
        next()
    }
})

export default router