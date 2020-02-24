

// document.getElementById("isThis").innerHTML=document.getElementById("country").Value;
// var country=document.getElementById("country").Value;
// var States={"India":["Kerala","Telangana","Andhra Pradesh"],"Australia":["Queensland","Tasmania"]};
// states="";
// st=States[country];
// for(var i=0;i<st.length;i++)
// {
//     states=<option>+st[i]+</option>;

// }

_today = () => { return "hi"; }
console.log(_today());

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullname: function(){return this.lastName+this.firstName }


};
console.log(person.fullname());
