<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  @import url('https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css');
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 14px;
    font-family: 'NanumSquareRound', sans-serif;
    line-height: 1.5;
  }
  
  a {
    text-decoration: none;
  }
  
  ul,
  ol {
    list-style: none;
    padding: 0;
  }
</style>
