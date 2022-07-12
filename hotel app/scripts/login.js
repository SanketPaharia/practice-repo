

let data = JSON.parse(localStorage.getItem("userData"))||[];
console.log(data)

let form = document.querySelector("#login-data")

form.addEventListener("submit",function(event){
event.preventDefault()

let email = form.email.value;
let password = form.password.value;

var flag = false
for(let i=0;i<data.length;i++){

    
    if(data[i].email ==email && data[i].password==password){
        flag = true;
        break;
        
    }
    
}
if(flag ==true){
    window.location.href="./index.html"
        alert("Login successful!")
        console.log("loggedin")

}
else{
    alert("wrong credentials")
}

})

