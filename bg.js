const body = document.querySelector("body");

const IMG_NUMBER = 4;

function show() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

function paintImage(imgNumber) {
  let num = imgNumber;
  console.log(num);
  num += 1;
  num = ".img" + JSON.stringify(num);

  console.log(num);
  const image = document.querySelector(`${num}`);

  console.dir(image);
  image.classList.add("bgImage");

  //img.tabIndex = -1;
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
