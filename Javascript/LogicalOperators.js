const hasdriivinglisence = true;
const hasgoodvision = false;
console.log(hasdriivinglisence && hasgoodvision);
console.log(hasdriivinglisence || hasgoodvision);
console.log(!hasdriivinglisence);
if(hasdriivinglisence && hasgoodvision){
    console.log("true")
}
else{
    console.log("false")
}
if(hasdriivinglisence || hasgoodvision){
    console.log("eligible")
}
else{
    console.log("not eligible")
}