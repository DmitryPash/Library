<template>
  <div class="container">
    <div class="login">
      <div class="login-wrapper">
        <div class="login-title">login</div>
        <div class="login-form">
          <form action="">
            <div class="login-form-field">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="login.username" />
            </div>
            <div class="login-form-field">
              <label for="surname">Surname</label>
              <input type="text" id="surname" v-model="login.surname" />
            </div>
            <div class="login-form-field">
              <label for="email">Email</label>
              <input type="text" id="email" v-model="login.email" />
            </div>
          </form>
        </div>
        <router-link :to="{name: 'accountbooks', params:{date: this.login}}">
          <div class="login-btn" @click="sendDataLogin(login)">Continue</div>
        </router-link>
   

      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';


export default {
  name: "Login",
  data() {
    return {
      login: {
        username: null,
        surname: null,
        email: null,
      },
    };
  },
  methods: {
    sendDataLogin(login) {
      this.ADD_NEW_USER(login)
    },
    ...mapActions([
      'ADD_NEW_USER'
    ]),
  },
  computed: {
    ...mapGetters([
      "USER"
    ])
  }
};
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &-wrapper {
    width: 100%;
    max-width: 720px;
    padding: 50px 80px;
    border: 4px solid #f0932b;
  }
  &-title {
    text-align: center;
    text-transform: uppercase;
    font-size: 48px;
    margin-bottom: 50px;
  }
  &-form {
    margin-bottom: 50px;
    &-field {
      margin-bottom: 10px;
      label {
        display: block;
        margin-bottom: 5px;
        font-size: 20px;
      }
      input {
        width: 100%;
        border-radius: 10px;
        height: 40px;
        border: 2px solid #ffbe76;
        padding: 0px 20px;
        box-shadow: 1px 2px 7px #ffbe76;
        font-size: 16px;
      }
    }
  }
  &-btn {
    background: linear-gradient(180deg, #fdf3bf 0%, #fab66b 100%);
    border: 2px solid #f0932b;
    border-radius: 10px;
    text-align: center;
    color: #fff;
    height: 50px;
    max-width: 220px;
    line-height: 46px;
    font-size: 20px;
    cursor: pointer;
    margin: 0 auto;
  }
}
</style>
