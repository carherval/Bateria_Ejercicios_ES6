function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i
    }
  }

  return -1
}

function removeItem(array, text) {
  const modifiedArray = [...array]
  const index = findArrayIndex(modifiedArray, text)

  if (index != -1) {
    modifiedArray.splice(index, 1)
  }

  return modifiedArray
}

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

console.log(removeItem(mainCharacters, 'Luke'))
console.log(removeItem(mainCharacters, 'Anakin'))
console.log(removeItem(mainCharacters, 'Darth Vader'))
console.log(removeItem(mainCharacters, 'Palpatine'))
