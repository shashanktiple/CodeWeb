console.log("HelloHello");
//VARIABLES
let a = 10;
let name = "shashank";
let boolean = false;
const pi = 3.14;
let num;
console.log(a, pi);
console.log(name);
console.log(boolean);
console.log(num);

//ARRAY
let arr = [1, 2, 8, 4];
console.log(arr);
console.log(arr.sort());
arr.push(10);
console.log(arr);

let b = [1, "sha", "tip", 47];
console.log(b);

//OBJECT
let c = {
  type: "alphabet",
  color: "blue",
  count: 4,
  uses: ["writing", "poking", "sketching"],
};
console.log(c.uses[0]);

//FUNCTION
function d() {
  console.log("Hello FUnction");
}
d();

function exp(a, b) {
  return a * b;
}
console.log(exp(2, 5));

//IF ELSE Statement
let ar = [1, 3, 2, 6, 65, 2];
if (ar[1] == ar[4]) {
  console.log("correct");
} else {
  console.log("not correct");
}

if (ar[1] == ar[3] || ar[2] == ar[5]) {
  console.log("one is correct");
} else {
  console.log("both are wrong");
}
console.log("-------------------------\n");

//LOOP

let i = 0;
// while (i < 5) {
//   console.log("the value of i=" + i);
//   i++;
// }

// do {
//   console.log("do this before while " + i);
//   i++;
// } while (i > 5);

// for (let j = 0; j < 5; j++) {
//   console.log("For loop number = " + j);
// }

switch (i) {
  case 0:
    console.log("found 0");
    break;
  case 1:
    console.log("found 1");
  case 2:
    console.log("found 2");
  default:
    console.log("This is a default statement");
    break;
}
console.log("-------------------------\n");

switch ((i = 1)) {
  case 0:
    console.log("found 0");
    break;
  case 1:
    console.log("found 1");

  case 2:
    console.log("found 2");

  default:
    console.log("This is a default statement");
    break;
}
