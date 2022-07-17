import navbar from "../components/navbar.js"

document.getElementById("navbar").innerHTML =navbar
console.log(navbar)



 //document.getElementById("search").addEventListener("onkeypress" , handle(event))
   // console.log(query)

  document.getElementById('search').addEventListener('input', function onEvent(event) {
      /*  if (event.key === "Enter") {
           // Do something
           document.querySelector("#container").innerHTML === null
           
       } */
       getData()
   });



async function getData() {
    let query =  document.getElementById("search").value
    console.log(query)
 
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`

    let res = await fetch(url)

    let data =  await res.json()
    console.log(data)
   
    append(data)


}

function append(ans){
   // console.log(ans.hotels[0].Images.one)
   let container = document.querySelector("#container")
   container.innerHTML =null
   

  for(let i=0;i<ans.meals.length ;i++){

 
    let nam = ans.meals[i].strMeal;
    let url =ans.meals[i].strMealThumb;
   
    console.log(nam,url)


    let div = document.createElement("div")
    div.setAttribute("id" , "meals_list")

        
        let img = document.createElement("img")
            img.setAttribute ( "src",url)
        let div1 = document.createElement("div")
            div1.append(img)
        let div2 = document.createElement("div")
            div2.innerHTML = nam
   
        let div4 = document.createElement("button")
            div4.innerText = "Book Now"
            div4.setAttribute("class" , 'book')
           
          
          

        div.append(div1,div2,div4)
        container.append(div)
   
  }

  //document.getElementById(search).value === null

}
