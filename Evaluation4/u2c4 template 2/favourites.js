// write js code here corresponding to favourites.html

var match = JSON.parse(localStorage.getItem("favourites"))
match.forEach(function(el){
    var tr1 =document.createElement("tr")

    var td1 = document.createElement("td")
    td1.innerText=el.number

    var td2 = document.createElement("td")
    td2.innerText=el.teama

    var td3 = document.createElement("td")
    td3.innerText=el.teamb

    var td4 = document.createElement("td")
    td4.innerText=el.date

    var td5 = document.createElement("td")
    td5.innerText=el.venue

    var td6 = document.createElement("td")
    td6.innerText= "Remove"
    td6.style.color = "red"
    td6.style.cursor = "pointer"
    td6.addEventListener("click",function(){
        functionfav(el)
    })

    tr1.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr1)


})

