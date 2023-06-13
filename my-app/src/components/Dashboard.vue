<template>
  <div>
    <Header />
    <DisplayBoard :numberOfUsers="numberOfUsers" @getAllUsers="getAllUsers()" />
    <Users v-if="users.length > 0" :users="users" />
  </div>
</template>

<script>
import Header from './Header.vue'
import DisplayBoard from './DisplayBoard.vue'
import Users from './Users.vue'
import { getAllUsers, createUser } from '../services/UserService'

export default {
  name: 'Dashboard',
  components: {
    Header,
    DisplayBoard,
    Users
  },
  data() {
      return {
          users: [],
          numberOfUsers: 0
      }
  },
  methods: {
    getAllUsers() {
      getAllUsers().then(response => {
        console.log(response)
        this.users = response
        this.numberOfUsers = this.users.length
      })
    }
  },
  mounted () {
    this.getAllUsers();
  }
}
</script>