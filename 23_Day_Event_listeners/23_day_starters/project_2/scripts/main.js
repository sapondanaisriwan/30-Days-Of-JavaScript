const bodyElement = document.querySelector("body");
const h1Element = document.querySelector("h1");
const h2Element = document.querySelector("h2");
const showTextElement = document.querySelector(".show-text");

const createH1 = document.createElement("h1");

bodyElement.addEventListener("keydown", (event) => {
  //   console.log(event);
  h1Element.textContent = `You pressed `;

  createH1.textContent = `"${event.key}"`;
  showTextElement.appendChild(createH1);

  h2Element.textContent = event.keyCode;
});
