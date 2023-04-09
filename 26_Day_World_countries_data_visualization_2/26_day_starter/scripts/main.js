const containerElement = document.querySelector(".container");
const inputElement = document.querySelector("input");

const getSortBtn = document.querySelector(".sort-word");

const groupBtn = document.querySelector("#btn-group");

let [startWordBtn, anyWordBtn] = [false, false];

let previous;
groupBtn.addEventListener("click", (event) => {
  const target = event.target;
  const closestBtn = target.closest("button");

  if (!closestBtn) {
    return console.log("Not a button");
  }

  if (previous === closestBtn) {
    [startWordBtn, anyWordBtn] = [false, false]
    previous.setAttribute("aria-pressed", "false");
    return previous = null;
  }

  if (closestBtn.classList.contains("starting-word")) {
    [startWordBtn, anyWordBtn] = [true, false];
  }
  if (closestBtn.classList.contains("any-word")) {
    [startWordBtn, anyWordBtn] = [false, true];
  }

  if (previous) {
    previous.setAttribute("aria-pressed", "false");
  }

  // if (previous === closestBtn) {
  //   previous.setAttribute("aria-pressed", "false");
  //   return previous = null;
  // }
  closestBtn.setAttribute(
    "aria-pressed",
    closestBtn.getAttribute("aria-pressed") === "false" ? "true" : "false"
  );

  previous = closestBtn;
});

countries.forEach((country) => {
  const boxHTML = `
        <div class="box">
          <h1>${country}</h1>
        </div>
      `;
  containerElement.innerHTML += boxHTML;
});

const countryName = document.querySelectorAll(".container h1");

inputElement.addEventListener("input", (event) => {
  const inputTarget = event.target.value.toLowerCase();

  countryName.forEach((eachCountry) => {
    const countryParent = eachCountry.parentElement;
    const countryText = eachCountry.textContent.toLowerCase();

    // Reset
    // countryParent.classList.contains("hidden") && countryParent.classList.toggle("hidden");
    if (countryParent.classList.contains("hidden")) {
      countryParent.classList.toggle("hidden");
    }

    if (!inputTarget) {
      return console.log("Empty");
    }

    if (startWordBtn && !countryText.startsWith(inputTarget)) {
      countryParent.classList.toggle("hidden");
    }

    if (anyWordBtn && !countryText.includes(inputTarget)) {
      countryParent.classList.toggle("hidden");
    }
  });
});

let ascendingOrder = true;

getSortBtn.addEventListener("click", () => {
  const container = document.querySelector(".container");
  const boxes = container.querySelectorAll(".box");
  const h1s = Array.from(boxes, (box) => box.querySelector("h1"));
  console.log(h1s);

  if (ascendingOrder) {
    h1s.sort((a, b) => a.textContent.localeCompare(b.textContent)).reverse();
    ascendingOrder = false;
  } else {
    h1s.sort((a, b) => a.textContent.localeCompare(b.textContent)).sort();
    ascendingOrder = true;
  }

  for (let h1 of h1s) {
    const box = h1.closest(".box");
    container.appendChild(box);
  }
});