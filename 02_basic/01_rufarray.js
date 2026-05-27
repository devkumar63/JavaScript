    
    
    const mySym= Symbol("key1")
    
    const  jsUser={
    name: "dev",
    "full name": "Dev Chahal",
   
    age: 20,
    location:  "bijnor",
    email:  "devkumarbijnor006",
    [mySym]: "chahaldev",


}
// console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser["full name"]);
 

// console.log(jsUser[ "location"]);
// console.log(jsUser[mySym]);

// jsUser.   email= "Dev Choudhary "
// console.log(jsUser);
// Object.freeze(jsUser)
// jsUser.email="jhsgefg0"
// console.log(jsUser);
 
jsUser.greeting = function(){
console.log("hello js user");
}
jsUser.greeting1 = function(){
console.log(`hello js user,${ " welcome back in the coading system and you are  a good boy"} `);
}

 
console.log(jsUser.greeting());
console.log(jsUser.greeting1());

