import { createRouter, createWebHashHistory } from "vue-router";
import Login from './components/Login.vue';
import AccountBooks from './components/AccountBooks.vue';


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/login', component: Login },
        { path: '/accountbooks', component: AccountBooks },
      ]
})

