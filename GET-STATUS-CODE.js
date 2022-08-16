/*
      SOURCE CODE 
               |
               v
      https://www.youtube.com/watch?v=Gjbr21JLfgg&t=609s
      
      https://www.youtube.com/watch?v=R3tZ3FtTluQ
*/

lornt=false;

 function xhrRequest(){            
  
   console.log(this.status)
   
  if (this.status == 200)
    {
       lornt=true;
    }
  else
    {
      lornt=false;
    }
}

  function getReq(url){
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load",  xhrRequest);
  oReq.open("GET", url);
  oReq.send();
}

 chkstatus = async () => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        url= window.location.href;
        
        var oReq = new XMLHttpRequest();
  oReq.addEventListener("load",  xhrRequest);
  oReq.open("GET", url);
  oReq.send();
        
        console.log("chkstatus - LORNT :  "+String(lornt))
        resolve(lornt);
      },3000);
    });
};

chk=false

console.clear()
/*
i=0;
while((i<10) || (chk === false))
  {
    chk = await chkstatus();
    console.log("LORNT :  "+lornt)
    console.log("I :  "+ String(i))
     i=(i+1);
  }
*/
chk = await chkstatus();
console.log(chk)
