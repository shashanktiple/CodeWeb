//-------------------- Promise() -------------- Not done

// const promise = new Promise((resolve, reject) => {
//   let fileLoad = false;

//   if (fileLoad) {
//     resolve("file loaded");
//   } else {
//     reject("file not loaded");
//   }
// });

// promise
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

//-------------------- async function --------------Not done
//-------------------- await keyword --------------Not done

//------- Importing code from index33.js ------ METHOD 1

// import { PI, getArea, getCircumference } from "./index33.js";
// console.log(PI);

// let cir = getCircumference(5);
// console.log(cir);
// let are = getArea(5);
// console.log(are);
// console.log("------------");

// //----- Importing code from index33.js ------ METHOD 2
// import * as index33 from "./index33.js";
// console.log(index33.PI);

// let cir1 = index33.getCircumference(5);
// console.log(cir1);
// let are1 = index33.getArea(5);
// console.log(are1);

//----------------------------- DOM command
// console.log(document);
// console.dir(document);

// console.log(document.body);
// console.log(document.title);
// document.title = "New Title";
// console.log(document.URL);

// document.body.style.backgroundColor = "skyblue";

// document.getElementById("mydiv").innerHTML = "Hello Div";

//-----------------------------

// let element = document.getElementById("mytitle");
// element.style.backgroundColor = "lightgreen";

/*
let fruits = document.getElementsByName("fruits"); //getElementsByName
console.log(fruits[0]);
fruits.forEach((fruit) => {
  if (fruit.checked) {
    console.log(fruit.value);
  }
});
*/

/*
let vegetables = document.getElementsByTagName("li"); ////getElementsByTagName
vegetables[0].style.backgroundColor = "lightgreen"; 
*/
/*
let deserts = document.getElementsByClassName("deserts");
deserts[2].style.backgroundColor = "lightgreen";
*/
/*
let element = document.querySelector("#mytitle");
element.style.backgroundColor = "pink";

let element1 = document.querySelector(".deserts");
element1.style.backgroundColor = "pink";

let element2 = document.querySelectorAll("li");
element2.forEach((a) => {
  a.style.backgroundColor = "yellow";
});
*/

//----------------------------- elements relationship
/*
let element = document.body;
let child = element.firstElementChild;
child.style.backgroundColor = "lightgreen";

let element1 = document.querySelector("#vegetables");
let parent = element1.nextElementSibling;
parent.style.backgroundColor = "lightgreen";

//.firstElementChild
//.lastElementChild
//.parentElement
//.nextElementSibling
//.previousElementSibling
//.children[]
//Arr.for(.child)
*/
//----------------------------- Create elements
// add/change HTML elements
//.innerHTML
//.textContent -- most prefered
/*
const nameTag = document.createElement("h1");
nameTag.innerHTML = "Hello bro";
document.body.append(nameTag);

const nameTag1 = document.createElement("h1");
nameTag1.textContent = window.prompt("Enter your name");
document.body.append(nameTag1);
*/
/*
const m = document.getElementById("fruits");
const m1 = document.createElement("li");
m1.textContent = "pinapple";
m.append(m1);
//m.prepend(m1);
*/
//----------------------------- changing CSS properties
// const title = document.getElementById("myh2");
// title.style.backgroundColor = "lightblue";
// title.style.color = "darkblue";
// title.style.fontFamily = "cursive";
// title.style.textAlign = "center";
// title.style.border = "2px solid";
// title.style.display = "block";

//----------------------------- Event
/*
const element = document.getElementById("mybutton");
element.onclick = doSomething; //--- onclick event

const load = document.body;
load.onload = doSomething; //-- onchange event

const element = document.getElementById("mydiv");
element.onmouseover = doSomething;
element.onmouseout = doSomethingelse;
function doSomething() {
  //element = alert("you did something");
  element.style.backgroundColor = "red";
}
function doSomethingelse() {
  //element = alert("you did something");
  element.style.backgroundColor = "green";
}
*/
//----------------------------- addEventListeners()
/*
const innerdiv = document.getElementById("innerdiv");
const outerediv = document.getElementById("outerdiv");

// innerdiv.addEventListener("mouseover", changered);
// innerdiv.addEventListener("mouseout", changegreen);

innerdiv.addEventListener("click", changeblue);
outerediv.addEventListener("click", changeblue, true);
function changeblue() {
  this.style.backgroundColor = "lightblue";
}

function changered() {
  innerdiv.style.backgroundColor = "red";
}
function changegreen() {
  innerdiv.style.backgroundColor = "green";
}
*/
//----------------------------- addEventListener to read the keypress
/*
const mydiv = document.getElementById("mydiv");
window.addEventListener("keydown", move); //---event attribute keydown
let x = 0;
let y = 0;
function move(event) {
  switch (event.key) {
    case "ArrowDown":
      y += 5;
      mydiv.style.top = y + "px";
      break;
    case "ArrowUp":
      y -= 5;
      mydiv.style.top = y + "px";
      break;
    case "ArrowDown":
      y += 5;
      mydiv.style.top = y + "px";
      break;
    case "ArrowRight":
      x += 5;
      mydiv.style.left = x + "px";
      break;
    case "ArrowLeft":
      x -= 5;
      mydiv.style.left = x + "px";
      break;
  }
}
*/
//----------------------------- Animation

// const mybutton = document.getElementById("mybutton");
// const mydiv = document.getElementById("mydiv");

// mybutton.addEventListener("click", begin);
// function begin() {
//   let timerId = null;
//   let x = 0;
//   let y = 0;
//   let degree = 0;

//   timerId = setInterval(frame, 5);

//   function frame() {
//     if (x >= 200 || y >= 200) {
//       clearInterval(timerId);
//     } else {
//       degree += 5;
//       x += 1;
//       y += 1;
//       mydiv.style.transform = "rotateZ(" + degree + "deg)";
//       mydiv.style.left = x + "px";
//       mydiv.style.top = y + "px";
//     }
//   }
// }
