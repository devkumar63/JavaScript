//     const array=[38,44,36,64,88]            //{    WE GET SAME OUTPUT OF BOTH METHOD       //it is a metho of array but there are second method of array
//     const array1=new Array(38,44,36,64,88)  //{
//  console.log(array);
// console.log(array1);

// console.log(array[3]);
// array.push(97)    /* add value in the array     right side*/
// array.push(17)
// array.push(47)
// array.push(37)
// array.pop()       /*remove value in the array    right side */      
// console.log(array);

// array.unshift(73)
// array.unshift(93)         /*add value in the array    left side */      
// array.unshift(23)
// array.shift()       /*remove value in the array    left side */      
// // console.log(array);
// console.log(myArray.include(38));  ARRAY M VALUE H YA NHI 
// console.log(myArray.indexOf(44));  ARRAY M 44 KONSE NUMBER PR HH

//  const array=[2,4,67,54,4]
//   const newArray=array.join()      IT CAN CONVERT THE ARRAY INTO toString
   
    
//        console.log(array);     OUTPUT ISSSSS      [ 2, 4, 67, 54, 4 ]
//        console.log(newArray)                       2,4,67,54,4    ;
//    {{{{{{{{{{{{{{   
// ++++++++++    slice    splice    ++++++++

// const myArray=[1,2,3,4,5]
 

// const myArray1=myArray.slice(1,3)    +++++++   ye range include nhi karta hh means    output is [1,2]
// console.log(myArray1);                           ye array se copy utaega matlab original aaaray change nhi hoga
//                                                   after slice    original array is [1,2,3,4,5]
// console.log(myArray);

// const myArray2=myArray.splice(1,3)   ++++++++    ye range  include krta h  hh  means    output is [1,2,3]
// console.log(myArray2);                              ye original array he uta lega matlab original aaray change ho jaega 
// console.log(myArray);                                 after splice    original array is [4,5]


// output isss

//  [ 2, 3 ]
// [ 1, 2, 3, 4, 5 ]
// [ 2, 3, 4 ]
// [ 1, 5 ]

// }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

const hero=["tony","spidy","thor"]

const filmyHero=["akshay","salman","rokey"]
hero.push(filmyHero)       
console.log(hero);                      /*hero array m filmyHero array add ho gya */      
const allHero=hero.concat(filmyHero)
console.log(allHero);             /* same but it can arrange in the sequence minner */      
// //  const everyHero=[...hero,...filmyHero]          === its called spred mathod
// // console.log(everyHero);                    /* same upper method */      
//   const arr=[1,4,5,6,[5,6,8,2],6,2,[2,5,7,[4,6,"dev"]]]
//   console.log(arr);         
//   const fullArray=arr.flat(Infinity)       /*  IT CAN CONVERT MANY ARRAY INTO SINGLE ARRAY  */      
//   console.log(fullArray);
//   console.log(Array. from("harshrajput"));      /* convert into array*/      
//   console.log(Array.from({name:"sunjay"}));
//   let score1=100
//   let score2=100
//   let score3=100
//   console.log(Array.of(score1,score2,score3,arr));     /* convert into the array onto array*/  
  
  
  
  
//   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 


//           .of()      CONVERT THE STRING ETC VALUE INTO ARRAY 100 200 300===[100,200,300]
//           .from()    CONVERT THE ALL ELEMENT OF STRING INTO AARAY   DEV==['D','E','V']
//           .flate()   ARRAY KE ANDER ARRAY KE ANDER ARRAY CONVERT INTO SINGLE AARAY
//           .concat()    ADD TWO ARRAY INTO SINGLE ARRAY
//           SPRAD METHOD   (...hero...allHero...filmyHero)     INTO ONE ARRAY
//           .slice()       AFTER SLICE NOT CHANGE INTO ORIGINAL AARAY 
//           .splice()      AFTRE SPLICE CHANGE ORIGINAL ARRAY
//           .push()       ADD VALUE RIGHT SIDE
//            .pop()        REMOVE VALUE RIGHT SIDE
//           .unshift()     ADD VALUE LEFT SIDE
//             .shift()      REMOVE VALUE LEFT SIDE

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

