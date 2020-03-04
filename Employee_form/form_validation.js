// employee=[{
//     "First Name": "Krishna",
//     "Last Name": "Kollu",
//     "Email": "krishnakolu@gmail.com",
//     "Password": "kkollu",
//     "Gender": "male",
//     "Hobbies": ["reading","music"],    
//     "Country": "Australia",
//     "State": "Sikkim"    
//     }]
const selectstate =()=> {

    var country = document.getElementById("country").value;
    country_state = { "selectcountry": ["selectstate"], "India": ["Andhra Pradesh", "Telangana", "Tamil Nadu", "Karnataka"], "Australia": ["New South Wales (NSW)", "Queensland (Qld)", "South Australia (SA)", "Tasmania (Tas)", "Victoria (Vic)", "Western Australia (WA)"],"New Zealand":['Northland','Auckland','Waikato','Bay of Plenty','Gisborne','Hawke Bay','Taranaki','Manawatu-Whanganui'], 'America':['California','Florida','Texas','New Jersey'] }
    state = "";
    states = country_state[country]
    for (i = 0; i < states.length; i++) {
        state += "<option>" + states[i] + "</option>";
    }
    document.getElementById("state").innerHTML = state;

}

dat=[]
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        dat = JSON.parse(this.responseText)
        intoTable();
    }
  }
  xhttp.open("GET", "DataFile.json", true);
  xhttp.send();
  //console.log(dat)

}
function intoTable()
{
    var s='<tr>'
    for(let field in dat[0]){
        s+='<th>'+field+'</th>'
    }
    s+='</tr>'

        for (var i=0;i < dat.length;i++)
        {
         s+="<tr>";
         for( var field in dat[i])
         {
             s+="<td>"+dat[i][field]+"</td>";
         } 
        s+="</tr>"                      
        document.getElementById("myTable").innerHTML = s;
        }
       // console.log(dat)


}
function addEmployee()
{
var varGender = radioFunc();
var varHobbies = checkFunc();
console.log("in js");
    var new_emp={
    "First Name": document.getElementsByName("fname")[0].value,
    "Last Name": document.getElementsByName("lname")[0].value,
    "Email": document.getElementsByName("email")[0].value,
    "Password": document.getElementsByName("password")[0].value,
    "Gender": varGender,
    "Hobbies": varHobbies,    
    "Country": document.getElementsByName("country")[0].value,
    "State": document.getElementsByName("state")[0].value,
    "Address": document.getElementsByName("address")[0].value
    }
    console.log(new_emp);
    dat.push(new_emp);
    console.log(dat)

    intoTable();
}

function radioFunc()
{
    {
        for (let i = 0; i < document.getElementsByName("gender").length; i++) 
        {
            if (document.getElementsByName("gender")[i].checked)
            {
                return document.getElementsByName("gender")[i].value;
            }
        }
    }
}

function checkFunc()
{
    {
        hobbiesList=[];
        for (let i = 0; i < document.getElementsByName("hobbies").length; i++) 
        {
            if (document.getElementsByName("hobbies")[i].checked)
            {
                hobbiesList.push(document.getElementsByName("hobbies")[i].value);
            }
        }
        return hobbiesList;
    }
}

    