async function getData(){
     
    var url = "https://grocery-masai.herokuapp.com/items"

        let res = await fetch(url)

        let ans = await res.json()
        
        
        console.log(ans)
        console.log(ans.data[0].price)
        console.log(ans.data.length)
        append(ans)
       
    }


    getData()

     function append(ans){
      for(let i=0;i<ans.data.length;i++){
        let nam = ans.data[i].name;
        let price =ans.data[i].price;
        let url = ans.data[i].image;
        console.log(nam,price,url)


        let div = document.createElement("div")
        div.setAttribute("class" , "item")

            
            let img = document.createElement("img")
                img.setAttribute ( "src",url)
            let div1 = document.createElement("div")
                div1.append(img)
            let div2 = document.createElement("div")
                div2.innerHTML = nam
            let div3 = document.createElement("div")
                div3.innerHTML = price
            let div4 = document.createElement("button")
                div4.innerText = "Add To Cart"
                div4.setAttribute("class" , 'add_to_cart')
               // div4.setAttribute("onClick" , "addtocart()")
               div4.addEventListener("click" , function(){
                addtocart(info,i)
               })

            div.append(div1,div2,div3,div4)
            document.querySelector("#groceries").append(div)
       }
      }

      function addtocart(){
       event.preventDefault()

       let x = div.innerHTML
       console.log(x)
      }