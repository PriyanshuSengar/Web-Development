console.log("this is a function tutorial");
let Name= "luckey";
let Name1= "tarun";
let Name2= "simran";
let Name3= "shibbu";
let greetfunction="Good morning";
// console.log(Name    +    " is a good boy")
// console.log(Name1   +    " is a good boy")
// console.log(Name2    +    " is a good boy")
// console.log(Name3   +    " is a good boy")
function greet(Name , greetfunction="hello"){
    console.log(Name   +    " is a good boy");
    console.log(greetfunction   +    " everyone");
}
greet(Name , greetfunction);
greet(Name1 , greetfunction);
greet(Name2 , greetfunction);
greet(greetfunction);
function sum(a,b,c){
    d=a+b+c;
    return d; 
    // if anything is written after the return statement then it will not be executed at all
}
let returnval=sum(1,2,3);
console.log(returnval);
