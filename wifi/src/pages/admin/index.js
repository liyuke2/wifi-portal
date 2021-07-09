import { createApp } from 'vue'
import { createRouter , createWebHashHistory } from 'vue-router'
import App from './app.vue'
import routes from './routes.js'
import '@/css/main.css'

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.afterEach((to, from) => {
    if(history.state.back==from.fullPath){
      to.meta.transition = 'left'
    }else if(history.state.forward==from.fullPath){
      to.meta.transition = 'right'
    }
})

const app = createApp(App);
app.use(router);
app.mount('#app');
