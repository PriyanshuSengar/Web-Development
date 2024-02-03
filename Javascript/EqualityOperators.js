const age = 18;
if (age === 18){

    console.log("You are Eligible (strictly)")
}
if (age == 18){

    console.log("You are Eligible .Example of loose")
}
const num =Number( prompt("what is your favorite number="))
console.log(num);
console.log(typeof num);
if (num === 20) {
    console.log("wow! 20. Example of Strict")
}
else if(num === 15){
    console.log("15 is also a good number")
}
else {
    console.log("not a good number")
}
// see the difference detween the strict and loose is that
// loose= In it we can compare the different data types like num==4;
// Strict = But in strict we can only compare the same data types like 4===4;  