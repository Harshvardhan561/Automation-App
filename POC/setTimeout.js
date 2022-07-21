// function yolo() {
//     var a = 10;
//     function cb(err, res) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log("hello how are you ?");
            
//         }
//     }
//     // function to be executed(callback fun) , time(ms) after which cb to be executed
//     // 1 second =1000 milli second
//     setTimeout(cb, 5000);
//     console.log(a);
// }  
// yolo();


// const request = require("request");
// let url ="https://www.worldometers.info/coronavirus/"
// function yolo() {
//     var a = 10;
//     function cb(err, res,body) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log("hello how are you ?");
//             console.log("statusCode is ",res.statusCode);
//         }
//     }
//     // function to be executed(callback fun) , time(ms) after which cb to be executed
    // 1 second =1000 milli second
    // request(url,cb)
    // console.log(a);

// }

// yolo();
// let b = 100;
// console.log(b);

// for(let i=1;i<=10;i++) // bit slow , for evry itteration we wait for more time
// {
//  setTimeout(function(){
//   console.log(i);
//  },2000*i);
// }

// for(let i=1;i<=10;i++)// bit fast
// {
//  setTimeout(function(){
//   console.log(i);
//  },2000);
// }



// for(let i=1;i<=10;i++)
// {
//  function outer(a){
//     setTimeout(function(){
//         console.log(a);
//        },2000*a);
//  }

//  outer(i);
// }

// function a()
// {
//   let x =100;
//   function y()
//   {
//     return x;
//   }
//   return y;
// }

// let fn = a();
// let ans = fn();
// console.log(ans);



for(let i=1;i<=10;i++)
{
 function cb(a){
    console.log(a);
   
 }

 setTimeout(cb,2000*i , i);// (cb is call back function , sleeping time , iterator)
}