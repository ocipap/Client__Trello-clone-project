<template>
  <div class="reset">
    <sub-header></sub-header>
    <div class="reset-content">
      <div class="container">
        <div v-if="invalid">
          <h1>Reset Your Trello Password</h1>
          <p>It looks like this password reset link can't be used anymore. This probably means that you sent us another password reset request; in that case you'll need to use the newer reset link.</p>
        </div>
        <div v-else-if="reset">
          <h1>Reset Your Trello Password</h1>
          <div v-if="done" class="info">
            Your password has been successfully changed. <router-link :to="{name: 'Login'}">Click here to return to the login page</router-link>.
          </div>
          <div v-else>
            <div v-if="errors.NOLONG" class="error">Password must be at least 8 characters.</div>
            <div v-if="errors.NOMATCH" class="error">Passwords do not match.</div>
            <form @submit.prevent="onSubmit">
              <div class="form-group">
                <div class="label">New password:</div>
                <input v-model="passwd" type="password" class="input">
              </div>
              <div class="form-group">
                <div class="label">New password (again):</div>
                <input v-model="again_passwd" type="password" class="input">
              </div>
              <div class="form-group">
                <button type="submit" class="button button-primary">Submit</button>
              </div>
            </form>
          </div>
          
        </div>
        <div v-else>
          <h1>Cancel Your Trello Password Reset</h1>
          <p>Sounds like you don't need to reset your password anymore!</p>
          <button @click="deleteReset" class="button button-primary">Cancel Password Reset</button>
          <p class="light">After clicking this button, the password reset link we sent you won't work anymore. If you need to reset your password later, you can get a new reset link
            <router-link :to="{name: 'Forgot'}">here.</router-link>
          </p>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import MainFooter from '@/components/Footer'
  import SubHeader from '@/components/SubHeader'
  import { mapActions } from 'vuex';
  export default {
    components: {
      MainFooter,
      SubHeader
    },
    data() {
      return {
        errors: {
          NOLONG: false,
          NOMATCH: false
        },
        invalid: true,
        passwd: '',
        again_passwd: '',
        done: false
      }
    },
    created() {
      const { uid, resetCode } = this.$route.query
      if (!uid || !resetCode){
        this.invalid = true
      } else {
        this.VERIFY_RESET_CODE({ uid, resetCode }).then(() => {
          this.invalid = false
        }).catch(err => {
          this.invalid = true
        })
      }
    },
    computed: {
      reset() {
        const { reset } = this.$route.query
        if(reset =='true') {
          return true
        }else {
          return false
        }
      }
    },
    methods: {
      ...mapActions([
        'VERIFY_RESET_CODE',
        'DELETE_RESET_CODE',
        'RESET_PASSWORD'
      ]),
      errorsToTrue () {
        let that = this
        Object.keys(that.errors).map(function(error) {
            that.errors[error] = false
        })
      },
      onSubmit (){
        const { uid, resetCode } = this.$route.query
        const {passwd, again_passwd} = this
        this.errorsToTrue()
        if (passwd.length < 8){
          this.errors.NOLONG = true
        } else if(passwd != again_passwd) {
          this.error.NOMATCH = true
        } else {
          this.RESET_PASSWORD({ 'password' : passwd, uid, resetCode }).then(() => {
            this.done = true
          })
        }
      },
      deleteReset() {
        const { uid, resetCode } = this.$route.query
        this.DELETE_RESET_CODE({ uid, resetCode }).then(() => {
          this.$router.push('/')
        })
      }
    },
  }
</script>

<style scoped>
  .reset-content {
    padding: 4rem 1rem;
  }
  
  .reset-content .container {
    max-width: 585px;
    width: 100%;
    margin: 0 auto;
  }
  
  .reset-content h1 {
    font-size: 1.8rem;
  }
  
  .reset-content p {
    color: #4d4d4d;
  }
  
  .reset-content p.light {
    color: hsl(0, 0%, 60%);
  }
  
  .reset-content p.light a {
    color: hsl(0, 0%, 60%);
    text-decoration: underline;
  }
  
  .reset-content .error {
    border-radius: 4px;
    background: #F5D3CE;
    border: 1px solid #EB5A46;
    display: inline-block;
    padding: 0.5rem 1rem;
    color: #4d4d4d;
    margin: 1rem 0;
  }

  .reset-content .info {
    border-radius: 4px;
    background: #FAF3C0;
    border: 1px solid #F2D600;
    display: inline-block;
    padding: 0.5rem 1rem;
    color: #4d4d4d;
    margin: 1rem 0;
  }

  .reset-content .info a{
    color: hsl(202,40%,55%);
    text-decoration: underline;
  }

  .reset-content .info a:hover {
    color: hsl(202,50%,30%);
  }
  
  .reset-content .form-group {
    margin-bottom: 1.2rem;
  }
  
  .reset-content .form-group .label {
    margin-bottom: 5px;
  }
  
  .reset-content .form-group .input[type=text],
  .reset-content .form-group .input[type=password] {
    max-width: 400px;
    background: #EDEFF0;
    border-radius: 4px;
    border: 1px solid #cdd2d4;
    box-sizing: border-box;
    padding: 0.5rem;
    width: 100%;
    font-size: 1rem;
  }
  
  .reset-content .form-group .input[type=text]:focus,
  .reset-content .form-group .input[type=password]:focus {
    border-color: #A5ACB0;
    outline: none;
    box-shadow: 0 0 6px #CDD2D4;
  }
  
  .reset-content .form-group .input[type=text].warning,
  .reset-content .form-group .input[type=password].warning {
    background: #FBEDEB;
    border: 1px solid #EC9488;
  }
  
  .reset-content .form-group .input[type=text].warning:focus,
  .reset-content .form-group .input[type=password].warning:focus {
    box-shadow: 0 0 6px #EC9488;
  }
  
  .reset-content .button.button-primary {
    background: linear-gradient(to bottom, #61BD4F 0%, #5AAC44 100%);
    color: #fff;
    box-shadow: 0 2px 0 #3F6F21;
    cursor: pointer;
  }
  
  .reset-content .button.button-primary:hover {
    background: #5AAC44;
  }
  
  .reset-content .button {
    display: inline-block;
    border-radius: 3px;
    background: #e2e4e6;
    box-shadow: none;
    color: hsl(0, 0%, 55%);
    cursor: default;
    font-weight: bolder;
    padding: 0.6rem 1.3rem;
    border: none;
    font-size: 1rem;
  }
</style>
