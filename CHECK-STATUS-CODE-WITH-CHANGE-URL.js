async function cload()
{
    return new Promise((resolve,reject) => { 
  setTimeout(() => { 
      fetch(window.Location.href).then((response)=>{      
      console.log(response.status)
          while (response.readystate !== 4)
            {
              
            }
          
          if (response.status === 200) 
          {
        //handle unsuccessful request ...
                   resolve("SUCCESS")
           }
          else if (response.status >= 400) 
          {
        //handle unsuccessful request ...
                   reject("FAILURE")
           }

      }//fetch  
    
        
      )},3000); // set-timeout
});  // return promise
}

async function check(){
  return new Promise((resolve,reject) => { 
  setTimeout(() => { 
        fetch(window.Location.href).then((response)=>{
        console.log(response.status)
          if (response.status >= 400) {
        //handle unsuccessful request ...
           reject("FAILURE")
    }

    // or 
    if (response.status == 200) { 
        // status ok 
        resolve("SUCCESS")
    }
          //return response.json();
          resolve(response.status);

});
      },3000);
});
    
} // EOF CHECK-STATUS

console.clear()
 window.location.assign("https://www.instagram.com/p/CS_T_Pfp3nh/");
sta = await check();
console.log(sta)


window.location.assign("https://www.instagram.com/p/CeQ9fpcvqT2/");
sta = await check();
console.log(sta)
