const luckey = {
    firstname: 'luckey',
    lastname: 'sengar',
    age: 2024 - 2003,
    jon: 'teacher',friends : ['luckey', 'rupa', 'shivam']
}
// console.log(luckey);
// console.log(luckey.lastname);
// console.log(luckey['age']);
const sengar = 'name';
console.log(luckey['first' + sengar]);
console.log(luckey['last' + sengar]);
const intrested = prompt('in which thing you are interested in luckey?')
console.log(intrested);
luckey.home = 'sasni';
luckey['car'] = 'legender';
console.log(luckey);
// challenge
const friends = ['luckey', 'rupa', 'shivam'];
console.log(`${luckey.firstname} has ${luckey.friends.length} friends but his best friend is ${friends[1]} `);