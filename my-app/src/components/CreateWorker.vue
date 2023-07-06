<template>
    <div class="container">
        <div class="row">
            <div class="col-md-7 mrgnbtm">
                <h2>Create Your Account</h2>
                <form>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">First Name</label>
                            <input type="text" class="form-control" v-model="firstName" name="firstname" id="firstname"
                                aria-describedby="emailHelp" placeholder="First Name" required />
                        </div>
                        <div class="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Last Name</label>
                            <input type="text" class="form-control" v-model="lastName" name="lastname" id="lastname"
                                placeholder="Last Name" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="text" class="form-control" v-model="email" name="email" id="email"
                                aria-describedby="emailHelp" placeholder="Email" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Position</label>
                            <select type="text" class="form-control" v-model="position" name="position" id="position"
                                aria-describedby="emailHelp" required>
                                <option value="" disabled selected>Job Title</option>
                                <option value="cook">Cook</option>
                                <option value="server">Server</option>
                                <option value="dishwasher">Dishwasher</option>
                                <option value="host">Host/Hostess</option>
                                <option value="bartender">Bartender</option>
                                <option value="busser">Busser</option>
                            </select>
                        </div>
                    </div>
                    <button type="button" @click='createUser()' class="btn btn-danger">Create</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CreateWorker',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      position: ''
    }
  },
  methods: {
      createUser() {
          console.log(this.firstName)
          const payload = {
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              position: this.position
          }
          this.$emit('createUser', payload)
          this.clearForm();
      },
      clearForm() {
          this.firstName = "";
          this.lastName = "";
          this.email = "";
          this.position = "";
      }
  }
}
</script>