import { createRouter, createWebHashHistory } from "vue-router";
import Login from './components/Login.vue';
import AccountBooks from './components/AccountBooks.vue';
import BookItem from './components/BookItem.vue';




export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { 
          path: '/login', 
          component: Login, 
          name: 'login' 
        },
        { 
          path: '/accountbooks', 
          component: AccountBooks, 
          name: 'accountbooks' 
        },
        { 
          path: '/accountbooks/:id', 
          component: BookItem, 
          name: 'bookitem',
        },
       
        
      ]
})

