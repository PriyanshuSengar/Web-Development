const array = ['luckey', 'naveen', 'ankit'];
array.push('nicku');
console.log(array);
console.log(array.length);
array.unshift('nicku');
// unshift is used to put the Element at the starting of the array
console.log(array);
array.pop();
const poped = array.pop();
console.log(poped);
array.shift();
console.log(array);
console.log(array.includes('luckey'));
console.log(array.includes('raju'));
if (array.includes('luckey')) {
    console.log("present");
}