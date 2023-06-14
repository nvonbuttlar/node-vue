<!-- Helpful Docs -->
<!-- https://medium.com/bb-tutorials-and-thoughts/how-to-develop-and-build-vue-js-app-with-nodejs-backend-typescript-version-2eeb0f10e87f -->
<!-- https://vueschool.io/articles/vuejs-tutorials/how-to-use-vue-router-a-complete-tutorial/ -->

<script setup>
  import Header from './components/Header.vue'
</script>

<template>
  <div class="v-app">
    <Header />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FFF;
}

#app {
  height: 100vh;
  text-align: center;
  background-color: #1A1A1A;
}

/* h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Open Sans';
} */

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #FFF;
}

a:visited {
  font-weight: bold;
  color: #FFF;
}

nav a.router-link-exact-active {
  color: #53b989;
}
</style>
