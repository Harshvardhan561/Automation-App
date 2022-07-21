//complex way of writing promises
function fp()// promisifying a function  , as we are creating a promise inside 
 {
   return new Promise (function (resolve , reject)
   {
       resolve ("hi");
   });
      
 }

let Promisifyfp = fp();

 Promisifyfp.then(function (data)
 {
     console.log(data);
 })

 Promisifyfp.catch(function (err)
 {
     console.log(err);
 });

//  easy way of writing promises
// async function f() {
//     return "hello";
//   }

//   let asyncf = f();
//   asyncf.then(function (data)
//   {
//    console.log(data);
//   });

//   f().then(alert);// this is not working , alert is defined at browser level 

//The keyword await makes JavaScript wait until that promise settles and returns its result.
//The function execution “pauses” at the line (*) and resumes when the promise settles, with result variable.
//await literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 5000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    alert(result); // "done!"
  }
  
  f();
  console.log("YOLO");




  // await and fetch 
  async function showAvatar() {

    // read our JSON
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
  
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();
  
    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
  
    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  
    img.remove();
  
    return githubUser;
  }
  
  showAvatar();

  //try catch finally demo 1
  try{
    console.log("in try");
  }catch (e){
    console.log(e);
  } finally{
    console.log("i am always executed");
    console.log("ditto :)");
  }

  //try catch finally demo 2
  try{
    throw new Error("gadbad ho gayi");
    console.log("in try");
   } catch (e)
   {
     console.log(e);
   } finally{
    console.log("i am always executed");
    console.log("ditto :)");
   }