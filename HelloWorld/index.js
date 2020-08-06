alert("Im working. Im JS. Im Beautiful. Im worth it");
console.log("Im working. Im JS. Im Beautiful. Im worth it");

let a = 221;
let b = a - 5;
console.log(b, a);
// JS variable

const c = 221;
let d = c - 5;
// c = 4;
console.log(d, c);
// const

const what = "Text";
console.log(what);
// Data type(string)

const wha = true;
// Data type(boolean)

const wh = 666;
// Data type(number)

const w = 55.1;
// Data type(float)

const something = "Something";
const daysOfWeek = [
    "MOn",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
    true,
    something,
    54,
];
console.log(daysOfWeek);
console.log(daysOfWeek[0]);
// Array

const devInfo = {
    name: "dev",
    age: 24,
    gender: "Male",
    isHandsome: true,
    favMovie: ["LOTR", "Parasite", "Oldboy", "District9"],
    favFood: [
        { name: "Kimchi", fatty: false },
        { name: "cheese burger", fatty: true },
    ],
};
console.log(devInfo.gender);
devInfo.gender = "Female";
console.log(devInfo.gender);
console.log(devInfo);
console.log(devInfo.favFood[1].fatty);
console.log(console);
// Object

function sayHello(name, age) {
    return `Hello ${name} you are ${age} years old.`;
}
const greetPretzel = sayHello("Pretzel", 24);
console.log(greetPretzel);

const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        return a / b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    powerOf: function (a, b) {
        return a ** b;
    },
};
console.log(calculator.plus(5, 5));
console.log(calculator.minus(5, 5));
console.log(calculator.divide(5, 5));
console.log(calculator.multiply(5, 5));
console.log(calculator.powerOf(5, 5));
//function

const age = prompt("How old are you");
if (age >= 18 && age <= 21) {
    console.log("you can drink but you should not");
} else if (age > 21) {
    console.log("go ahed");
} else {
    console.log("too young");
}
//if else and or
