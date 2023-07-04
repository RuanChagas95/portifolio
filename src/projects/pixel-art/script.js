// colorPalette
let mouseDown = false;
const colorPaletteHtml = document.querySelector('#color-palette');
const pixelBoardHtml = document.querySelector('#pixel-board');
let colorPalette = [];
let rows = [];
let boardSize = 5;
function saveBoard(newBoardSize = boardSize) {
  const rowsColors = rows.map((row) =>
    row.map((pixel) =>
      pixel.style.backgroundColor));
  localStorage.setItem('pixelBoard', JSON.stringify(rowsColors));
  localStorage.setItem('boardSize', JSON.stringify(newBoardSize));
  boardSize = newBoardSize;
}
function pixelClick(event) {
  if (mouseDown) {
    const selected = document.querySelector('.selected');
    const color = selected.style.backgroundColor;
    const pixel = event.target;
    pixel.style.backgroundColor = color;
    saveBoard();
  }
}
function updateMouseDown(event) {
  mouseDown = event.type === 'mousedown';
  if (mouseDown) {
    pixelClick(event);
  }
}
function selectColor(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `rgb(${r},${g},${b})`;
  if (colorPalette.includes(color) || color === `rgb(${255},${255},${255}`) {
    return getRandomColor();
  }
  colorPalette.push(color);
  return `rgb(${r},${g},${b})`;
}
function createNewBtnColor() {
  const btnColor = document.createElement('div');
  btnColor.className = 'color';
  btnColor.style.backgroundColor = getRandomColor();
  btnColor.addEventListener('click', selectColor);
  colorPaletteHtml.appendChild(btnColor);
}
function createBtnBlack() {
  const btnColor = document.createElement('div');
  btnColor.className = 'color selected';
  btnColor.style.backgroundColor = 'rgb(0,0,0)';
  btnColor.addEventListener('click', selectColor);
  colorPaletteHtml.appendChild(btnColor);
}
function createBtnsColors(Palette = null) {
  if (Palette) {
    colorPalette = Palette;
    createBtnBlack();
    Palette.forEach((color) => {
      const btnColor = document.createElement('div');
      btnColor.className = 'color';
      btnColor.addEventListener('click', selectColor);
      btnColor.style.backgroundColor = color;
      colorPaletteHtml.appendChild(btnColor);
    });
  } else {
    createBtnBlack();
    for (let index = 0; index < 3; index += 1) {
      createNewBtnColor();
    }
  }
}
function savePalette() {
  localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
}
function loadPalette() {
  const local = JSON.parse(localStorage.getItem('colorPalette'));
  if (local) {
    colorPalette = local;
    createBtnsColors(local);
  } else {
    createBtnsColors();
    savePalette();
  }
}

loadPalette();

// pixel-board
let columns = 0;
pixelBoardHtml.addEventListener('mousedown', updateMouseDown);
pixelBoardHtml.addEventListener('mouseup', updateMouseDown);
function createRow(colors, length = 5) {
  columns = colors ? colors.length : length;
  const row = document.createElement('div');
  row.className = 'row';
  pixelBoardHtml.appendChild(row);
  const rowIndex = rows.length;
  rows[rowIndex] = [];
  for (let i = 0; i < columns; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = `pixel rows${rowIndex} columns${i}`;
    pixel.style.backgroundColor = colors ? colors[i] : 'white';
    pixel.addEventListener('mousedown', updateMouseDown);
    pixel.addEventListener('mouseup', updateMouseDown);
    pixel.addEventListener('mouseover', pixelClick);
    row.appendChild(pixel);
    rows[rowIndex].push(pixel);
  }
}
function createNewBoard(size) {
  if (size) {
    pixelBoardHtml.innerHTML = '';
    rows = [];
    for (let i = 0; i < size; i += 1) {
      createRow(undefined, size);
    }
  }
}
function loadBoard() {
  const boardLoaded = JSON.parse(localStorage.getItem('pixelBoard'));
  boardSize = JSON.parse(localStorage.getItem('boardSize')) || 5;
  if (boardLoaded) {
    boardLoaded.forEach((rowColors) => {
      createRow(rowColors);
    });
  } else {
    createNewBoard(boardSize);
  }
}

// btns
function clear() {
  pixelBoardHtml.innerHTML = '';
  localStorage.removeItem('pixelBoard');
  loadBoard();
}
const btnClear = document.querySelector('#clear-board');
btnClear.addEventListener('click', clear);
function newColorPalette() {
  colorPalette = [];
  colorPaletteHtml.innerHTML = '';
  localStorage.removeItem('colorPalette');
  createBtnsColors();
  savePalette();
  const black = document.querySelector('.color');
  black.classList.add('selected');
}
const inputSize = document.querySelector('#board-size');
const stringError = 'Board inválido!';
function vqv() {
  boardSize = parseInt(inputSize.value, 10);
  if (boardSize > inputSize.max) {
    boardSize = inputSize.max;
    inputSize.value = boardSize;
    alert(stringError);
  } else if (boardSize < 5) {
    boardSize = 5;
    inputSize.value = boardSize;
    alert(stringError);
  } else {
    inputSize.value = '';
  }
  if (boardSize) {
    createNewBoard(boardSize);
    saveBoard(boardSize);
  } else {
    return alert(stringError);
  }
}
function inputVqv(event) {
  if (event.key === 'Enter') {
    vqv();
  }
}
function NewBtn() {
  colorPaletteHtml.innerHTML = '';
  getRandomColor();
  createBtnsColors(colorPalette);
  savePalette();
}
inputSize.addEventListener('keypress', inputVqv);
const btnVqv = document.querySelector('#generate-board');
btnVqv.addEventListener('click', vqv);
const buttonRandomColor = document.querySelector('#button-random-color');
buttonRandomColor.addEventListener('click', newColorPalette);
loadBoard();
const addColor = document.createElement('button');
colorPaletteHtml.insertAdjacentElement('afterend', addColor);
const divPalette = document.createElement('div');
divPalette.appendChild(colorPaletteHtml);
divPalette.appendChild(addColor);
divPalette.id = 'divPalette';
const mainHtml = document.querySelector('main');
mainHtml.prepend(divPalette);
addColor.addEventListener('click', NewBtn);