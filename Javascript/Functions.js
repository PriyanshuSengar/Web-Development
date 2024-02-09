function logger() {
    console.log('my name is luckey')

}
// calling / running/invoking the function
logger();
logger();
logger();
function FruitProcessor(apple, orange) {
    // console.log(apple, orange);
    const juice = `Juice with ${apple} apples and ${orange} orange.`;
    return juice;
}
FruitProcessor(5,0);
const applejuice = FruitProcessor(5, 7);
console.log(applejuice);
// console.log(FruitProcessor(5, 0));
const fruit = FruitProcessor(8, 5);
console.log(applejuice);
const num = Number('21');
console.log(typeof num);