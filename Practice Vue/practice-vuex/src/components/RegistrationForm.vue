<template>
<div>
  <title>Employee Registration</title>

  <body>
    <div>
      <form>
        <h2>Register Employee</h2>
        <div class="field">
          <label>First name:</label>
        </div>
        <div class="fieldvalue">
          <input type="text" name="fname" required v-model="empObj.fname" />
        </div>
        <div class="field">
          <label>Last name:</label>
          <br />
        </div>
        <div class="fieldvalue">
          <input
            type="text"
            class="lname"
            name="lname"
            required
            v-model="empObj.lname"
          />
          <br />
        </div>
        <div class="field">
          <label>Email:</label>
          <br />
        </div>
        <div class="fieldvalue">
          <input
            type="text"
            class="email"
            name="email"
            required
            v-model="empObj.email"
          />
          <br />
        </div>
        <div class="field">
          <label>Password:</label>
          <br />
        </div>
        <div class="fieldvalue">
          <input type="password" class="password" name="password" required />
          <br />
        </div>
        <div class="field">
          <label>Gender:</label>
          <br />
        </div>
        <div class="fieldvalue">
          <input
            type="radio"
            id="male"
            value="male"
            name="gender"
            v-model="empObj.gender"
          />
          <label for="male">Male</label>

          <input
            type="radio"
            id="female"
            value="female"
            name="gender"
            v-model="empObj.gender"
          />
          <label for="female">Female</label>
          <br />
        </div>

        <div class="field">
          <label for="dob">Date of Birth:</label>
          <br />
        </div>
        <div class="fieldvalue">
          <input type="date" name="dob" required v-model="empObj.dob" />
        </div>
        <div class="field">
          <label name="hobbies">Hobbies:</label>
          <br />
        </div>
        <div class="fieldvalue">
          <input
            type="checkbox"
            name="hobbies"
            value="music"
            id="music"
            v-model="empObj.hobbies"
          />
          <label for="music">Listening to music</label>
          <br />
          <input
            type="checkbox"
            name="hobbies"
            value="painting"
            id="painting"
            v-model="empObj.hobbies"
          />
          <label for="painting">Painting</label>
          <br />
          <input
            type="checkbox"
            name="hobbies"
            value="dancing"
            id="dancing"
            v-model="empObj.hobbies"
          />
          <label for="dancing">Dancing</label>
          <br />
          <input
            type="checkbox"
            name="hobbies"
            value="reading"
            id="reading"
            v-model="empObj.hobbies"
          />
          <label for="reading">Reading books</label>
          <br />
          <input
            type="checkbox"
            name="hobbies"
            value="writing"
            id="writing"
            v-model="empObj.hobbies"
          />
          <label for="writing">Writing stories</label>
          <br />
        </div>
        <div class="field">
          <label name="country">Country:</label>
        </div>
        <div class="fieldvalue">
          <select
            id="country"
            @change="selectStateLocal()"
            name="country"
            v-model="empObj.vcountry"
          >
            <option value="selectcountry">select country</option>
            <option
              v-for="coun in empObj.country_states"
              :key="coun.country"
            >{{coun.country}}</option>
          </select>
        </div>
        <div class="field">
          <label name="state">State:</label>
        </div>
        <div class="fieldvalue">
          <select id="state" name="state" v-model="empObj.state">
            <option value="selectstate">select state</option>
            <option v-for="st in empObj.states" :key="st.states">{{st}}</option>
          </select>
        </div>
        <div class="field">
          <label name="address">Address:</label>
        </div>
        <div class="fieldvalue">
          <textarea name="address" v-model="empObj.address"></textarea>
        </div>

        <div class="field" align="right">
          <button id="reset" @click="resetFormLocal()">Reset</button>
          <button type="submit" id="submit">Submit</button>
        </div>
      </form>
    </div>
  </body>
</div>
</template>


<script>
export default {
  name: "RegistrationForm",
  computed: {
    empObj () {
      return this.$store.state.empObj
    },
    empList () {
      return this.$store.state.empList
    }
  },

  methods: {
    resetFormLocal() {
      this.$store.dispatch("resetForm");
    },
    selectStateLocal() {
      this.$store.dispatch("selectState");
    }
  }
};
</script>

<style scoped>
.field {
  margin-top: 5px;
}
.fieldvalue {
  margin-top: 3px;
}
#reset {
  background-color: #808080;
}
#submit {
  background-color: #0000ff;
}
table,
th,
td {
  border: 0.5px solid black;
}
</style>