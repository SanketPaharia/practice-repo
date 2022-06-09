let data= JSON.parse(localStorage.getItem("user"))||[];
  console.log(data)
  
 //document.querySelector("#wallet_balance").innertext=null
    
  
let wal =0;
for(let i=0;i<data.length;i++){
  wal += Number(data[i].wallet);

}


document.querySelector("#wallet_balance").innerHTML=wal;

console.log(wal)
