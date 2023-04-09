const containerElement = document.querySelector(".container");
const inputValue = document.querySelector("input").value;
const startWordBtn = document.querySelector(".starting-word");
const anyWordBtn = document.querySelector(".any-word");
const sortBtn = document.querySelector(".sort-word");


countries.forEach((country) => {
  const boxHTML = `
    <div class="box">
      <h1>${country}</h1>
    </div>
  `;
  containerElement.innerHTML += boxHTML;
});
