<template>
    <div class="wrapper">
        <h1>book - {{BOOKS[id].title}}</h1>
        <input type="text" v-model="BOOKS[id].title">
    </div>
</template>

<script> 
import {mapGetters } from "vuex";

export default {
    data() {
        return {
            id: this.$route.params.id - 1,
        }
    },
    computed: {
    ...mapGetters(["BOOKS"]),
  },
}
</script>