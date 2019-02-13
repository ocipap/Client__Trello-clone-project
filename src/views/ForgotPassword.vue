<template>
  <div class="forgot">
    <div class="sub-header">
      <div class="gohome">
        <router-link :to="{name : 'Home'}" class="header-btn">Home</router-link>
      </div>
      <div class="option">
        <router-link :to="{name : 'Login'}" class="header-btn">Log In</router-link>
        <router-link :to="{name : 'Signup'}" class="heaer-btn">Sign Up</router-link>
      </div>
    </div>
    <div class="forgot-content">
      <div class="container">
        <h1>Reset Your Trello Password</h1>
        <p>Submit your email address and we’ll send you a link to reset your password.</p>
        <form @submit.prevent="onSubmit">
          <div v-if="error" class="error">There wasn't an account for that email</div>
          <div class="form-group">
            <div class="label">Email</div>
            <input v-model="email" type="text" class="input" :class="error">
          </div>
          <div class="form-group">

          </div>
        </form>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import MainFooter from '@/components/Footer'
  export default {
    components: {
      MainFooter
    }
  }
</script>

<style scoped>
</style>
