
function rollTheDice(){
    event.preventDefault();

  var x= document.getElementById("member-1").innerText = Math.floor(Math.random() * 6) +1;
  var y= document.getElementById("member-2").innerText = Math.floor(Math.random() * 6) +1;
  var z = document.getElementById("member-3").innerText = Math.floor(Math.random() * 6) +1;


  var arr = [x,y,z];
  arr.sort();
  winner()
  function winner(){
    if (arr[0]==x){
        document.getElementById("winner").innerText= "Member A"
    }
    else if (arr[0]==y){
        document.getElementById("winner").innerText= "Member B"
    }
    else if (arr[0]==z){
        document.getElementById("winner").innerText = "Member C"
    }
  
  

  }
  green()
  yellow()
  red()
function green(){
    if (arr[0]==x){
        document.getElementById("member-1").style.backgroundColor = "green"
    }
    else if (arr[0]==y){
        document.getElementById("member-2").style.backgroundColor = "green"
    }
    else if (arr[0]==z){
        document.getElementById("member-3").style.backgroundColor = "green"
    }
}
    
function yellow (){
    
    if (arr[1]==x){
        document.getElementById("member-1").style.backgroundColor = "yellow"
    }
    else if (arr[1]==y){
        document.getElementById("member-2").style.backgroundColor = "yellow"
    }
    else if (arr[1]==z){
        document.getElementById("member-3").style.backgroundColor = "yellow"
    }
}

function red(){
    if (arr[2]==x){
        document.getElementById("member-1").style.backgroundColor = "red"
    }
    else if (arr[2]==y){
        document.getElementById("member-2").style.backgroundColor = "red"
    }
    else if (arr[2]==z){
        document.getElementById("member-3").style.backgroundColor = "red"
    }
}


 /*  if(x==y){
    document.getElementById("member-1").style.backgroundColor = "blue"
    document.getElementById("member-2").style.backgroundColor = "blue"
  }
  else if(y==z){
    document.getElementById("member-3").style.backgroundColor = "blue"
    document.getElementById("member-2").style.backgroundColor = "blue"
  }
  else if(x==z){
    document.getElementById("member-3").style.backgroundColor = "blue"
    document.getElementById("member-1").style.backgroundColor = "blue"
  }
  else if(x==y==z){
    document.getElementById("member-3").style.backgroundColor = "blue"
    document.getElementById("member-1").style.backgroundColor = "blue"
    document.getElementById("member-2").style.backgroundColor = "blue"
 } */
 

}