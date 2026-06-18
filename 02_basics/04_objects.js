
const tinderUser = new Object()//singilet object


 tinderUser.id = "24jok"
 tinderUser.name = "sam"
 tinderUser.isLoggedIn = false
//
// console.log(tinderUser);
const regularUser = {
    email:"fhio9ajf",
    fullname:{
        userFulname:{
            firstname: "jyoti",
            lastname: "chaubey"
        }
    }

}
//
// console.log(regularUser.fullname?.userFulname.firstname);//wreti when api call

const obj1= {1:"a",2:"b"}
const obj2={3:"d",4:"h"}
const obj3 = Object.assign({} , obj1, obj2)
console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log( Object.keys(tinderUser));
///saare object ki keys doo



const course = {
    coursename: "js in hindi",
    price:"555",
    courseInstructor : "jyoti",
}

// course.course.Instructor

/*const {courseInstructor} = course

console.log(courseInstructor);

{
    name = "jyoti",
    coursename: "js in hindi"
    price: "free"
}

*/

