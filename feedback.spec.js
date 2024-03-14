// -- Feedback function test with jest. Guessed word vs chosen word -- //
// -- This test file contains a total of 5 tests -- //


import feedback from './feedback';

describe("Feedback function", () => {
  it("should return correct feedback when ALL letters are correct", () => {
    const chosenWord = "CYKLA";
    const guessWord = "CYKLA";
    const result = feedback(chosenWord, guessWord);
    expect(result).toEqual([
      { letter: "C", result: "correct" },
      { letter: "Y", result: "correct" },
      { letter: "K", result: "correct" },
      { letter: "L", result: "correct" },
      { letter: "A", result: "correct" },
    ]);
  });

  it("should return correct feedback when NO letter is correct", () => {
    const chosenWord = "CYKLA";
    const guessWord = "QWERT";
    const result = feedback(chosenWord, guessWord);
    expect(result).toEqual([
      { letter: "Q", result: "incorrect" },
      { letter: "W", result: "incorrect" },
      { letter: "E", result: "incorrect" },
      { letter: "R", result: "incorrect" },
      { letter: "T", result: "incorrect" },
    ]);
  });

  it("should return correct feedback when ONE letter is correct, ONE letter is misplaced and THREE letters are incorrect", () => {
    const chosenWord = "CYKLA";
    const guessWord = "HALLÅ";
    const result = feedback(chosenWord, guessWord);
    expect(result).toEqual([
      { letter: "H", result: "incorrect" },
      { letter: "A", result: "misplaced" },
      { letter: "L", result: "incorrect" },
      { letter: "L", result: "correct" },
      { letter: "Å", result: "incorrect" },
    ]);
  });

it("should return correct feedback when ONE letter is misplaced and FOUR letters are incorrect", () => {
  const chosenWord = "CYKLA";
  const guessWord = "QWYMB";
  const result = feedback(chosenWord, guessWord);
  expect(result).toEqual([
    { letter: "Q", result: "incorrect" },
    { letter: "W", result: "incorrect" },
    { letter: "Y", result: "misplaced" },
    { letter: "M", result: "incorrect" },
    { letter: "B", result: "incorrect" },
  ]);
});

it("should return correct feedback when THREE letters is misplaced, ONE letter is correct and ONE letter is incorrect", () => {
  const chosenWord = "CYKLA";
  const guessWord = "CKLAM";
  const result = feedback(chosenWord, guessWord);
  expect(result).toEqual([
    { letter: "C", result: "correct" },
    { letter: "K", result: "misplaced" },
    { letter: "L", result: "misplaced" },
    { letter: "A", result: "misplaced" },
    { letter: "M", result: "incorrect" },
  ]);
});
});
