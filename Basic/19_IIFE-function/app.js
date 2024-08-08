// Immediately Invoked Function Expressions IIFE

// global scope kay polution say problem hoti kai bar uskay variable declaration say bachnay kay liye 
// use hota ha "IIFE" foran execution kay liyaa


// ()() This is called "IIFE"


// Named IIFE 

(function DataBase  (){
    console.log(`DataBAse connected`);
    
})() ;   // ; semi colon is imporatant because code running end 


// Arrow Function 
// simple IIFE 
( () =>{
    console.log(`Again DB Connected `);
    
})();

// With pass parameters
( (name ) =>{
    console.log(`Hello ${name}`);
    
})("Zohaib Ali")



// const value = "zohaib "

// console.log(value);
