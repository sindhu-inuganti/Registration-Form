
    var app = new Vue({
        el : ".app",
        props:{message: String},
        data : 
        {
        headingvar:"Welcome",
        image:'images/pig.jpg',
        radioFunc: function()
        {
    
        return document.getElementsByName("piginfo")[0].checked
            
        }
        }
    
    })
    
