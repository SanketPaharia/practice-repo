document.getElementById("data").addEventListener("submit" , MyFunc);

var arr = []
function MyFunc (){
    event.preventDefault()
    
   

    let form = document.getElementById("data")
    let n =(document.getElementById("name").value)
    let c  =(document.getElementById("category").value)
    let i = form.image.value
    let p = form.price.value
    let g = form.gender.value

    let p1 = new Product( n,c,i,p,g )

     function Product (n , c , i ,p ,g){

        this.name = n ;
        this.category = c ;
        this.image = i;
        this.price = p ;
        this.gender = g
        }

  
    arr.push(p1)
 localStorage.setItem("products" ,JSON.stringify( arr))
    console.log (JSON.parse(localStorage.getItem("products")))
}

