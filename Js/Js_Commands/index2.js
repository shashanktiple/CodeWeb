// let fruit = ["apple", "orange", "pinapple"];
//fruit.push("banana");
//fruit.push("jackfruit");
//fruit.pop();
//fruit.unshift("kiwi");
//fruit.shift();
// console.log(fruit);

//------ split operator
// let num = [1, 2, 3, 4, 5, 6];
// let maxi = Math.max(...num); --
// console.log(maxi);

// let ch = ["sha", "mon", "tip"];
// let cha = ["gaya", "arm", "cha"];
// ch.push(...cha);
// console.log(ch);

//---- Rest Parameter

// console.log(sum(2, 3, 4, 5)); //-- indefinite number of parameter can be passed

// function sum(...num) {
//   let total = 0;
//   for (let i of num) {
//     // can also be written as (let i in num){ total +=num[i]}
//     total += i;
//   }
//   return total;
// }

//-------Learn methods mmap / filter / reduce *******************

//------------- functions
// const greeting = function (i) {
//   console.log(`shashank ${i}`);
// };
// greeting("Tiple");

// const greeting2 = (i) => {       //------- arrow key function ****
//   console.log(`shashank ${i}`);
// };
// greeting2("---");

//------------- OBJECT
// MAP object
// const s = new Map([
//   ["s", 2],
//   ["r", 5],
//   ["g", 9],
// ]);
// console.log(s.get("s"));
// s.forEach((value, key) => console.log(`${key}, ${value}`));

// s.set("d", 4);
// s.set("h", 7);
// s.delete("r");
// console.log("do we have g in array: " + s.has("g"));
// console.log("size of the array is " + s.size);

//----------------------------- Create OBJECTS

// const car1 = {
//   model: "Mustang", //----properties
//   color: "red",
//   year: 1993,

//   drive: function () {
//     //---- Functions
//     console.log(`This is a ${this.model} drive`);
//   },

//   brake: function () {
//     console.log("This is a Mustang brake function");
//   },
// };
//-------
// const car2 = {
//   model: "Corvet", //---- Properties
//   color: "white",
//   year: 2020,

//   drive: function () {
//     //---- Functions
//     console.log(`This is a ${this.model} drive`);
//   },

//   brake: function () {
//     console.log("This is a Corvet brake function");
//   },
// };

// car1.drive();
// car2.drive();

//--------------- Class

// class player {
//   score = 0;

//   push() { //-------- Method
//     console.log("you pause the game");
//   }
//   exit() {
//     console.log("you exited the game");
//   }
// }

// const player1 = new player();
// console.log(player1.score);
// player1.score += 1;
// console.log(player1.score);
// player1.exit();

//------------------- Class with constructor

// class Student {
//   constructor(name, age, gpa) {
//     this.name = name;
//     this.age = age;
//     this.gpa = gpa;
//   }

//   study() {
//     console.log(`${this.name} is studying`);
//   }
// }

// const stud = new Student("Shashank", 30, 3.75);

// console.log(stud.age);
// stud.study();
// stud.age;

//------------------- Static

// class car {
//   static numberOfCar = 0;
//   constructor(model) {
//     this.model = model;
//     car.numberOfCar += 1;
//   }
//   static startRace() {
//     console.log("3..2..1..Go");
//   }
// }

// const car1 = new car("Mustang");
// const car2 = new car("Corvette");
// const car3 = new car("BMW");

// car.startRace();
// console.log(car.numberOfCar);

//------------------- Inheritance

// class Animal {
//   alive = true;
//   eat() {
//     console.log(`this ${this.name} is eating`);
//   }
//   sleep() {
//     console.log(`this ${this.name} is sleeping`);
//   }
// }
// //--------

// class Rabbit extends Animal {
//   name = "rabbit";
//   run() {
//     console.log(`this ${this.name} is running`);
//   }
// }

// class Fish extends Animal {
//   name = "fish";

//   swim() {
//     console.log(`this ${this.name} is swimming`);
//   }
// }

// class Hawk extends Animal {
//   name = "hawk";

//   fly() {
//     console.log(`this ${this.name} is flying`);
//   }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// rabbit.eat();
// rabbit.run();
// rabbit.sleep();
// console.log(rabbit.alive);

//------------------- Super

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }
// }
// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }
// }
// class Hawk extends Animal {
//   constructor(name, age, flySpeed) {
//     super(name, age);
//     this.flySpeed = flySpeed;
//   }
// }

// const rabbit = new Rabbit("rabbit", 3, 30);
// const fish = new Fish("fish", 6, 10);
// const hawk = new Hawk("hawk", 4, 50);

// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runSpeed);

//------------------- Getter & Setter

// class car {
//   constructor(power) {
//     this._gas = 30;
//     this._power = power;
//   }
//   get getpower() {
//     return `${this._power}hp`;
//   }
//   get getgas() {
//     return `${this._gas}L (${(this._gas / 50) * 100}%)`;
//   }

//   set setgas(value) {
//     if (value > 50) {
//       value = 50;
//     } else if (value < 0) {
//       value = 0;
//     }
//     this._gas = value;
//   }
// }

// const c = new car(400);
// console.log(c.getpower);
// console.log(c.getgas);

// c.setgas = -20;
// console.log(c.getgas);

//------------------- Pass object to an function as an argument

// class car {
//   constructor(model, year, color) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }
// }

// const car1 = new car("Mustang", 1993, "Red");

// changeColor(car1, "gold");
// displayInfo(car1);

// function displayInfo(car) {
//   console.log(car.model);
//   console.log(car.year);
//   console.log(car.color);
// }
// function changeColor(car, color) {
//   car.color = color;
// }

//------------------- Error

// try {
//   let x = window.prompt("enter a number");
//   x = Number(x);
//   if (isNaN(x)) throw "Not a Number";
//   if (x == "") throw "that was empty";

//   console.log(`${x} is a number`);
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("this always execute");
// }
//-------------------- Set Timer

// let i = "crypto";
// let j = 1233;

// let t1 = setTimeout(f1, 3000, i, j);
// let t2 = setTimeout(f2, 6000);
// let t3 = setTimeout(f3, 15000);

// function f1(item, amount) {
//   alert(`1st Function: Buy ${item} for $${amount}`);
// }
// function f2() {
//   alert("2st Function");
// }
// function f3() {
//   alert("3st Function");
// }
// window.onload = function () {
//   document.getElementById("btn").onclick = function () {
//     clearTimeout(t1);
//     clearTimeout(t2);
//     clearTimeout(t3);
//     alert(`thanks for clicking`);
//   };
// };
//-------------------- Set Intervel
// let count = 0;

// let max = window.prompt("Give a number");
// max = Number(max);

// let int = setInterval(countUp, 1000);

// function countUp() {
//   count += 1;
//   console.log(count);
//   if (count >= max) {
//     clearInterval(int);
//   }
// }
//-------------------- Date Object

//let date1 = new Date();
// let date2 = new Date(2023, 0, 1, 2, 3);
// let date3 = new Date("january 1, 2023 00:00:00");
// date11 = date1.toLocaleString();
// let year = date1.getFullYear();
// let day = date1.getDate();
// //--
// setdate = date1.setDate(31);
// setdate = date1.setMonth(12);

// let date = new Date();
// window.onload = function () {
//   document.getElementById("dateLabel").innerHTML = formatDate(date);
// };

// function formatDate(date) {
//   let year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   let day = date.getDate();
//   return `${month}/ ${day}/ ${year}`;
// }
