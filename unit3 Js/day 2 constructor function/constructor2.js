
// let laptop2={
//     cpu:'17',
//     ram:16,
//     brand:'Apple',
//     getConfig:function(){
//         console.log(this.cpu);
//    }
// }
//                             I
       





// function Alien(name, tech){
//     this.name = name;
//     this.tech = tech
//     }


//     let alien1 = new Alien("sanket" , "js") 

//     let alien2 = new Alien ( 'Kiran', 'Java')
//     alien1.tech = 'Blockchain';
//     console. log (alien1)

console.log("sanket")

let obj = {
    name : "sanket",
    age :25

}

let  Printage = function(age){
    console.log(this.age)
}

Printage.call(obj , 25)