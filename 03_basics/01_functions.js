// //   console.log("groupname");
// //   console.log("dev");
// // console.log("sunjay");
// // console.log("harsh");
 
// function detail(){


//   console.log("groupname");
//   console.log("dev");
// console.log("sunjay");
// console.log("harsh");


// }
// detail()  //agar hum sirf detail dege to vo hoga reference
//             //   ab humne deya reference + exicution
    
//                         detail   (reference)
//                         ()          (exicution)


// function Number( number1,number2,number3){   //{ye jo ( number1,number2,number3) ander h ye h perameter
//                                              // ye kuch bhi ho skta h string number kuch bhi}

//     console.log(number1 + number2 + number3);
    
// }
// Number( 3,5,"u")      //{  ye jo ( 3,5,"u") eske ander h ye h argument  }
// Number("8",4,5)
// function addNumber(number1,
//     number2){
       
// return number1+number2 
//       console.log("dev");
//                           //function m retunr ke baad kuch print hoga 
//                           ager hum log ko return se phele print krege to ho jaga 



// }
// const result= addNumber(2,9)
// console.log( "ok:", result);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// function addPrice(num1){
// return num1
// }
// console.log(addPrice (299));//// AISE EK VALUE TO PRINTE HO JAEGE BUT EK SE JADA KE LEA<<<
   

    // function addPricee(...num1){ 
    //     // if agr aap (val1,val2,...num1) USE KRTE H TO       // (...NUM1) YE HOTA H REST OPERATER  (REST OR SPRED EK HE HOTA H)
    //        // 200 jaega val1  m                                  //ESKE THROUGH HUM SBHE VALUE KO PRINTE KR SKTE H 
    //                                                           // rest operater ke ander aap ketne bhi value de vo sab ek array ke  ander add ho jaege 
    //        // 44 jaega val2 m  
    //        // or hum perinte kr rhe h num1
    //        // to outpur melega==[ 5,5,3,3,2]                                                

    //     return num1
    // }
    // console.log(addPricee(200,44,5,5,3,3,2));////////AISE HUM SBHE VALUE KO PRINTE KR SKTE H IN ARRAY
    


    const user ={

        name:"bottle",
        price: 366,        

    }
 
    function summy( anyuser){
        console.log(`the product iss ${ anyuser.name} and th eproduct  price is ${ anyuser.price}`);//////yha function
                                                                                         //  ke ander object ko call  kr le 
    }


    summy( user)
    //yh apr hum direct object  bhi pass kr skte the 
    //aise<<<
    summy({
        name:"rohan",
        price:"bijnor",
    })


    //FUNCTION KE ANDER ARRAY KO PRINT KRTE HH AISE
   
     
     
     const array =[22,33,44,55,]
      function value (  data){  
        return data[3]


      }
      console.log(value( array));//yha log ke ad=nder aap define array bhi de skte h ya

                                   // khud se bhi koi arrayde skte he jaise<<

       console.log(value( [2,34,45,6677,3,321,]));