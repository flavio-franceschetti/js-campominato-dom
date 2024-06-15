// creiamo la funzione generica per la creazione di elementi html
function createElement(tag, classToAdd) {
  const square = document.createElement(tag);
  square.classList.add(classToAdd);
  return square;
}

// funzione genera numero random
function randomNum(min, max) {
  let randomNumGenerate = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumGenerate;
}
