

        {}  //<<< ye hota h scope ye functoin ke ander bhi aata h
                // arry ke ander abhi aata h
            //but object ke sath jo aata h vo hota h declaration use nhi kh skte hum scope


            {}



        // let a=10
        // const  b=20
        // var c=30
        // console.log(a);
        // console.log(b);
        // console.log(c);
        

        // let a=40
        // const  b=50
         var c=60

         if (true)
        {
        let a=10
        const  b=20
        var c=30
        console.log("inner",c);
        
        }
        console.log(c);
        
        
        
        //  console.log(a);////yha a print hue scope se phele  wala
        // console.log(b);    //yha b print hue scope se phele  wala
        // console.log(c);   //pr yha pr c print hue scope wala
        //                     //matlab <<"var">> vo print krege jo baad me ho chahe scope se phele ho ya scope m ho ya scope ke baad m ho ye baad wala he print krega  
        
       //IN OYHER CASE


    //    var c=100     //yha humne c=100

    //    if (true)     //or agr hume if ka pta nhi <jaese ke group m kaam krte h to sa code puch krte h vha pr></jaese>
    //    {
    //     c=10
    //    }
    //    console.log(c);  ///to yha to print hoga baad wala hoga matlab c=10
    //                         // to ye thode scope ke problem h var m
       
    // nested loop ke aander child function jo h vo parent ke variblr ko acees kr sk   te h