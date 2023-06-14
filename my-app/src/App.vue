<!-- Helpful Docs -->
<!-- https://medium.com/bb-tutorials-and-thoughts/how-to-develop-and-build-vue-js-app-with-nodejs-backend-typescript-version-2eeb0f10e87f -->
<!-- https://vueschool.io/articles/vuejs-tutorials/how-to-use-vue-router-a-complete-tutorial/ -->

<script setup>
  // import "@fontsource/open-sans/500.css";
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link>
    </nav>
    <router-view />
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
  background-color: #2c3e50;
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
  color: #42b983;
}
</style>
