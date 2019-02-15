<template>
  <div class="sub-header">
    <div class="gohome">
      <router-link :to="{name : 'Home'}" class="header-btn">Home</router-link>
    </div>
    <div class="option">
      <router-link :to="{name : 'Login'}" class="header-btn">Log In</router-link>
      <router-link :to="{name : 'Signup'}" class="header-btn">Sign Up</router-link>
    </div>
  </div>
</template>

<script>
  export default {
  
  }
</script>

<style scoped>
  .sub-header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0.75rem;
  }
  
  .header-btn {
    font-size: 0.8rem;
    border: 1px solid hsla(0, 0%, 0%, 0.45);
    border-radius: .3rem;
    color: hsla(0, 0%, 0%, 0.45);
    padding: .6rem 1rem;
    text-decoration: none;
  }
  
  .header-btn:hover {
    border-color: hsl(0, 0%, 30%);
    color: hsl(0, 0%, 30%);
  }
  
  .sub-header .option .header-btn:first-child {
    margin-right: 7px;
  }
</style>
