<template>
    <div id="login-cover">
        <user-form>
            <span v-if="errors.ALREADY" class="error" slot="error">Email already in use by another account. You can use <router-link :to="{name: 'Login'}">log in</router-link> or use <router-link :to="{name:'Forgot'}">the forgot password page</router-link> to reset your password.</span>
            <span v-if="errors.NOLONG" class="error" slot="error">Password must be at least 8 characters.</span>
            <h1 slot="header">Create a Trello Account</h1>
            <router-link :to="{name : 'Login'}" slot="header-link"> sign in to your account</router-link>
            <div slot="body">
                <form @submit.prevent="onSubmit">
                    <div class="form-group">
                        <div class="label">Name</div>
                        <input v-model="username" type="text" class="input" :class="{'warning': errors.ALREADY}" placeholder="e.g., Hikaru Sulu">
                    </div>
                    <div class="form-group">
                        <div class="label">Email</div>
                        <input v-model="email" type="text" class="input" :class="{'warning': errors.ALREADY}" placeholder="e.g., sulu@starfleet.fed">
                    </div>
                    <div class="form-group">
                        <div class="label">Password</div>
                        <input v-model="password" type="password" class="input" :class="{'warning': errors.ALREADY || errors.NOLONG}" placeholder="e.g., **********">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="button" :class="{'button-primary' : !invalidForm}" :disable="invalidForm">Create New Account</button>
                    </div>
                </form>
            </div>
            <div slot="footer">
                <p class="small">
                    By creating an account, you agree to our <a href="#">Terms of Service</a><br>and <a hred="#">Privacy Policy.</a>
                </p>
            </div>
        </user-form>
        <main-footer></main-footer>
    </div>
</template>

<script>
    import UserForm from '@/components/UserForm.vue'
    import MainFooter from '@/components/Footer.vue'
    import {mapActions } from 'vuex';
    
    export default {
        components: {
            UserForm,
            MainFooter,
        },
        data() {
            return {
                errors: {
                    NOLONG: false,
                    ALREADY: false
                },
                username: "",
                email: "",
                password: ""
            }
        },
        computed: {
            invalidForm() {
                return !this.username || !this.email || !this.password
            }
        },
        methods: {
            ...mapActions([
                'SIGNUP',
                'LOGIN'
            ]),
            errorsToTrue () {
                let that = this
                Object.keys(that.errors).map(function(error) {
                    that.errors[error] = false
                })
            },
            onSubmit() {
                const {username, email, password} = this
                this.errorsToTrue()
                if(password.length < 8) {
                    this.errors.NOLONG = true
                    return
                } else {
                    this.SIGNUP({username, email, password}).then(() => {
                        this.LOGIN({email, password})
                    }).then(() => {
                        this.$router.push('/')
                    }).catch(err => {
                        this.errors.ALREADY = true
                        return;
                    })
                }
            }
        },
    }
</script>

