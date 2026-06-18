/*
const user = {
    username : "jyoti",
    price: 999,
    welcomeMessage: function(){
        console.log(`$(this.username),welcome too website`)
    }
}

user.welcomeMesssage()
*/
/*
const chai = function (){
    let username = "jyoti"
    console.log(this.username);
}
chai()*/


const chai = () =>{
    let username = "jyoti"
    console.log(this.username);
}
chai()

const addtwo = (num1, num2)=> (num1 +num2)

console.log(addTwo(3,4))


