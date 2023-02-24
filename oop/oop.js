//1
class Dog {
    constructor(name, species, size) {
        this.name = name;
        this.species = species;
        this.size = size;
    }
    bark() {
        if(this.size > 60) return "Grrr! Grrr!";
        return "Woof! Woof!";
    }
}
let dog1 = new Dog("Dog1", "Dog1", 70);
let dog2 = new Dog("Dog2", "Dog2", 40);
console.log(dog1.bark());
console.log(dog2.bark());

//2
class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0; // XP is always zero for new characters
      this.inventory = [10, 1];
    }
    // Attack a target
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength;
        console.log(
          `${this.name} attacks ${target.name} and causes ${damage} damage points`
        );
        target.health -= damage;
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`);
        } else {
          target.health = 0;
          const bonusXP = 10;
          const targetGold = target.inventory[0];
          const targetKeys = target.inventory[1];
          console.log(
            `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${targetGold} gold and ${targetKeys} keys`
          );
          this.xp += bonusXP;
          this.inventory[0] += targetGold;
          this.inventory[1] += targetKeys;
        }
      } else {
        console.log(`${this.name} can't attack (they've been eliminated)`);
      }
    }
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength, ${this.xp} XP points, ${this.inventory[0]} gold and ${this.inventory[1]} keys`;
    }
}

let hero = new Character("Hero", 100, 30);
let boss = new Character("Boss", 60, 10);
console.log(hero.describe());
console.log(boss.describe());
hero.attack(boss);
boss.attack(hero);
hero.attack(boss);
console.log(hero.describe());

//3
console.log("TASK3-------")
class Account {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }
    credit = (value) => this.balance += value;
    describe = () => "Name: " + this.name + "\nBalance: " + this.balance;
}

let bankAccount = new Account("Name");
bankAccount.credit(100);
console.log(bankAccount.describe());