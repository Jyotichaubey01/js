/*
function sayMyName(){
 console.log("H");
  console.log("H");
   console.log("H");
    console.log("H");
}

//sayMyName()

function addTwoNUmbers(number1, number2){/parameter
   console.log(number1 + number2);
}

addTwoNUmbers(3,"4");///argument

const result = addTwoumber(3,5)
console.log("result:", result)  //undefined

*/

function calculateCartPrice(val1, val2,...num1){ /// 500, 2000
    return num1

}
console.log(calculateCartPrice(200, 400, 500,2000))


const user = {
    username: "jyoti",
    price:199
}

function handleObject(anyobject){
    console.log(`uSERNAME is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)

handleObject({
    username:"sam",
    price: 399
})

const myNewArray = [200,3000,400,600]
function returnsecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));


