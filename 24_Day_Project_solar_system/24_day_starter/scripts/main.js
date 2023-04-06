const getInputBtn = document.querySelector("input");
const getSelect = document.querySelector("select");
const getBtn = document.querySelector("button");

const getMainElement = document.querySelector("main");

const planetGravity = {
  mercury: 0.378,
  venus: 0.907,
  earth: 1,
  moon: 0.166,
  mars: 0.377,
  jupiter: 2.36,
  saturn: 0.916,
  uranus: 0.889,
  neptune: 1.12,
  pluto: 0.071,
};

getBtn.addEventListener("click", () => {
  const planet = getSelect.value;
  const mass = getInputBtn.value;
  const gravity = planetGravity[planet];
  let result;

  // if planet and mass input are exists
  if (gravity && mass) {
    result = (gravity * mass).toFixed(2);
    const descriptionInfo = `
        <div class="flex-container">
            <div class="flex-item image">
                <img src="./images/${planet}.png" class="planet-image" alt="${planet}" />
            </div>
        <div class="flex-item description">
            <div class="inside-description">
                <h2>The weight of the object on ${planet.toUpperCase()}</h2>
                <div class="dummy-planet">
                    <h2>${result}N</h2>
                </div>
            </div>
        </div>
    `;
    getMainElement.innerHTML = "";
    getMainElement.insertAdjacentHTML("afterbegin", descriptionInfo);
  }
});
// `${imagesPath}mercury.png`
