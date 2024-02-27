function numRandom() {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 100) + 1;
  } while (randomNumber > 100);
  return randomNumber;
}

console.log(numRandom());

