//t1
console.log("TASK 1");
let helloMessage = (name, surname) => `Hello, ${name} ${surname}`;

const fName = "test";
const lName = "test2";

console.log(helloMessage(fName, lName));

//t2...
//t3
console.log("TASK 3");
const square = (x) => x*x;

for(let i = 1; i<10; i++) {
    console.log(square(i));
}

//t4
console.log("TASK 4");
const min = (x, y) => x>y ? y:x;
console.log(min(1, 1));

//t5
console.log("TASK 5");
const calculate = (v1, operation, v2) => {
    switch(operation) {
        case "/":
            return v1/v2;
        case "*":
            return v1*v2;
        case "+":
            return v1+v2;
        case "-":
            return v1-v2;
    }
};

console.log(calculate(4, "+", 6));
console.log(calculate(4, "-", 6));
console.log(calculate(2, "*", 0));
console.log(calculate(12, "/", 0));

//t6
const circumference = (radius) => 2*Math.PI*radius;
const area = (radius) => Math.PI*radius**2;

console.log(circumference(2));
console.log(circumference(12));

console.log(area(20));
console.log(area(4));