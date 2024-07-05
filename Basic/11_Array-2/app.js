// const arr=[1,2,3,4,5,6]

// console.log( arr)

// ============= Push , index , concat , spread ,

const name =["Zohaib", "Ali","areeb","ismail","saad"]

const hero =["spiderman", "superman","batman","ironman"]


//    push 


// name.push(hero)
// // console.log(name);


//   index say nikalna 
// console.log(name[0][3]);

//========================== concat =======================
  
//  1 method 

const combine = name.concat(hero)

console.log(combine);

// ======================== spread Methon

//  spread zda tar usehota ha ya 2 alag alag Array ko ek array may convert karta ha 

const spread = [...name , ...hero]
console.log( spread)


// ============================= Hard array flat method =================


const another_array = [1,2,3,4,[5,6,7] ,8, [9,10,11,[12,13], 14]]

const real =  another_array.flat(Infinity)

console.log(real);
// ===============================================

console.log(Array.isArray("zohaib"));  // ek string ko check karna ya array ha ya nahi uskay liye :isArray 
//  use hota ha 


console.log(Array.of("Zohaib"));  // ya ek string ko array may convert kardeyta ha "from"
console.log(Array.from("Zohaib"));  // ya ek string ko array may convert kardeyta ha "from"
const num1 =100
const num2 =100         
const num3 =100

console.log(Array.of(num1,num1,num3));