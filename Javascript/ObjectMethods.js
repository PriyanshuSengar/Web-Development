const luckey = {
    firstname: 'luckey',
    lastname: 'sengar',
    age: 2024 - 2003,
    job: 'teacher',
    drive: true,
    birthyear: 2023,
    // calcage: function () {
    //     console.log(this);
    //     return 2037 - this.birthyear
    // },
    calcage1: function () {
        this.age = 2037 - this.birthyear;
        return this.age;
    },
    getsummary: function () {
        return `${this.firstname} is a ${this.calcage1()} year old ${luckey.job},and  he has ${this.drive ? 'a' : 'no'} licence`
    }
}
console.log(luckey.calcage1());
console.log(luckey.age);
// console.log(luckey['calcage'](1920));
// function of this is to  references the object that is executing the current function
console.log(luckey.getsummary());