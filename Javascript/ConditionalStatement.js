const age = 20;
// age >= 18 ? console.log('you can drink wine'):console.log('I like to drink water');
//  ternary operarator is denoted ?
const drink = age >= 18 ? ('water 💧') : ('wine 🍾')
console.log(drink);
let drink2;
if (age >= 18) {
    drink2 = 'wine ';
}
else {
    drink2 = 'water';
}
console.log(drink2);
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)
