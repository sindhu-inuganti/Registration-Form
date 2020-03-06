import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import EmployeeRegistration from "./components/EmployeeRegistration.vue";
import EmployeeDetails from "./components/EmployeeDetails.vue";
import store from "./store.js"


Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: '/EmployeeRegistration', component: EmployeeRegistration, name: 'EmployeeRegistration', props: true },

  { path: '/EmployeeDetails', component: EmployeeDetails, name: 'EmployeeDetails', props: true },

  { path: '/', component: EmployeeDetails },


];

const router = new VueRouter({
  routes
})
new Vue({
  router, store,
  render: h => h(App),
}).$mount('#app');

//import data from "./assets/MasterData.json";

