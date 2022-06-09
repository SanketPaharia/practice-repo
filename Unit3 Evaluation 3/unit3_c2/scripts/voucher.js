let data=JSON.parse(localStorage.getItem("user"))||[];
  console.log(data)
  
//  document.querySelector("#wallet_balance").innertext=null
    
  
let wal =0;
for(let i=0;i<data.length;i++){
  wal += Number(data[i].wallet);

}


document.querySelector("#wallet_balance").innerHTML=wal;

console.log(wal)




const url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";

async function getData() {
try {
  let res = await fetch(url);
  let prod = await res.json(); // Collect data
  append(prod);
  console.log(prod);
} catch (err) {
  console.log(err);
}
}

getData();

function append(data) {
let container = document.getElementById("voucher_list");
data.forEach(function (el) {
  let name = document.createElement("h1");
  h1.innerText = el.name;

  let img = document.createElement("img");
  img.src = el.image;

  let h2 = document.createElement("h2");
  h2.innerText = el.price;

  let btn = document.createElement("button")
  btn.innerText = "buy"
  
  let div = document.createElement("div");
  div.append(h1,img,h2,div);

  div.setAttribute(".buy_vouchers")

  container.append(div);
});
}
