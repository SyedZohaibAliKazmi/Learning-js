// singleton
// Object.create

// object literals

const sym = Symbol("key");
//  console.log(typeof sym)

const myObj = {
  name: "Zohaib Ali",
  "full name": "Syed Zohaib Ali KAmzi",
  [sym]: "keyzohaib",
  age: 19,
  skills: "Graphic Designer",
  Education: "I.com",
  email: "zohaib@google.com", // ya sab ek string ki form may aa jata ha
};

// myObj.email="zohaib@amazon.com"
// console.log(myObj);

// ================================ Freeze ===============
// Object.freeze(myObj)
myObj.email = "zohaib@tesla.com";
// console.log(myObj);

// console.log(myObj.email); //1 Method
// console.log(myObj["email"]); // 2 Method
// console.log(myObj["full name"]);
// console.log( myObj[sym]); // 3 Method ya string walay ko [] bracket kay  andar walay method may rakhta ha

//    Sir Shehzad Method
// ===================  New method for print object in console==============

// for (const key in myObj) {
//   console.log(key ,myObj[key]);
// }

// ======================================= Function object ==========

myObj.greeting = function () {
  console.log("hello JS user");
};
console.log(myObj.greeting());

myObj.greetingTwo = function () {
  console.log(`Hello JS User ,${this.name}`);
};
console.log(myObj.greetingTwo());
