let createContainer = "";
const wrapper = document.querySelector(".wrapper");

for (let i = 0; i <= 101; i++) {
  createContainer += `
    <div class="container">
        <span>${i}</span>
    </div>
    `;
}
wrapper.innerHTML = createContainer;

const containerElement = document.querySelectorAll(".container");

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

for (let i = 0; i < containerElement.length; i++) {
  // even
  if (i % 2 === 0) {
    containerElement[i].style.backgroundColor = "#21bf73";
  }
  if (i % 2 !== 0) {
    containerElement[i].style.backgroundColor = "#fddb3a";
  }
  if (isPrime(i)) {
    containerElement[i].style.backgroundColor = "#fd5e53";
  }
}

const injectCSS = (css) => {
  const style = document.createElement("style");
  style.type = "text/css";
  style.textContent = css;
  document.documentElement.appendChild(style);
};

injectCSS(`
    body {
        background-color: black;
        color: white;
    }
    #title {
        text-align: center;
    }
    
    * {
        min-width: 0;
    }

    .wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 16px;
        justify-items: center;
    }

    .container {
        width: 100%;
        height: 220px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    span {
        font-size: 80px;
    }

    h2,
    h3 {
        text-decoration: underline;
    }
`);
