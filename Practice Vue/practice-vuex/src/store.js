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

        addEmployee(state) {
            let obj = { ...state.empObj };

            state.empList.push(obj);
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

        addEmployee(context) {
            context.commit('addEmployee')
        },
        resetForm(context) {
            context.commit('resetForm')
        },
        selectState(context) {
            context.commit('selectState')
        }
    }
    
});
