

// function name (){
//     console.log("Z");
//     console.log("O");
//     console.log("H");
//     console.log("A");
//     console.log("I");
//     console.log("B");
    
// }
// console.log("🚀 ~ name ~ name:", name)

// name ()


// ======================================================================

// =================================="(number1,number2)" is ko  parameters khetay han


// function addNumber(number1,number2){
//     console.log(number1+number2);
    
// }

// //==================================== "addNumber(5,5 )"is ko arguments  khetay han




// // addNumber()
// addNumber(5,5 )
// addNumber(5,5 )



// ==========================\=====================\======================\===============


// function addNumber(number1,number2){

// //    let result = number1+number2   1 Method
// //    return result

// return number1+number2  //2 Method
// }

// const result =addNumber(50,50)
// console.log("result:", result)

// ==================\=====================\1 method\============================\


// function UserMessage(username){
//     if (username === undefined) {
//         console.log("please enter your name ");
//         return
        
        
//     }
//     return `${username} you are login`
// }

// console.log(UserMessage("Zohaib"))

// ==================\=====================\2 method\============================\

// (!) This type of code is generally use in React,React Native may 

function UserMessage(username = "user"){
    if (!username) {                           //** */
        console.log("please enter your name ");
        return
    }
    return `${username} you are login`
}

console.log(UserMessage())