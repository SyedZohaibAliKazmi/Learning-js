
// ======================\============== This Function  =============================\


// chrome kay andar jo Engine ha woh "Window " Engine ha 


const user ={
    username:"zohaib",
    price :5000,
    welcomemessage: function () {
        console.log(`${this.username}, welcome to our website `);
        console.log(this);
        
        
        
    }
}
// user.welcomemessage()

//user name changed kay liye 

// user.username ="Ali"
// user.welcomemessage()

// Agar khali "this" ko log karo gay to {} ya ayega terminal may node kay  chrome may alag aayega 
// console.log(this); 


//******  chrome kqay andar ya {} show nahi hoga balkay "Window" show hoga q kay 
// /chrome kay andar jo Engine ha woh "Window " Engine ha 
// browser kay andar jo object ha global woh "window "object  ha 

// ==============================\=======================\\====================
// Method 1

// function best () {
//     let username = "Zohaib Ali"
//     console.log(this.username);
    
    
// }
// best()

// Method 2

// const best = function(){
    //         let username = "Zohaib Ali"
    //         console.log(this.username);
    // }
    // best()
    
    // ======================\============== Arrow Function  =============================\
// Method 1
// const best = () =>{
//         let username = "Zohaib Ali"
//         console.log(this);
// }
// best()


// This is not use in Arrow function 

// Method 2
// Explicit function 

const addvalue =( num1, num2) => {
    return num1 + num2

}
// console.log(addvalue(7,7))


// Method 3
// implicit function 

const addsecond = ( num1, num2) =>  num1 + num2

// console.log(addsecond(10,10))
// ====================================================\=============================================

// const addsecond = ( num1, num2) => ( num1 + num2) "round bracket" use kar saktay han bina "return" key word kay 

// const addsec = ( num1, num2) => { return num1 + num2} "curly {}" bracket use karengay return keywords kay sath 

// ====================================================\=============================================

// ek implicit functio may object kasay likhengay 

// **-*-*-*-jab bhi imlicit function pass karengay to unko "round bracket" kay andar 
// pass karengay takay agar hum kabhi "object" pass karen to woh easy pass hojaye.

const first = ( num1, num2) =>  ({naam:"zohaib"})


console.log(first(10,10))



// "Arrow function" may aap "This" use nahi karsaktay han or
// "Regular Function" may aap use karsaktay han woh global hotay han . 