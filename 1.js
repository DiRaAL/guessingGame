function adivinar() {
  let numRandom;
  do {
    numRandom = Math.floor(Math.random() * 100) + 1;
  } while (numRandom > 100);
  return numRandom;
}

console.log(adivinar());

