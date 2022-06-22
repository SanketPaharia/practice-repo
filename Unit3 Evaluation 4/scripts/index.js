/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

let form =document.querySelector("#user-data");

let user_data=JSON.parse(localStorage.getItem("user"))||[]
console.log(user_data)

function AddUser(nm,url,mail,cntry){
    
    this.name=nm;
    this.imgUrl=url;
    this.email=mail;
    this.country=cntry
    
    
  }


  form.addEventListener("submit",function(){
    

    let name =form.user_name.value;
    let imgUrl=form.user_pic.value;     
    let email = form.user_email.value;
    let country =form.user_country.value
   

    let s1 = new AddUser(name,imgUrl,email,country);
    user_data.push(s1);
    localStorage.setItem("user",JSON.stringify(user_data))
    form.reset()

  } )

