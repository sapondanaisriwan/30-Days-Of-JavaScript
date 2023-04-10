const getSpanElement = document.querySelector("span");
const words = {"CSS": "#264de4", "HTML": "#e34c26", 'JS': "#F0DB4F", 'NODE': "green"}
const wordsKey = Object.keys(words);

function changeText(word) {
  getSpanElement.style["font-size"] = "50px";
  getSpanElement.style.color = words[word];
  getSpanElement.textContent = word;
}

function randomWord() {
  return wordsKey[Math.floor((Math.random() * wordsKey.length))]
}

function run() {
  const word = randomWord();
  changeText(word);
}

setInterval(run, 500);