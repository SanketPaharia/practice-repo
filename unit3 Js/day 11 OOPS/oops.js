

// inheritence 
/* let obj = {
    name : "sanket",
   age :25

}

let  Printage = function(city){
    console.log(this.name + " from " +city)
}

Printage.call(obj , "delhi"  ) */

/* function Printname(n , a , m){

    this.name = n;
    this.age = a;
    this.mobile = m

}

let p1 = new Printname("sanket", "25", 700000000)

console.log(p1) */

//Encapsulation -- # this.password 

//polymorphism
// abstraction

class A  
  {  
     display ()
    {  
      document.writeln( "A is invoked");  
    }  
  }  

class B extends A  
  {  
  }  
var b = new B();

/* b.display();  */ 

class C extends A
{
    /*  magic()
    {
      
        console.log ( " B is invoked")
        document.writeln("B is invoked")

    } */
}
var c  = new C()
 c.display()
