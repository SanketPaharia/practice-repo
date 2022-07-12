

   let form = document.querySelector("#user-data");

    let user_data = JSON.parse(localStorage.getItem("userData"))||[];
    console.log(user_data)

 /* function AddUser(nm,mail,pass){
        this.name = nm;
        this.email = mail;
        this.password =pass;
    }  */

    class AddUser {
        constructor(nm ,mail,pass){
            this.name =nm;
            this.email = mail;
            this.password =pass
        }
    }
   
    form.addEventListener("submit",function(el){

       el.preventDefault()

       let name = form.name.value;
       let email = form.email.value;
       let password = form.password.value;
       

       let s1 = new AddUser (name,email,password);
      user_data.push(s1)
       localStorage.setItem("userData",JSON.stringify(user_data))
       form.reset()
       window.location.reload()

   })






