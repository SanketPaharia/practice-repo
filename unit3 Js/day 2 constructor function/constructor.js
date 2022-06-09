/* console.log(this)

function func(){
    console.log(this)
}
func()

let obj = {
    team : "csk" ,
    print : function(){
        console.log(this)
    }
};
obj.print()

let obj1 = {
    team : "csk" ,
    print : function(){
        console.log(this.team)
    }
};
obj1.print()

function products(n,b,p){

    var obj = {}

    obj.name  = n
    obj.brand = b 
    obj.price = p

    

    return obj
}

console.log(products("nike" , "shoe" , 1000))

function NikeProduct(n,b,p){
    this.name = n;
    this.brand = b;
    this.price = p;
    this.print = function(){
        console.log(this)
    }
}

let p1 = new NikeProduct( "shoe", "nike",1000)
console.log(p1)
p1.print() */
// new keyword returns the object and points to the newly created object.


/* function product(n,b,p){
    this.name = n;
    this.brand = b;
    this.price =p
}

let arr = []
function submitProduct(event){
event.preventDefault()

let form = document.getElementById("products")
let name = form.name.value;
let brand = form.brand.value;
let price = form.brand.value;

let p = new product(name,brand,price);
//console.log(p)

arr.push(p)
console.log(arr)

 console.log(form)
console.log(name ,brand, price) */

/* let bedroom = {
    name : "bedroom" ,
    purpose : "sleep" ,
    food : function(){
        console.log( "serving "+ food + " in " +this.name)
    }
}
let storeroom = {
    name : "storeroom" ,
    purpose : "rest" ,
    food : function(food){
        console.log( "serving "+ food + " in " +this.name)
    }
}

let dinningroom = {
    name : "dinnigroom" ,
    purpose : "sleep" ,
    food :function(meal){
        console.log( "serving "+ meal + " in " +this.name)
    }
}


bedroom.food("pizza")
storeroom.food("maggie")
dinningroom.food("momo") */


/* let bedroom = {
    name : "bedroom" ,
    purpose : "sleep" ,
    
}
let storeroom = {
    name : "storeroom" ,
    purpose : "rest" ,
  
}
let dinningroom = {
    name : "dinnigroom" ,
    purpose : "sleep" ,
    
}

function food(food){
    console.log( "serving "+ food + " in " +this.name)
}
// In call we pass string as argument
food.call(bedroom , "pizza")
food.call(storeroom , "chai")

// In apply we pass array as argument
let arr = ["chai" , "coffee"]
food.apply(bedroom , ["chai"])
food.apply(storeroom , arr ) 

// ask IA why line 132 is working only on arr[0] , i.e giv ing output for chai only,

// bind returns a funciton

let p1 = food.bind(bedroom , "dosa")

p1() */

/* let name = {
    firstname : "sanket",
    lastname : "paharia",

    
}

let printFullName = function(){
    console.log(this.firstname +" "+ this.lastname)
}

let name2 = {
    firstname : "chotu",
    lastname : "gupta",

   
}

printFullName.call(name);
printFullName.call(name2) */
/* 
let name ={
    firstname: "Akshay" ,
    lastname: "Saini",
}

    let printFullName = function (hometown, state) {
    console. log ( this.firstname + " "+ this.lastname+" from " +hometown + " " +state)
    }

    printFullName.call(name, "Dehradun", "Uttarakhand") ;


    let name2 = {
    firstname: "Sachin",
    lastname: "Tendulkar",
    }

   // function borrowing
    printFullName.call (name2, "Mumbai", "Maharashtra")
    printFullName.apply (name2, ["Mumbai", "Maharashtra"] )
    // bind method

    let printMyName = printFullName.bind(name2 , "gwalior","M.p")
    console.log(printMyName)
    printMyName() */


    let laptop2={
        cpu:'17',
        ram:16,
        brand:'Apple',
        getConfig:function(){
            console.log(this.cpu);
       }
    }
                                
            laptop2.getConfig()
    
    
    
    
    
    function Alien(name, tech){
        this.name = name;
        this.tech = tech
        }
    
    
        let alien1 = new Alien("sanket" , "js") 
    
        let alien2 = new Alien ( 'Kiran', 'Java')
        alien1.tech = 'Blockchain';
        console. log (alien1)