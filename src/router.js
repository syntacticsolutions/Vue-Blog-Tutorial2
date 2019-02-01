import Vue from 'vue'
import VueRouter from 'vue-router'
import BlogPostCreator from './components/BlogPostCreator'
import BlogPostView from './components/BlogPostView'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/create_post', component: BlogPostCreator },
        { path: '/preview', component: BlogPostView }
    ]
})

export default router