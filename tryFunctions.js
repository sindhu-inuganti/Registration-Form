//function myFunc(a,b)
//function myFunc()
var funcVar = function myFunc(a,b)
{
    //var a=10, b=20;
    return (this.x+this.y+a+b)
    
}

//console.log(myFunc())

// console.log(myFunc(7))
// console.log(myFunc(4,5))
// console.log(myFunc(4,5,6))

var data= {x:15,y:15}
var arr=[3,3]
console.log(funcVar.call(data,5,6));//call

console.log(funcVar.apply(data,arr))//apply
console.log(funcVar.apply(data,[4,5]))//apply










