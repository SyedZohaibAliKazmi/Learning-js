


// stact (primitive)  and HEap is (Non primitive  ) folder no 05-DataType-Sumary may zada Explain ha

// stack may hum jo bhi changes karengay woh sirf variable kay second copy may change hongay 

// Heap may hum jo bhi changes karengay woh sab original may hongay 


// ======================================= stack Example ==================================== 

let name = "syed zohaib ali kazmi"

let anothername = name

anothername = "zohaib ali"

console.log(name);
console.log(anothername);

// ============================================== Heap Example ======================================

let one = {
    name: "Mohib",
    email: "mohib@goole.com",
    id: 12335
}

let two = one

two.email ="dfdf@google.com"

// console.log(two);
console.log(one);