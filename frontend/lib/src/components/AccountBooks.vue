<template>
    <div class="container">
        <h1>Account - book PAGE</h1>
        <button @click="openLogIn">logIn</button>


        {{ username }}
        <!-- <router-link toSendData="onSendData" to="/login">Login</router-link>
        <router-view></router-view> -->
        <div class="reg" v-if="flag">
            <LoginVue></LoginVue>
        </div>
        
    </div>
</template>

<script>
    import LoginVue from './Login.vue'
    export default {

        name: 'AccaountBooks',
        components: {
            LoginVue,
        },
        data() {
            return {
                flag: false,
                user: {
                    name: 'dima',
                }
            }
        },
        methods: {
            openLogIn() {
                this.flag = true;
            },
            onSendData(data) {
                console.log('zxcsad')
                this.user = data
            }
        }
    }
</script>