const mainElement = document.querySelector('main');
const formInputElement = document.querySelector('#form-input');
const template = document.querySelector('template');

const firstNameElement = document.querySelector('#first-name'),
  lastNameElement = document.querySelector('#last-name'),
  countryElement = document.querySelector('#country'),
  playerScore = document.querySelector('#player-score');

const addPlayerBtn = document.querySelector('#add-player');

function test(container, score) {
  const target = event.target;
  const isButton = target.closest('button');

  if (!isButton) return console.log('Not a button');

  if (isButton.id === 'remove') {
    container.remove();
  } else if (isButton.id === 'add-score') {
    score.textContent = `${+score.textContent + 5}`;
  } else {
    score.textContent = `${+score.textContent - 5}`;
  }
}

function createContainer() {
  event.preventDefault();

  const container = template.content.firstElementChild.cloneNode(true);
  const fullName = container.querySelector('#user-info h3');
  const dateField = container.querySelector('#user-info p');
  const country = container.querySelector('#country');
  const score = container.querySelector('#score');
  const tool = container.querySelector('#tool');

  fullName.textContent = `${firstNameElement.value} ${lastNameElement.value}`;
  dateField.textContent = new Date().toUTCString();
  country.textContent = countryElement.value;
  score.textContent = playerScore.value;

  tool.addEventListener('click', test.bind(null, container, score));
  mainElement.append(container);
}

formInputElement.addEventListener('submit', createContainer);
