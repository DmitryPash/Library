import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


let store = new Vuex.Store({
    state: {
        books: [],
        deleteBook: [],
        user: [],
    
    },
    mutations: {
        SET_NEW_USER:(state,user) => {  
            state.user = user
        },

        SET_BOOKS_TO_STATE:(state, books) => {
            state.books = books
        },
        SET_NEW_BOOKS:(state, books) => {
            state.books.push(books)
        },
        SET_DEL_BOOKS:(state,books) => {
            state.deleteBook.push(books)
            state.books = state.books.filter(e => e != books)
        },
        SET_INFO_BOOKS:(state,books) => {
            console.log(books)
        }
    },
    actions: {
    //    GET_BOOKS_FROM_API({commit}) {
    //     return axios("https://example-data.draftbit.com/books?_limit=10", {
    //         method: 'GET'
    //     })
    //     .then((books) => {
    //         commit('SET_BOOKS_TO_STATE', books.data);
    //         return books;
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //         return error
    //     })
    //    },

       ADD_NEW_USER({commit}, user) {
        commit('SET_NEW_USER', user) 
       },
       ADD_NEW_BOOKS({commit}, books) {
        commit('SET_NEW_BOOKS', books)
       },
       DELETE_BOOK({commit}, books) {
        commit('SET_DEL_BOOKS', books)
       },
       SHOW_INFO_BOOK({commit}, books) {
        commit('SET_INFO_BOOKS', books)
       },

    },
    getters: {
        BOOKS(state){
            return state.books;
        },
        USER(state) {
            return state.user;
        },
        DELBOOK(state) {
            return state.deleteBook;
        },
       
    },
})

export default store;