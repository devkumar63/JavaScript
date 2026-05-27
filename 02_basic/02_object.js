 

// const tender=new Object()/*it is Singletan object*/

// const tender={}  /*it is  Non Singletan object*/
// tender.id="123abc"
// tender.name="sammy"
// tender.isLoggedIn=false
// // console.log(tender);
// //console.log(Object.keys(tender));        //object ke ander object ke keys ko print krne ke lea      ==object.keys 
// //console.log(Object.values(tender));        //object ke ander object ke values ko print krne ke lea   ==object.values
// console.log(Object.entries(tender));         //onject ke ander keys or uske value ko array m convert kr deta hhh ==object.entries

//console.log(tender.hasOwnProperty( 'isLoggedIn'));     //tender ke ander vo valuse h ya nhi  == hasOwnProperty



// const regularuser={
//     email:"dev@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"dev",
//             lastname:"chahal"  }}}// {OJECT KE ANDER OBJECT H OBJECT KE ANDER OBJECT
//                                   H KAISE KOI SPACIFIC OBJECT KO PRINT KREGE } == . NOTATION KE THROIUGH
   //                                  MEANS .USERFULLNAME YA . FIRSTNAME .LASTNAME
//    console.log(regularuser.fullname.userfullname .firstname );
   
//     

// console.log(regularuser );   /*we can print main  object ,regular*/
// console.log(regularuser.fullname);   /*we can print   object  +  inobject  +  inobject    ( .object+.obj)*/


// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
//  const obj4={...obj1, ...obj2}   //thid method is good (spred method)
//  console.log(obj4);
 
// const obj3= Object.assign({} ,obj1,obj2   )  //this is second method
// console.log(obj3);


// console.log(obj3);
// const user= [
//     {
//         id:4,
//         email:"dev@gmail.com"
//     },
//         {
//         id:5,
//         email:"harsh@gmail.com"
//     },
//         {
//         id:6,
//         email:"sunjay@gmail.com"
//     },
//      {
//         id:7,
//         email:"monu@gmail.com"
//     },
//      {
//         id:8,
//         email:"jugi@gmail.com"
//     },
//      {
//         id:9,
//         email:"lavi@gmail.com"
//     },
// ]
// // user[5].email
// console.log(user[2]);      //   {  ARRAY OF INDEX KE INDEX NUMBER PR 
//                               JANE KE LEA KONSE INDEX NUMBER  PR JANA
  //                               console.log(user[2]);}

   
 // console.log(object.keys(user));    (practice method)


// console.log(tender);
// console.log(Object.keys(tender));
// console.log(Object.values(tender));
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//     const course={
//           coursename:"javascript",
//           price:"499",
//           institutename:"code"
//     }


// const{price:rate}=course
// console.log(rate);                      .//   { OBJERCT KO RESECTURE KRE KRNA}
// const {institutename:company}=course
//     console.log( company);
    



// const name={
//     email: "dev",
// fullname : "devchoudhary"    =====  {OBJECT}   i think object m name hota nh
// }  
// console.log(name);
// +++++++++++++++++++++++++++++

// {

//   email: "dev",
// fullname : "devchoudhary"    ===== {JSON}    AND i think object m name nhi hota     


// }