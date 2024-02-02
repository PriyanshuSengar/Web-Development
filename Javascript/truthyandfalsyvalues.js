// 5 falsy values are -
//     0, '', undefined, null,Nan;
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('luckey'));
console.log(Boolean({}));
console.log(Boolean(''));
const money = 0;
if (money) {
    console.log("don't spen it all");
}
else {
    console.log("You should get a job");
}
