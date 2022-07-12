import navbar from "../components/navbar.js"

console.log(navbar)

document.getElementById("navbar").innerHTML =navbar


async function getData() {
 
    let url = `www.themealdb.com/api/json/v1/1/list.php?c=list`

    let res = await fetch(url)

    let data =  await res.json()
    console.log(data)
    //append(data)


}
getData()

/* let append = (data) => {
    let cont = document.getElementById("container")

    data.forEach((image,title ,price) => {

        let img = document.createElement('img')
        img.src = image;

        let t = document.createElement('h3')
        t.innerText =title;

        let p = document.createElement('p')
        p.innerText = price;

        let div = document.createElement('div')
        div.append(img , t ,p)

        cont.append(div)
        
    });
} */