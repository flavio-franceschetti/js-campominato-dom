// richiamiamo il grid container in una variabile
const gridContainer = document.querySelector(".grid-container");

// aggiungiamo un ciclo fino a 100 per inserire gli elementi
for (let i = 1; i < 101; i++) {
  // gridContainer.innerHTML = "";
  //creo un nuovo square
  const newSquare = createElement("div", "square");
  // newSquare.innerHTML = i;
  // creo una variabile per stampare in console il numero della cella che viene cliccata
  const squareNum = "Il numero della cella è: " + i;

  // aggiungo un evento al click ad ogni nuovo box
  newSquare.addEventListener("click", function () {
    // aggiungo la classe per dare il colore ad ogni cella che viene cliccata
    newSquare.classList.add("clicked");
    // stampo in console il numero della cella che viene cliccata
    console.log(squareNum);
  });

  // inserisco il nuovo square nel mio container html
  gridContainer.append(newSquare);
}

// richiamiamo in una variabile il bottone per iniziare il gioco
const playBtn = document.querySelector(".play-btn");
// gli aggiungiamo un evento click
playBtn.addEventListener("click", function () {
  // al click aggiungiamo la classe show-grid alla griglia per renderla visibile
  gridContainer.classList.add("show-grid");
});

// creo array delle bombe
const bombarr = [];
// ciclo dove finchè l'array non è lungo 16 continua a generare numeri
while (bombarr.length < 16) {
  // funzione per generare 16 numeri casuali nel range
  let bombNum = randomNum(1, 100);
  console.log(bombNum);
  // condizione per non ripetere gli stessi numeri nell'array.
  // se nell'array non è ancora incluso il numero generato allora pushalo
  if (!bombarr.includes(bombNum)) {
    bombarr.push(bombNum);
  }
}
