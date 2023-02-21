//1
const aurora = {
    name: "aurora",
    health: 150,
    strength: 25,
    xp: 0,
    describe() {
        return `${this.name} has ${this.health} health points and ${this.strength} as strength and ${this.xp} xp`; 
    }
};
console.log(aurora.describe());

//2
const Dog = {
    name: "Tim",
    species: "German Shepherd",
    size: "3 foot",
    describe: function(){return `${this.name} belongs to ${this.species} species and its size is ${this.size}`},
    bark: function(){return "Woof!"}
};

console.log(Dog.describe());
console.log(Dog.bark());

//3
const circle = {
    radius: 10,
    circumference: function(){return Number(2*this.radius*Math.PI).toFixed(2)},
    area: function(){return Number(Math.PI*this.radius**2).toFixed(2)}
};

console.log(circle.circumference());
console.log(circle.area());

//4
const account = {
    name: "Alex",
    balance: 0,
    credit: function(number = 5){
        this.balance+=number;
        return this.balance;
    },
    describe: function(){return `Your name is ${this.name} and balance is ${this.balance}`;}
}

account.credit();
console.log(account.describe());
account.credit(-2000);
console.log(account.describe());