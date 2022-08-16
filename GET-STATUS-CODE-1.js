/*
      SITE :  https://stackoverflow.com/questions/61456020/best-way-to-check-status-code-of-http-response
*/

console.clear()


async function chck(){
  return new Promise((resolve,reject) => { 
  setTimeout(() => {
        fetch(window.Location.href).then((response)=>{
    console.log(response.status)
          if (response.status >= 400) {
        //handle unsuccessful request ...
    }

    // or 
    if (response.status == 200) { 
        // status ok 
    }
          //return response.json();
          return response.status;

});
      },3000);
});
    
}
sta= await chck();
console.log("AFTER FUNCTION :"+sta)
