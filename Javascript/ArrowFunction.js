const calage1 = birthYeah => 2037 - birthYeah;
const age = calage1(1991);
console.log(age);
const yearUntilRetirement = (birthYeah, firstname)=> {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    return `${firstname} retires in ${retirement} years`;
}
console.log(yeaRuntilretiRement(1991, 'luckey'));
console.log(yeaRuntilretiRement(1995, 'sengar'));