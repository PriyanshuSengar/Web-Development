function calAge1(BirthYeah) {
    const age = 2035 - BirthYeah;
    return age;
}
const age1 = calAge1(1358);
// console.log(age);
const calAge2 = function (BirthYeah) {
    return 2037 - BirthYeah;
}

const age2 = calAge2(1597);
console.log(age1);
console.log(age1, age2);
// Main Difference Between the Function Deceleration and Function Expression 
// we can call the function before  declaration but in expression it should be called after the the function deceleration. 