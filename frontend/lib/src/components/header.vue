<template>
  <div class="header">
    <div class="container">
        <div class="header-wrapper">
            <div class="header-logo">
                Library Books
            </div>
            <div class="header-login">
              <!-- <span>{{this.USER.email}}</span> -->
              <router-link to="/accountbooks" class="header-login-link">{{this.USER.email}}</router-link>
                <router-link to="/login" class="header-login-link" v-if="this.USER.length < 1">Log in</router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
        'USER'
    ])
},
};
</script>

<style lang="scss">
.header {
  background-color: #333;
  padding: 20px 0px;
  margin-bottom: 50px;  
  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-logo {
    color: #ddd;
    font-size: 24px;
    cursor: pointer;

  }
  &-login {
    &-link {
        color: #ddd;
        text-decoration: none;
    }
  }
}
</style>
