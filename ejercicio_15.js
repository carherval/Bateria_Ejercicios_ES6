const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

function swap(array, index1, index2) {
  if (index1 < 0 || index1 >= fantasticFour.length) {
    console.log('Índice 1 no válido')
    return
  }
  if (index2 < 0 || index2 >= fantasticFour.length) {
    console.log('Índice 2 no válido')
    return
  }

  const modifiedArray = [...array]
  const storedValue = modifiedArray[index1]

  modifiedArray[index1] = modifiedArray[index2]
  modifiedArray[index2] = storedValue

  console.log(modifiedArray)
}

swap(fantasticFour, -1, 3)
swap(fantasticFour, 2, 8)
swap(fantasticFour, 0, 1)
swap(fantasticFour, 2, 3)
swap(fantasticFour, 1, 1)
swap(fantasticFour, 3, 3)
