
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// https://tc39.es/proposal-temporal/docs/index.html

// ============================ Date =================

let myDate = new Date ()
// console.log(" myDate:", myDate.toString())
// console.log(" myDate:", myDate.toDateString())
// console.log(" myDate:", myDate.toLocaleDateString()) // ya sirf date print kardey ga  
// console.log(" myDate:", myDate.toLocaleString()) // ya time bhi bataay ga 
// console.log(" myDate:", myDate.toUTCString())    

// let myNewDate = new Date (2023 , 8 ,27)
let myNewDate = new Date (2002 , 8 ,27 ,8,36) // ismay extra date bhi likhengay woh ya local string kay zariya show hojayega 

// console.log( myNewDate.toDateString())
// console.log( myNewDate.toLocaleString())



let myTime = Date.now()
// console.log( Math.floor (Date.now()/1000))


// console.log( myTime)

// console.log( myNewDate.getTime())

let newDate = new Date ()
// console.log( newDate)
console.log( newDate.getDate())
