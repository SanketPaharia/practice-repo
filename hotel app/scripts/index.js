


async function getData(){
    let query = document.querySelector("#query").value
   
    var url = `https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`
            console.log(url)
        let res = await fetch(url)

        let ans = await res.json()
        
        
        console.log(ans)
        
        append(ans)
       
    }


    getData()

      function append(ans){
        console.log(ans.hotels[0].Images.one)
      for(let i=0;i<ans.hotels.length;i++){
        let nam = ans.hotels[i].Title;
        let price =ans.hotels[i].Price;
        let url = ans.hotels[i].Images.one;
        console.log(nam,price,url)


        let div = document.createElement("div")
        div.setAttribute("id" , "hotels_list")

            
            let img = document.createElement("img")
                img.setAttribute ( "src",url)
            let div1 = document.createElement("div")
                div1.append(img)
            let div2 = document.createElement("div")
                div2.innerHTML = nam
            let div3 = document.createElement("div")
                div3.innerHTML = price
            let div4 = document.createElement("button")
                div4.innerText = "Book Now"
                div4.setAttribute("class" , 'book')
               
               div4.addEventListener("click" , function(){
                addtocart(ans)
                console.log(elem)
               })

            div.append(div1,div2,div3,div4)
            document.querySelector("#hotels").append(div)
       }
      }
     

      function addtocart(ans){
       

       
      } 