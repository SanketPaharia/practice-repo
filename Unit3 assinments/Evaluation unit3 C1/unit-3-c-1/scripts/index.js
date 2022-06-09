//store the products array in localstorage as "products"
document.querySelector("form").addEventListener("submit", storedata);

function storedata() {
event.preventDefault()

 let arr = []
  arr.push( document.querySelector("#type").value) 
   arr.push( document.querySelector("#desc").value) 
   /* arr.push (document.querySelector('#price').value) */
 /* arr.push( document.querySelector("#image").value)  */



 localStorage.setItem("products" , JSON.stringify(arr));

 var ans = JSON.parse(localStorage.getItem("products"));
 console.log(ans)
/*  localStorage.setItem("description" , description);
 localStorage.setItem("price", price)
 localStorage.setItem("url", url) */
}