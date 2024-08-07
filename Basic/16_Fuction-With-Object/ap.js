

// =======================\======= Rest Operator=======\=============== 

        //  (... ) Rest operator  3 dot ko boltay han 
const pasay =[200,500,600,750]

function calculateCartPrics(...num1){
    return num1

}
// console.log(calculateCartPrics(pasay[2]));  //self logic 

// console.log(calculateCartPrics(200,500,600,750))


// ===================================== Object with function ========================

// object 
const user ={

    username:"zohaib ali",
    price :500

}
// function 

function handleObj(anyObj){

    return (`user Name is ${anyObj.username} and price is ${anyObj.price}`);
    
}
// console.log(handleObj(user))

// console.log(handleObj({
//     username:"mohib",
//     price:500
// }))

// ===================================== Array in function ========================


// Array 

const arr =[200,300,400,500]

function secondValue(getArray){
    return getArray[3]

}
// console.log(secondValue(arr));
// ============================================= Object With Function self =======================
const YourName={
    userName:"Zohaib ALi",
    Skill:"Web Developer & Graphic Designer",
    age:22
}

function YourData (getData){
    return `Hello my name is ${getData.userName} & I'm ${getData.age} year'old. I'm Professional ${getData.Skill}`
}

console.log(YourData(YourName))

// console.log(YourData({
//     Name:"Zohaib Ali Kazmi",
//     aage:22,
//     skillls:"Developer"
// }))