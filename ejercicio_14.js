function rollDice(numFaces) {
  return Math.floor(Math.random() * numFaces) + 1
}

console.log(rollDice(4))
console.log(rollDice(6))
console.log(rollDice(8))
console.log(rollDice(12))
console.log(rollDice(20))
