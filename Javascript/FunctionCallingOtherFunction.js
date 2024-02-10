function cutfruitpiece(fruit) {
    return fruit * 4;
}
function fruitprocessor(apples, oranges) {
    const applejuice = cutfruitpiece(apples);
    const orangejuice = cutfruitpiece(oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
console.log(fruitprocessor(2, 5));