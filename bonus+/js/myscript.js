// richiamiamo il grid container in una variabile
const gridContainer = document.querySelector(".grid-container");

//variabile dello score e recupro il div dello score dall html
let scoreCard = document.getElementById("score");
let score = 0;

//prendo la variabile delle option della difficoltà
let difficultySelector = document.getElementById("select-difficulty");
// creo un eventlistener sulla select dove con "change" ogni volta che l'utente seleziona la difficoltà viene generata la tabella in base a ciò che viene selezionato
difficultySelector.addEventListener("change", function () {
  // creo una variabile con il valore che viene selezionato nell'elemento select
  const difficultyValue = difficultySelector.value;
  // creo le variabili da cambiare in base alla difficoltà che poi verranno inserite come argomenti della funzione
  let tabCells;
  let classToAdd;

  // creo le condizioni dove viene selezionata la difficoltà e cosa succede
  if (difficultyValue === "easy") {
    tabCells = 100;
    classToAdd = "square100";
  } else if (difficultyValue === "medium") {
    tabCells = 81;
    classToAdd = "square81";
  } else if (difficultyValue === "hard") {
    tabCells = 49;
    classToAdd = "square49";
  }
  // richiamo la funzione per stampare la griglia in base alla difficoltà selezionata
  difficultyFunctionSelect(tabCells, classToAdd, "square");
  bombGenerator(tabCells);
});

// aggiungiamo un ciclo fino a 100 per inserire gli elementi
// *************************************************************
// for (let i = 1; i <= 100; i++) {
//   //creo un nuovo square
//   const newSquare = createElement("div", "square");
//   // creo una variabile per stampare in console il numero della cella che viene cliccata
//   const squareNum = "Il numero della cella è: " + i;

//   // variabile delle celle safe senza bombe
//   let safeCells = 100 - 16;

//   // aggiungo un evento al click ad ogni nuovo box
//   newSquare.addEventListener("click", function () {
//     // condizione per rendere cliccabile ogni cella una sola volta
//     if (
//       newSquare.classList.contains("clicked") ||
//       newSquare.classList.contains("clicked-bomb")
//     ) {
//       return;
//     }

//     if (!bombarr.includes(i)) {
//       // aggiungo la classe per dare il colore ad ogni cella che viene cliccata
//       newSquare.classList.add("clicked");
//       score += 1;
//       scoreCard.innerHTML = `Punteggio: ${score}`;
//       console.log(score);
//     } else {
//       newSquare.classList.add("clicked-bomb");
//       alert(`Hai perso!!! Il tuo punteggio è ${score}`);
//     }

//     if (score === safeCells) {
//       alert(`HAI VINTOOOO!!! IL TUO PUNTEGGIO E': ${score}`);
//     }

//     // stampo in console il numero della cella che viene cliccata
//     console.log(squareNum);
//   });

//   // inserisco il nuovo square nel mio container html
//   gridContainer.append(newSquare);
// }
// *************************************************************

// richiamiamo in una variabile il bottone per iniziare il gioco

const playBtn = document.querySelector(".play-btn");
// gli aggiungiamo un evento click
playBtn.addEventListener("click", function () {
  // al click aggiungiamo la classe show-grid alla griglia per renderla visibile
  gridContainer.classList.add("show-grid");
});

// creo array delle bombe
const bombarr = [];
// creo una funzione per implementare le bombe generate in base alla dimensione della griglia scelta dalla difficoltà
function bombGenerator(bombRangeGenerate) {
  // ciclo dove finchè l'array non è lungo 16 continua a generare numeri
  while (bombarr.length < 16) {
    // funzione per generare 16 numeri casuali nel range
    let bombNum = randomNum(1, bombRangeGenerate);
    // console.log(bombNum);
    // condizione per non ripetere gli stessi numeri nell'array.
    // se nell'array non è ancora incluso il numero generato allora pushalo
    if (!bombarr.includes(bombNum)) {
      bombarr.push(bombNum);
    }
  }
  console.log(bombarr);
}
