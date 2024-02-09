const container = document.querySelector("#container");

const redP = document.createElement("p");
redP.innerHTML = "Hey I'm red!";
redP.style.color = "red";
container.appendChild(redP);

const blueText = document.createElement("h3");
blueText.innerHTML = "I'm a blue h3";
blueText.style.color = "blue";
container.appendChild(blueText);

const pinkDiv = document.createElement("div");
pinkDiv.style.cssText = "border: 1px solid black; background-color: pink";

const h1Text = document.createElement("h1");
h1Text.innerHTML = "I'm in a div";

const anotherP = document.createElement("p");
anotherP.innerHTML = "ME TOO!";

pinkDiv.appendChild(h1Text);
pinkDiv.appendChild(anotherP);
container.appendChild(pinkDiv);

// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hellow World");

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", (e) => {
//   alert("Hello World");
//   console.log(e);
//   e.target.style.background = "blue";
// });

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    alert(button.id);
  });
});
