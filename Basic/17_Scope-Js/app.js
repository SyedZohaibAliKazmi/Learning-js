
// ========================================\ Block & Global Scope in Javascript/===============================

// let a =400


// //  bracket kay andar jo hota ha woh block scope hota ha or jo bahar hota ha woh global scope hota ha 
// if (true) {
    //     let a =10
    //     console.log("Ineer value:", a)
    //     // const b =50 
    //     // var c=100
    
    // }
    
    // console.log(a);
    // // console.log(b);
// // console.log(c);

    

// ========================================\Scope level and mini hoisting in javascript /===============================

// function kay andar or function ban sakta ha or woh phlay walay function ki value ko laysakta ha or console.log
// par jab uski value ko dalengay or argument pass karengay woh run hojayega. Lakin dosray walay function ki value phalay walay kay andar 
// put karengay or console.log karengay or bahar arguments pass karengay woh nahi milay ga.


// child function parents function ki value access kar saktay han magar parents function child ki value access nahi karsaktay

// function one () {
//     name="zohaib"
//     function two() {
//         // website = "www.zohaib.com"
        
//         // console.log(name);
//     }
//     // console.log(website);
//     two()
// }
// one()



// bahar wala variable andar nahi milgay ha or andar wala bahar nahi milay ga 

// const username ="mohib"
// if (true) {
//     const username ="Zohaib"

//     if (username === "Zohaib") {
//         const website = ' YouTube'
//         console.log(username+ website);
//     }
//     // console.log(website); 
// }
// console.log(username);

// ================================================= Function method====================================
                                                //    **simple function 
// function ko banao baad may phalay pass kardo koi masla nahi aata simple function my 


// console.log(addone(7))  phalay pass kardia bannay say phalay 
function addone(num1) {
    return num1+1
    
}


                                                   //**hostng function

// agar aap kisi function ko variable may store kar kay run kartay han to woh sirf 
// "function" kay baad chalay gi usssay phalay nahi chalay gi jab tak varable defined nahi 
// hoga. Is method ko hum "Hosting Method " khetay han.
                                                   

 const addtwo = function (num2) {

return num2 + 2
    
 }
 console.log( addtwo(6))



//  https://stop-watch-pk.netlify.app/   Stop Watch Website Link