let count = 0;

function renderUI() {
  const app = document.getElementById('app');

  const container = document.createElement('div');
  container.id = 'counter-container';

  const title = document.createElement('p');
  title.id = 'counter-title';
  title.textContent = 'Counter';

  const valueDisplay = document.createElement('div');
  valueDisplay.id = 'counter-value';

  const controls = document.createElement('div');
  controls.id = 'counter-controls';

  const btnDecrement = document.createElement('button');
  btnDecrement.className = 'counter-btn';
  btnDecrement.textContent = '−';
  btnDecrement.addEventListener('click', () => updateCounter(-1));

  const btnIncrement = document.createElement('button');
  btnIncrement.className = 'counter-btn';
  btnIncrement.textContent = '+';
  btnIncrement.addEventListener('click', () => updateCounter(1));

  const btnReset = document.createElement('button');
  btnReset.id = 'btn-reset';
  btnReset.textContent = 'reset';
  btnReset.addEventListener('click', resetCounter);

  controls.appendChild(btnDecrement);
  controls.appendChild(btnIncrement);

  container.appendChild(title);
  container.appendChild(valueDisplay);
  container.appendChild(controls);
  container.appendChild(btnReset);

  app.appendChild(container);

  displayValue();
}

function updateCounter(delta) {
  count += delta;
  displayValue();
}

function resetCounter() {
  count = 0;
  displayValue();
}

function displayValue() {
  const valueDisplay = document.getElementById('counter-value');
  valueDisplay.textContent = count;
  valueDisplay.classList.toggle('negative', count < 0);
}

renderUI();
