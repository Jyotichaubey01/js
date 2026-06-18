/*
//golbal scape 
var c=300
let a=300

//block scpoe
if(true) {
    let a=10
    const b=20
   console.log("innerr",a);
}
console.log(a)//300
*/
/*
function one() {
    const username ="jyoti"
    function two(){
        const website = "jytoti"
        console.log(username);
    }
  //  console.log(wesite);
    two()
}

if(true) {
    const username = "jyoti"
    if(username === "jyoti"){
        const website = " youtube"
        console.log(username+website);

    }

}
*/
///---------interserting-----------
console.log(addone(5))
function addone(num){
    return num+1
}

addTwo(5) ///error in code

const addTwo =function(num){
    return num  +2
}
addTwo(5) ///not error in code