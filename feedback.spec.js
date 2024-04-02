// -- Feedback function test with jest. Guessed word vs chosen word -- //
// -- This test file contains a total of 5 tests -- //

// Test strategy overview:
// - Test 1: Ensure correct feedback when all letters are correct.
// - Test 2: Ensure correct feedback when no letters are correct.
// - Test 3: Ensure correct feedback when one letter is correct, one letter is misplaced and three letters are incorrect.
// - Test 4: Ensure correct feedback when one letter is misplaced and four letters are incorrect.
// - Test 5: Ensure correct feedback when three letters are misplaced, one letter is correct and one letter is incorrect.

import feedback from './feedback';

describe("Feedback function", () => {
  // 1: Test to ensure that correct feedback is returned when all letters are correct.
  it("should return correct feedback when ALL letters are correct", () => {
    const chosenWord = "cykla".toUpperCase();
    const guessWord = "cykla".toUpperCase();
    const result = feedback(chosenWord, guessWord);
    expect(result).toEqual([
      { letter: "C", result: "correct" },
      { letter: "Y", result: "correct" },
      { letter: "K", result: "correct" },
      { letter: "L", result: "correct" },
      { letter: "A", result: "correct" },
    ]);
  });

  // 2: Test to ensure that correct feedback is returned when no letters are correct.
  it("should return correct feedback when NO letter is correct", () => {
    const chosenWord = "cykla".toUpperCase();
    const guessWord = "qwert".toUpperCase();
    const result = feedback(chosenWord, guessWord);
    expect(result).toEqual([
      { letter: "Q", result: "incorrect" },
      { letter: "W", result: "incorrect" },
      { letter: "E", result: "incorrect" },
      { letter: "R", result: "incorrect" },
      { letter: "T", result: "incorrect" },
    ]);
  });
  
  // 3: Test to ensure that correct feedback is returned when one letter is correct, one letter is misplaced and three letters are incorrect.
  // Additionally, the letter 'L' appears twice in the guessed word 'hallå'. The first 'L' is marked as 'incorrect' because the second 'L' is already correctly placed in the chosen word 'cykla'.
  it("should return correct feedback when ONE letter is correct, ONE letter is misplaced and THREE letters are incorrect", () => {
    const chosenWord = "cykla".toUpperCase();
    const guessWord = "hallå".toUpperCase();
    const result = feedback(chosenWord, guessWord);
    expect(result).toEqual([
      { letter: "H", result: "incorrect" },
      { letter: "A", result: "misplaced" },
      { letter: "L", result: "incorrect" },
      { letter: "L", result: "correct" },
      { letter: "Å", result: "incorrect" },
    ]);
  });

// 4: Test to ensure that correct feedback is returned when one letter is misplaced and four letters are incorrect.  
it("should return correct feedback when ONE letter is misplaced and FOUR letters are incorrect", () => {
  const chosenWord = "cykla".toUpperCase();
  const guessWord = "qwymb".toUpperCase();
  const result = feedback(chosenWord, guessWord);
  expect(result).toEqual([
    { letter: "Q", result: "incorrect" },
    { letter: "W", result: "incorrect" },
    { letter: "Y", result: "misplaced" },
    { letter: "M", result: "incorrect" },
    { letter: "B", result: "incorrect" },
  ]);
});

// 5: Test to ensure that correct feedback is returned when three letters are misplaced, one letter is correct and one letter is incorrect.  
it("should return correct feedback when THREE letters is misplaced, ONE letter is correct and ONE letter is incorrect", () => {
  const chosenWord = "cykla".toUpperCase();
  const guessWord = "cklam".toUpperCase();
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
