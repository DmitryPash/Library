<template>
    <div class="book-wrap">
    <div class="books-title">Book info</div>

        <div class="book-modify flex space-between valign-center">
            <div class="book-title" v-if="title == false">Title - <span class="book-modify-name">{{BOOKS[id].title}}</span></div>
            <input type="text" :placeholder="BOOKS[id].title" v-model="BOOKS[id].title" class="ui-input book-modify-input" v-else>
            <div class="book-modify-icon" @click="title = !title"></div>
        </div>
        <div class="book-modify flex space-between valign-center">
            <div class="book-title" v-if="author == false">Author - <span class="book-modify-name">{{BOOKS[id].author}}</span></div>
            <input type="text" :placeholder="BOOKS[id].author" v-model="BOOKS[id].author" class="ui-input book-modify-input" v-else>
            <div class="book-modify-icon" @click="author = !author"></div>
        </div>
        <div class="book-modify flex space-between valign-center">
            <div class="book-title" v-if="ISBN == false">ISBN - <span class="book-modify-name">{{BOOKS[id].ISBN}}</span></div>
            <input type="text" :placeholder="BOOKS[id].ISBN" v-model="BOOKS[id].ISBN" class="ui-input book-modify-input" v-else>
            <div class="book-modify-icon" @click="ISBN = !ISBN"></div>
        </div>
        <div class="book-modify flex space-between">
            <div class="book-title">Date - <span class="book-modify-name">{{BOOKS[id].date}}</span></div>
        </div>
        <div class="book-modify flex space-between valign-center">
            <div class="book-title" v-if="storyline == false">Storyline - <span class="book-modify-name">{{BOOKS[id].storyline}}</span></div>
            <textarea type="text" :placeholder="BOOKS[id].storyline" v-model="BOOKS[id].storyline" class="ui-input book-modify-textarea" v-else></textarea>
            <div class="book-modify-icon" @click="storyline = !storyline"></div>
        </div>
       

        <router-link to="/accountbooks" class="ui-btn book-modify-btn">Save</router-link>

    </div>
</template>

<script> 
import {mapGetters } from "vuex";

export default {
    data() {
        return {
            id: this.$route.params.id - 1,
            title: false,
            author: false,
            ISBN:false,
            date: false,
            storyline: false,

        }
    },
    methods: {
        
    },
    computed: {
        
    ...mapGetters(["BOOKS"]),
  },
}
</script>

<style lang="scss">
    .book-modify {
        gap: 20px;
        margin-bottom: 25px;
        &-icon {
            background-image: url(../images/svg/pen.svg);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            width: 20px;
            height: 20px;
            cursor: pointer;
        }
        &-input {
            max-width: 200px;
            font-size: 20px;
        }
        &-textarea {
            width: 100%;
            height: 200px;
        }
        &-name {
            color: #3d3d3d;
            font-size: 22px;
            font-weight: 700;
        }
        &-btn {
            display: block;
            max-width: 240px;
            margin: 0 auto;
        }
    }
</style>