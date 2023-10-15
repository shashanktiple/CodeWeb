// let a;
// let b;
// let c;
// window.onload = function () {
//   document.getElementById("roll").onclick = function () {
//     a = Math.floor(Math.random() * 6) + 1;
//     b = Math.floor(Math.random() * 6) + 1;
//     c = Math.floor(Math.random() * 6) + 1;

//     document.getElementById("a").innerHTML = a;
//     document.getElementById("b").innerHTML = b;
//     document.getElementById("c").innerHTML = c;
//   };
// };

//----------------
// window.onload = function () {
//   document.getElementById("but").onclick = function () {
//     const aa = document.getElementById("check");
//     if (aa.checked) {
//       console.log("you are subscribed");
//     } else {
//       console.log("you are NOT subscribed");
//     }
//   };
// };
//---------------- if else
// window.onload = function () {
//   document.getElementById("cardbtn").onclick = function () {
//     const x = document.getElementById("visa");
//     const y = document.getElementById("master");
//     const z = document.getElementById("paypal");

//     if (x.checked) {
//       console.log("you selected Visa Card");
//     } else if (y.checked) {
//       console.log("you selected Master Card");
//     } else if (z.checked) {
//       console.log("you selected PayPal");
//     } else {
//       console.log("Please select one option");
//     }
//   };
// };
//---------------- Switch

// let grade = "";
// switch (grade) {
//   case "A":
//     console.log("you did grate");
//     break;
//   case "B":
//     console.log("you did ok");
//     break;
//   default:
//     console.log("do something");
//     break;
// }
// let grade1 = 97;
// switch (true) {
//   case grade1 >= 90:
//     console.log("you did grate");
//     break;
//   case grade1 <= 99:
//     console.log("you did ok");
//     break;
//   default:
//     console.log("do something");
//     break;
//}
//---------------- While

// let username = "";

// while (username == "" || username == null) {
//   username = window.prompt("enter user name");
// }
// console.log("Hello", username);
//---------------- Do While
// let username2;

// do {
//   username2 = window.prompt("enter user name");
// } while (username2 == "" || username2 == null);

// console.log("Hello", username2);
//---------------- FOr

// for (let count = 1; count <= 10; count++) {
//   console.log("--", count);
// }

//---------------- Function -- let variable is limited to block scope
// var variable is limited to function scope

// let area;
// let width;
// let height;

// width = window.prompt("enter width: ");
// height = window.prompt("enter height: ");

// function getArea(a, b) {
//   let result = a * b;
//   return result;xv
// }
// console.log(getArea(width, height));

//---------------- ternary operator

// console.log(checkage(12));

// function checkage(age) {
//   return age > 18 ? true : false;
// }

//--------------template literals
// let a = "sha";
// let b = 49;

// let s = `name is ${a} and money he has is $${b}`;
// console.log(s);
//---document.getElementById("mylabel").innerHTML = s;---error

//--------toLocalString() = returns a string with a language sensative representation
// number.toLocalString(locale,{options});

// let num = 122232.2323;
//num = num.toLocaleString("en-US");
// //num = num.toLocaleString("hi-IN");
// console.log(num);

// let num1 = 12123233.3434;
//num1 = num1.toLocaleString("en-US", { style: "currency", currency: "USD" });
//num1 = num1.toLocaleString("hi-IN", { style: "currency", currency: "INR" });
//num1 = num1.toLocaleString(undefined, { style: "currency", currency: "INR" });
//num1 = num1.toLocaleString(undefined, { style: "unit", unit: "celsius" });
// console.log(num1);

//--------------- Game

// const answer = Math.floor(Math.random() * 10) + 1;
// let guesses = 0;

// window.onload = function () {
//   document.getElementById("btn").onclick = function () {
//     guess = document.getElementById("entnum").value;
//     guesses += 1;

//     if (guess == answer) {
//       alert(`${answer} is the number. It took you ${guesses}`);
//     } else if (guess < answer) alert("Too small");
//     else {
//       alert("Too big");
//     }
//   };
// };
