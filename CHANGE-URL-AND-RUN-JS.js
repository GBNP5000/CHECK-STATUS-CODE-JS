async function site(s1){ 

   return new Promise ((resolve,reject) => {
  $(document).load(s1, function() {
   //window.location.assign(s1);
  console.log("URL CHANGED");
});
resolve("success")
});

}
//console.clear()
sta=await site("https://www.instagram.com/p/CeQ9fpcvqT2/")
console.log("URL CHANGED {sta}");
