
async function getsc(){

  return new Promise((resolve,reject) => {
  
    fetch(window.Location.href).then((response)=>{
  console.log(response.status)
  
      /*while (response.readystate !== 4)
  {
  
  }
  */
      
      if (response.status === 200)
      {
      //handle successful request ...
              resolve("SUCCESS")
      }
      else if (response.status >= 400)
      {
      //handle unsuccessful request ...
              reject("FAILURE")
      }
      
  } 
  ) // FETCH .THEN
     
   });// RETURN PROMISE
  }
  
  //console.clear()
  
  //window.location.assign("https://www.instagram.com/p/CS_T_Pfp3nh/");
  
  sta = $(document).ready( function() {
                    console.log("DOCUMENT IS FULLY LOADED")      
                     getsc();
    }
   );
  
  console.log(sta)
  
  
