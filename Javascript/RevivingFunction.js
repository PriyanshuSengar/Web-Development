const calcaage = function (year) {
    return 2037 - year;
}
const yearuntilretirement = function (birthyeah, firstname) {
    const age = calcaage(birthyeah);
    const retirement = 65 - age;
    return `${firstname} retires in ${retirement} years`;
}
yearuntilretirement(1991, 'luckey');