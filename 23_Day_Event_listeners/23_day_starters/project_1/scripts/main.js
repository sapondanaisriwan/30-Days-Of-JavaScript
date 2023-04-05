const headerElement = document.querySelector("#header");
const getWrapperElement = document.querySelector(".wrapper");

const ul = document.createElement("ul");

const container = `
<div class="container">
    <input type="number" placeholder="Generate more numbers" value="100" required>
    <button>Generate</button>
</div>
`;
headerElement.insertAdjacentHTML("afterend", container);

const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const multipleLi = (nums) => {
  for (let num = 0; num <= nums; num++) {
    const li = document.createElement("li");
    li.textContent = num;

    if (num === 0) {
      li.style.backgroundColor = "#21bf73";
    }
    if (num === 1) {
      li.style.backgroundColor = "#fddb3a";
    }

    if (num >= 2) {
      isPrime(num)
        ? (li.style.backgroundColor = "#fd5e53")
        : (li.style.backgroundColor = "#21bf73");
    }

    ul.appendChild(li);
  }
};

getWrapperElement.appendChild(ul);
multipleLi(inputElement.value);
buttonElement.addEventListener("click", () => {
  ul.innerHTML = "";
  multipleLi(inputElement.value);
});
