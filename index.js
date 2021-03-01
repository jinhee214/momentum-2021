/*alert("Im Working. Im JS");
let a = 221;
let b = a - 5;
console.log(b);
const c = 54;
const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const daysOfWeek = [monday, tue];

const schedul = {
  Mon: "work1",
  Tue: "heavy work",
  Wed: [
    {
      todo1: "working",
      todo2: true,
    },
    {
      todo1: "birthday",
      todo2: false,
    },
  ],
};
console.log(schedul.Wed);

function sayHello(potato) {
  console.log(`hello!! ${potato}`);
}

const greetsb = sayHello("jinhee");
console.log(greetsb);

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
};
const plus = calculator.plus(5, 5);
const minus = calculator.minus(10, 8);
console.log(plus);
console.log(minus);

const title1 = document.getElementById("title");
document.getElementsByClassName(".title");
console.log(title1);

title1.innerHTML = "This is Test";
console.log(title1);
title1.style.color = "black";
console.dir(title1);
function handleClick() {
  if (title1.style.color === "red") {
    title1.style.color = "blue";
  } else {
    title1.style.color = "red";
  }
}
window.addEventListener("resize", handleResize);
title1.addEventListener("click", handleClick);
document.getElementById("title");
document.querySelector("div>span");

if ("jinhee" === "jijiji") {
  console.log("Hi");
} else {
  console.log("ho");
}

function handleClick() {
  const currentColor = title1.style.color;
  console.log(currentColor);
}
function init() {
  title1.style.color = BASE_COLOR;
  title1.addEventListener("click", handleClick);
}
init(); */
const title1 = document.querySelector("#title");
console.log(title1);

const CLICKED_CLASS = "clicked";

/*function handleClick() {
  const hasclass = title1.classList.contains(CLICKED_CLASS);
  if (!hasclass) {
    title1.classList.add(CLICKED_CLASS);
  } else {
    title1.classList.remove(CLICKED_CLASS);
  }
}*/
function handleClick() {
  title1.classList.toggle(CLICKED_CLASS);
}

function init() {
  title1.addEventListener("click", handleClick);
}
init();
