//store the products array in localstorage as "data"

let form = document.querySelector("#product_form");

let btn = document.querySelector("#show_products").addEventListener("click",function(){
    window.location.href = "inventory.html"
})

let shoe_data  = JSON.parse(localStorage.getItem("Data"))|| [];
console.log(shoe_data)

function Addshoe(br ,nm ,pr,img){

    this.brand =br;
    this.name = nm;
    this.price =pr;
    this.image = img
}

form.addEventListener("submit",function(){
    event.preventDefault()

    let brand =form.product_brand.value;
    let name =form.product_name.value;
    let price = form.product_price.value;
    let image = form.product_image.value;


    let s1 = new Addshoe(brand , name,price,image);

    shoe_data.push(s1);
    localStorage.setItem("Data", JSON.stringify(shoe_data))
    form.reset()

})