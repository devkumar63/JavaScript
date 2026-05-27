


 
                const mySym= Symbol("key1")

const jsobj={

        name:"Honey",
        "full name":"Honey Meghram",   /*  we can not acess by .(dot) ,  we can acess by[""]  */
        age:20,
        email:"honeymehgramgmail.com",
        location:"bijnor",
        [mySym]:"mykey1",

 }   
// console.log(jsobj[mySym])


// jsobj.name="dev"
// Object.freeze(jsobj)    // /* freeze meins the name can not change its also same*/
 
 
// jsobj.name="harsh"
// console.log(jsobj);
//  console.log( typeof jsobj[mySym]);


    // console.log (jsobj.name)
    // console.log(jsobj.email);  /*  we can acees only name and only one thing*/
    // console.log(jsobj["name"]); 
    // console.log(jsobj["email"]);  /*  we can acees only name and only one thing*/
    // console.log(jsobj["full name"]);
     //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    jsobj.greeting=function(){

console.log("hello user");

    }
     jsobj.greetingTwo=function(){   

console.log(`hello user,${ this.name}` ); /* there we can add any this ,object etc..*/

    }
    console.log(jsobj.greeting());
      console.log(jsobj.greetingTwo());
    

    
    
    