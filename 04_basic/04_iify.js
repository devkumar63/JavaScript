        // glowel scope ke ander pollution se problem hote h kaiii baar
        // to glowel scope ke pollution ko htane ke lea hune IIFY ke use keya 





//++++++++++++++++++++++++++++++++++++++++++++++++++++++
              //  WITHOUT IIFY
    //           function tea (){

    //          console.log(`data connected`);
             


    //           }
    //           tea()



    //    function chai() {
    //         console.log(`connected`);
    //          } 


    //          chai()



        //      function coffe(){

        //         console.log(`lets drink`);
                

        //      }
        // coffe()  ;       //ye joh h coffe() ===()ye h exicution call
                        // or ek hota h funtion ke just baad vo hota h declaration 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
       // WITH IIFY  IIFY(Immediately Invoked Function Expressions)



    //    why we use IIFY 
       
    //    glowel scope ke ander jo problem aate h usko dur krne ke lea mat 
    //    kuch pollution aata h use dur krne ke lea IIFY ka use krte h 
    //    OR function ko immediately call bhi krta h 



//                     ( ()=>{
//                         console.log(`have a grate day`);
                        
//                     })();

// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  
                                                                          
//                    // IIFY WITH ARROW FUNCTION

//                     ( ()=>{
//                         console.log(`dont drink`);
                        
//                     })();
            //   +++++++++++++++++++++++++++++++++++++

            //   eske ander ek varible bhi accept krne ke lea 

           //IIFY WIT ARROW FUNCTION 

            //   ((entry)=>{      // ese hum simple IIGFY bolte h because yha humne name nhi deya h 
            //     console.log(`you are best ${entry}`);
                
            //   })("soljar");


            //   //IIFY WITHOUT ARROW FUNCTION

            //   (function namee(name){   //ese hum name IIFY bhi bolte h because humne yha name deya h (namee)
            //     console.log(`you are my best  ${name}` );
            //   })("Friend")
// 

                        let a=5
                        let b=10
                        function addvalue(num1,num2)
                        {
                            let total= num1+num2
                            return total
                        }
                        let result1 = addvalue(a,b)
                        let result2 = addvalue(3,9)
                        console.log(result1);
                        console.log(result2);
                        