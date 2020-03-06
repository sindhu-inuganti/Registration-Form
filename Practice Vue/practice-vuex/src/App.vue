<template>
  <div>
    <div class="topnav">
      <router-link :to="{ name: 'EmployeeDetails'}">Home</router-link>
      <router-link :to="{ name: 'EmployeeRegistration'}">Register</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
// import store from "./store.js"
export default {
  name: "App",
  mounted(){
    this.$store.dispatch('getData');
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

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #4caf50;
  color: white;
}
</style>
