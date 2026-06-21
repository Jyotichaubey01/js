
const user = {
    username: "jyoti",
    loginCount: 8,
    signedIn: true

 getUserDetails: function(){
    console.log("got user details ")
 }

}

console.log(user.username);


///consturctoin functiomn

const promiseOne = new Promise()
const date = new Date()


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount

    return this
}

const userOne =new User("jyoti",12,true)
const usertwo=new User("fjkos",12,false)
console.log(userOne);

