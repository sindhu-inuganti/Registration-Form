<template>
  <div>
    <h2>Register Here</h2>
    <div id="app">
      <div class="column">
        <RegistrationForm></RegistrationForm>
      </div>

      <div class="column">
        <PreviewForm></PreviewForm>
      </div>
    </div>
    <button @click="addEmployeeLocal()">Add Employee</button>


  </div>
</template>

<script>
import RegistrationForm from "./RegistrationForm.vue";
import PreviewForm from "./PreviewForm.vue";

export default {
  name: "EmployeeRegistration",
  components: { RegistrationForm, PreviewForm},
    
  methods: {
    addEmployeeLocal() {
      this.$store.dispatch("addEmployee",this.$store.state.empObj);
    }
  }
};
</script>

<style>
.column {
  border-style: groove;
  flex: 50%;
}

#app {
  display: flex;
}
</style>
