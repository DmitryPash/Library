<template>
  <div class="wrapper">
    <headerVue></headerVue>
    <div class="container">
      <!-- <router-link :to="{name: 'accountbooks'}">account</router-link>
      <br>
      <router-link :to="{name: 'login'}">login</router-link>
      <br> -->

      
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import headerVue from "./components/header.vue";
export default {
  name: "App",
  components: {
    headerVue,
  },
};
</script>





<style lang="scss">
  @import '../src/css/style.scss';
  @import '../src/css/grid.scss';
  @import '../src/css/UI.scss';
</style>