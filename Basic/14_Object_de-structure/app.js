
// ================================  De-Structure =====================

const  course = {
    course:"Web Development",
    price: 1000,
    teacher:"Zohaib"

}
   
  const {teacher} =course

  // console.log(teacher);


// ================ Sir shehzad method ===================

// for (const key in course) {
//       console.log(key ,course[key]); // both key and value kay liya ya use karengay 
//     }

    // for (const key in course) {
    //     console.log(course[key]);  // value kauy liye use hota ha only
    //   }
  //  const result= Object.entries(course)
  //  console.log( result[0][0])

   
    
// console.log(Object.entries(course))

// ======================================= JSON ======================
//  khali azume karen Json hota kasa ha ya sirf ek object ki tarhan dekhta ha 

// {
//     "name: "Zohaib ali",
//     "course":"JavaScript",
//     "fees": 5000

// }