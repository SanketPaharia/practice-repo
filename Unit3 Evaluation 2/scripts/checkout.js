
document.getElementById("confirm").addEventListener("submit" , confirm())
function confirm(){
    
    

    setTimeout(function() {
        alert("Your order is accepted");

    },0000)
    setTimeout(() =>{
        alert("Your order is being prepared");

    },3000)
    setTimeout(() =>{
        alert("Your order is being packed")

    },8000)
    setTimeout(() =>{
        alert("Your order is out for delivery")

    },10000)
    setTimeout(() =>{
        alert("Order delivered")

    },12000)
    
}