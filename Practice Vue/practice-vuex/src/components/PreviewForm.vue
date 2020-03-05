
<template>
  <div>
    <h2>Preview</h2>
    <div class="field">First Name: {{empObj.fname}}</div>
    <div class="field">Last Name: {{empObj.lname}}</div>
    <div class="field">Full Name: {{fullName()}}</div>
    <div class="field">Email: {{empObj.email}}</div>
    <div class="field">Gender: {{empObj.gender}}</div>
    <div class="field">Date of Birth: {{empObj.dob}}</div>
    <div class="field">Hobbies:</div>
    <div>
      <ul>
        <li v-for="hobby in empObj.hobbies" :key="hobby.hobbies">{{hobby}}</li>
      </ul>
    </div>
    <div class="field">Country: {{empObj.vcountry}}</div>
    <div class="field">State: {{empObj.state}}</div>
    <div class="field">Address: {{empObj.address}}</div>
  </div>
</template>
<script>
export default {
  name: "PreviewForm",
  computed: {
    empObj () {
      return this.$store.state.empObj
    },
    empList () {
      return this.$store.state.empList
    }
  },
  methods: {
    fullName() {
            return this.empObj.fname + "  " + this.empObj.lname;
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