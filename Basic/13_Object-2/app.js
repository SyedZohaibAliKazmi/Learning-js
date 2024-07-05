//  object single tons like tinder 

// const FacebookUser = new Object()


const facebookUser ={
    name:"zohaib Ali",
    age:19,
    id:"123abc",
    isloggedIn:"false"
}

// facebookUser.name ="zohaib"
// facebookUser.id="1245abs"


// console.log(facebookUser)

// ========== Nested Object ===================

const user = {
    email: "zohaib@google.com",
    fullname:{
        username:{
            firstname:"Zohaib",
            lastname:"Ali"
        }
    }

}
// console.log(user.fullname.username);

// =========================== Object Assign ===============================

const obj1 ={
    1:"a",
    2:"b",
}

const obj2 ={
    3:"c",
    4:"d",
}

const obj4 ={
    5:"c",
    6:"d",
}

// ================== 2 object assign in one object ===============
// const obj3 = {obj1,obj2}


                //   method 1 assign object 

// const obj3 =Object.assign({} ,obj1,obj2 ,obj4) // {} ya syntax kay liye use hota ha warna sri value object one may jarahi hongi
                    

                     // method 2 assign object  +++ Spread

const obj3 ={...obj1, ...obj2, ...obj4}

// console.log( obj3)


                //   === Array kay andar Object ==== 


const userId =[
    {
        id:11469,
        email:"zohaib@google.com"
    },
    {
        id:11469,
        email:"ali@google.com"
    },
    {
        id:11469,
        email:"mohib@google.com"
    },
    {
        id:11469,
        email:"abbas@google.com"
    },
]

// console.log( userId[0].email)


// console.log(facebookUser);


console.log(Object.keys(facebookUser));
console.log(Object.values(facebookUser));
console.log(Object.entries(facebookUser)); // ya sari keys & values ko array may kardey ga 

console.log(facebookUser.hasOwnProperty('isloggedIn')); //  kisi property ko pata karnay kay liye use hoga or return boolean hoga 
