const friend1 = 'luckey';
const friend2 = 'Priyanshu';
const friend3 = 'Sengar';
const friends = ['luckey', 'sengar', 'priyanshu'];
console.log(friends);
const years = new Array(1951, 1985, 1975, 1952);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = 'singh';
console.log(friends);
const lastname = 'sengar';
const age = '20';
const sengar = ['Luckey', lastname, age, 2024 - 2003];
console.log(sengar);
const calage = function (birthyear) {
    return 2037 - birthyear;
}
const year = [1990, 1967, 1965, 1963];

const age1 = calage(years[0]);
const age2 = calage(years[1]);
const age3 = calage(years[years.length - 1]);
console.log(age1, age2, age3);
const ages = [calage(years[0]), calage(years[1]), calage(years[years.length - 1])];
console.log(ages);
