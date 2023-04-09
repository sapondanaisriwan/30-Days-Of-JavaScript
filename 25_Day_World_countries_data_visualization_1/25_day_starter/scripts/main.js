const languages = {};
countries_data.forEach((country) => {
  country.languages.forEach((language) => {
    if (language in languages) {
      languages[language]++;
    } else {
      languages[language] = 1;
    }
  });
});

const sortedLanguages = Object.keys(languages)
  .sort((a, b) => {
    return languages[b] - languages[a];
  })
  .slice(0, 10)
  .reduce((obj, lang) => {
    obj[lang] = languages[lang];
    return obj;
  }, {});

  const capitalPopulationObj = {};

  countries_data.forEach(country => {
    const { capital, population } = country;
    capitalPopulationObj[capital] = population;
  });
  
  const top10CapitalPopulation = Object.entries(capitalPopulationObj)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .reduce((obj, [capital, population]) => {
      obj[capital] = population;
      return obj;
    }, {});
  
  console.log(top10CapitalPopulation);

const getStat = document.querySelector("#stat");
const getLangBtn = document.querySelector(".languages");
const getSubtitle = document.querySelector("main .subtitle");

getLangBtn.addEventListener("click", () => {
  getSubtitle.innerHTML = "10 Most Spoken languages in the world";
  getStat.innerHTML = "";
  for (const [key, value] of Object.entries(sortedLanguages)) {
    const textHTML = `
    <div class="container">
      <div style="width: 100%;" class="container">
        <span>${key}</span>
        <div class="graph-width" style="width: ${value}%"></div>
      </div>
      <span>${value}</span>
    </div>
    `;
    getStat.innerHTML += textHTML;
  }
});
