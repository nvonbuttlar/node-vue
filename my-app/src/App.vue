<!-- Template from https://medium.com/bb-tutorials-and-thoughts/how-to-develop-and-build-vue-js-app-with-nodejs-bd86feec1a20 -->

<template>
  <div id="app">
    <Header />
    <Register />
    <Dashboard v-if="settings == true" />
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'
import Register from './components/Register.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Dashboard,
    Register,
    Header
  },
  data() {
      return {
          settings: false
      }
  },
  mounted() {
    console.log("I am in mounted!!!")
    this.settings = true
  },
  setup () {
    console.log("I am in setup!!!")
  }
}
</script>

<style>
@import './assets/styles/global.css';
</style>