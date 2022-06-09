
let form=document.querySelector("#user-data");

let user_data=JSON.parse(localStorage.getItem("user"))||[];
console.log(user_data)
function AddUser(nm,emil,add,wlt){
  
  this.name=nm;
  this.email=emil;
  this.address=add;
  this.wallet=wlt;
  
}


form.addEventListener("submit",function(){
  event.preventDefault()
  let name=form.name.value;
  let email=form.email.value;
  let address=form.address.value;
  let wallet=form.wallet.value;
  

  let s1=new AddUser(name,email,address,wallet);
  user_data.push(s1);
  localStorage.setItem("user",JSON.stringify(user_data))
  form.reset()
})