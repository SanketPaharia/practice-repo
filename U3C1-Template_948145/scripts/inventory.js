let btnn=document.querySelector("#add_product").addEventListener("click",function(){
    window.location.href="index.html"
  })

  let data=JSON.parse(localStorage.getItem("Data"))||[];
  console.log(data)

  display(data)
   function display(data){
   // document.querySelector("#products_data").innerHTML=null;
       data.forEach(function(info,i){
        let url = info.image;
        let nam = info.name;
        let brd =info.brand;
        let prc = info.price
        console.log(url,nam,brd,prc)


        let div = document.createElement("div")

            
            let img = document.createElement("img")
                img.setAttribute ( "src",url)
            let div1 = document.createElement("div")
                div1.append(img)
            let div2 = document.createElement("div")
                div2.innerHTML = nam
            let div3 = document.createElement("div")
                div3.innerHTML = brd
            let div4 = document.createElement("div")
                div3.innerHTML = prc
               /*  let p = document.createElement("p")
                p.innerText = "sanketcool" */

            div.append(div1,div2,div3,div4)
            document.querySelector("#products_data").append(div)
       })

    }