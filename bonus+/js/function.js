// creiamo la funzione generica per la creazione di elementi html
function createElement(tag, classToAdd, secondClass) {
  const square = document.createElement(tag);
  square.classList.add(classToAdd, secondClass);
  return square;
}

// funzione genera numero random
function randomNum(min, max) {
  let randomNumGenerate = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumGenerate;
}

// creo una funzione per selezionare la difficoltà
function difficultyFunctionSelect(tabCells, classToAdd, secondClass) {
  for (let i = 1; i <= tabCells; i++) {
    //creo un nuovo square
    const newSquare = createElement("div", classToAdd, secondClass);
    // creo una variabile per stampare in console il numero della cella che viene cliccata
    const squareNum = "Il numero della cella è: " + i;

    // variabile delle celle safe senza bombe
    let safeCells = tabCells - 16;

    // aggiungo un evento al click ad ogni nuovo box
    newSquare.addEventListener("click", function () {
      // condizione per rendere cliccabile ogni cella una sola volta
      if (
        newSquare.classList.contains("clicked") ||
        newSquare.classList.contains("clicked-bomb")
      ) {
        return;
      }

      if (!bombarr.includes(i)) {
        // aggiungo la classe per dare il colore ad ogni cella che viene cliccata
        newSquare.classList.add("clicked");
        score += 1;
        scoreCard.innerHTML = `Punteggio: ${score}`;
        console.log(score);
      } else {
        newSquare.classList.add("clicked-bomb");
        alert(`Hai perso!!! Il tuo punteggio è ${score}`);
      }

      if (score === safeCells) {
        alert(`HAI VINTOOOO!!! IL TUO PUNTEGGIO E': ${score}`);
      }

      // stampo in console il numero della cella che viene cliccata
      console.log(squareNum);
    });

    // inserisco il nuovo square nel mio container html
    gridContainer.append(newSquare);
  }
}
