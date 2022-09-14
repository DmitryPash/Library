<template>
  <div class="container">
    <AccountBooksVue></AccountBooksVue>
    <!-- <router-link to="/login">Go to About</router-link>
    <router-view></router-view> -->

  </div>
</template>

<script>
import AccountBooksVue from "./components/AccountBooks.vue";
export default {
  name: "App",
  components: {
    AccountBooksVue,
  },
};
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }
</style>
