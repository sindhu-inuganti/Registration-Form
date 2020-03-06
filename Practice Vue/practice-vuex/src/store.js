import Vuex from 'vuex';
import Vue from 'vue';
import { countries } from "./components/Countries.js";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        empObj: {
            email: "",
            password: "",
            gender: "",
            address: "",
            dob: "",
            vcountry: "",
            state: "",
            fname: "",
            lname: "",
            headingvar: "Welcome",
            hobbies: [],
            country_states: countries,
            states: []
        },
        empList: []
    },
    mutations:
    {

        addEmployee(state, value) {
            state.empList.push({ ...value });
        },
        resetForm(state) {
            state.empObj.fname = "";
            state.empObj.lname = "";
            state.empObj.hobbies = [];
            state.empObj.email = "";
            state.empObj.gender = "";
            state.empObj.dob = "";
            state.empObj.password = "";
            state.empObj.vcountry = "";
            state.empObj.state = "";
            state.empObj.address = "";
        },
        selectState(state) {
            var country_selected = state.empObj.vcountry;
            for (var ind = 0; ind < state.empObj.country_states.length; ind++) {
                if (state.empObj.country_states[ind].country == country_selected)
                    state.empObj.states = state.empObj.country_states[ind].states;
            }
        }

    },
    actions:
    {

        addEmployee({ commit }, value) {
            commit('addEmployee', value)
        },
        resetForm(context) {
            context.commit('resetForm')
        },
        selectState(context) {
            context.commit('selectState')
        },
        getData(context) {
            axios
                .get('http://localhost:8080/data/MasterData.json')
                .then(response => (context.state.empList = response.data))
        }
    }

});

import axios from 'axios';


