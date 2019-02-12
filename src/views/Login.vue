<template>
    <div id="login-cover">
        <user-form>
            <span v-if="errors.NOAUTH" class="error" slot="error">There isn't an account for this email</span>
            <div v-if="errors.CHECKPASS" class="error" slot="error">Invalid password</div>
            <div v-if="errors.CHECKID" class="error" slot="error">Missing email</div>
            <h1 slot="header">Log in to Trello</h1>
            <router-link :to="{name : 'Signup'}" slot="header-link">create an account</router-link>
            <div slot="body">
                <form @submit.prevent="onSubmit">
                    <div class="form-group">
                        <div class="label">Email</div>
                        <input v-model="email" type="text" class="input" :class="{'warning' : this.errors.CHECKID || this.errors.NOAUTH}" placeholder="e.g., ender@battle.edu">
                    </div>
                    <div class="form-group">
                        <div class="label">Password</div>
                        <input v-model="password" type="password" class="input" :class="{'warning' : this.errors.CHECKPASS}" placeholder="e.g., **********">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="button button-primary">Log In</button>
                    </div>
                </form>
            </div>
            <div slot="footer">
                <p>
                    <router-link :to="{name: 'Forgot'}">Forget your password?</router-link>
                </p>
            </div>
        </user-form>
        <main-footer></main-footer>
    </div>
</template>

<script>
    import UserForm from '@/components/UserForm.vue'
    import MainFooter from '@/components/Footer.vue'
    import {
        mapActions
    } from 'vuex'
    
    export default {
        components: {
            UserForm,
            MainFooter,
        },
        data() {
            return {
                errors: {
                    NOAUTH: false,
                    CHECKID: false,
                    CHECKPASS: false
                },
                email: '',
                password: '',
                returnPath: ''
            }
        },
        created() {
            this.returnPath = this.$route.query.returnUrl || '/'
        },
        methods: {
            ...mapActions([
                'LOGIN'
            ]),
            errorsToTrue() {
                let that = this
                Object.keys(that.errors).map(function(error) {
                    that.errors[error] = false
                })
            },
            onSubmit() {
                const { email, password } = this
                if (email == "") {
                    this.errorsToTrue()
                    this.errors.CHECKID = true
                    return
                } else if (password == "") {
                    this.errorsToTrue()
                    this.errors.CHECKPASS = true
                    return
                } else {
                    this.errorsToTrue()
                    this.LOGIN({ email, password }).then(() => {
                        this.$router.push(this.returnPath)
                    }).catch(err => {
                        this.errors.NOAUTH = true
                        return
                    })
                }
            }
        },
    }
</script>

