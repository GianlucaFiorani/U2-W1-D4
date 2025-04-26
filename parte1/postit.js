const postitText = document.getElementById("postitText");
const main = document.querySelector("main");
const form = document.querySelector("form");

const randColor = function () {
  const color = ["palegreen", "palegoldenrod", "plum"];
  const randNum = Math.floor(Math.random() * 3);
  return color[randNum];
};

const randRotation = function () {
  let randNum = Math.floor(Math.random() * 16);
  if (randNum % 2 == 0) {
    randNum = -randNum;
  }
  return randNum;
};

form.onsubmit = function (e) {
  e.preventDefault();
  const box = document.createElement("div");
  const postit = document.createElement("div");
  const h1 = document.createElement("h1");
  box.classList.add("box");
  postit.style.transform = `rotate(${randRotation()}deg)`;
  main.appendChild(box);
  postit.classList.add("postit");
  postit.appendChild(h1);
  postit.classList.add(randColor());
  h1.innerText = postitText.value;
  box.appendChild(postit);
  postitText.value = "";
};
