
//singleton
// Oject.create

//object literals

const mySym =Symbol("key1")


const JsUser = {
    name: "Jyoti",
    "full name":"jyoti chaubey",
    age:18,
    [mySym]: "mykey",//jab symbal ko use karna hai hai tu

    location:"mau",
    email:"9jrfqokjo",
    isLoggedIn:false,
    lastLoginDays:["mondays", "Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "jyofok@gmail.cpm";

Object.freeze(JsUser)
JsUser.email = "jyofok@gmail.cpm";
console.log(JsUser);

JsUser.greeting = function(){
    console.log("helllo JS user");
}
console.log(JsUser.greeting);

