// -- Feedback function. Guessed word vs chosen word -- //


// Det valda ordet
const chosenWord = "PARIS";

// Det gissade ordet
const guessWord = "SIRAP";

// Funktion som tar valt och gissat ord som parametrar
function feedback(chosenWord, guessWord) {
  
  // Deklarerar en feedbackarray
  const feedbackArray = [];

  // Deklarerar två kartor, en för valt ord och en för gissat
  const chosenWordMap = new Map();
  const guessWordMap = new Map();

  // Fyller i kartan för valt ord
  for (let i = 0; i < chosenWord.length; i++) {
    const letter = chosenWord[i];
    if (!chosenWordMap.has(letter)) {
      chosenWordMap.set(letter, []);
    }
    chosenWordMap.get(letter).push(i);
  }

  // Fyller i kartan för gissat ord
  for (let i = 0; i < guessWord.length; i++) {
    const letter = guessWord[i];
    if (!guessWordMap.has(letter)) {
      guessWordMap.set(letter, []);
    }
    guessWordMap.get(letter).push(i);
  }

  // Loopar igenom gissat ord för att ge feedback
  for (let i = 0; i < guessWord.length; i++) {
    const letter = guessWord[i];
    if (chosenWordMap.has(letter)) {
      const positionsInchosenWord = chosenWordMap.get(letter);
      const positionsInguessWord = guessWordMap.get(letter);
      if (positionsInchosenWord.includes(i)) {
        feedbackArray.push({ letter: letter, result: "correct" });
      } else if (
        positionsInchosenWord.some((pos) => !positionsInguessWord.includes(pos))
      ) {
        feedbackArray.push({ letter: letter, result: "misplaced" });
      } else {
        feedbackArray.push({ letter: letter, result: "incorrect" });
      }
    } else {
      feedbackArray.push({ letter: letter, result: "incorrect" });
    }
  }
  return feedbackArray;
}

const result = feedback(chosenWord, guessWord);
console.log(result);

module.exports = feedback;
