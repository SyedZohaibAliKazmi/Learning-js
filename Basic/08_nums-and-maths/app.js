
// // ============ Number ============================

const score = 400
// console.log(score);

const Balance = new Number (1000)
// console.log(  Balance.toString()); //ya string may convert kara ha number ko

// console.log(Balance.toFixed(2)); //ya hum ecommerce may use karengay 

const othernumber =423.8366

// console.log(othernumber.toPrecision(3)); //its most important to number

const value = 1000000

// console.log(value.toLocaleString()); // its use for money count  "," through coma

// ================================ Maths ==============================

// console.log(Math.abs(-87)); // "abs" ya negative value ko positive value may change karta ha 

// console.log(Math.round(4789.73354)); // ya round kardeyga value ko

// console.log(Math.ceil(4789.73354)); // ya hamesha point kay baad wali ko nahi dekhay ga ya direct 1 number bhara deyga 

// console.log(Math.floor(4789.73354)); // ya point kay baad wali value nahi dekhay ga direct jo value poin say phalay hay usko hi likhay ga 

// console.log(Math.min(9,85,8,9,5,8,)); // ya sab say choti value ko print karay ga

// console.log(Math.max(7,5,8,9,4,10,55,)); // ya sab say bari value print karay ga 


// console.log(Math.random());

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)