// 3.1
const pointsList = [32, 54, 21, 64, 75, 43]

const pointsListCopy = [...pointsList]

console.log(pointsListCopy)

// 3.2
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }

const toyCopy = { ...toy }

console.log(toyCopy)

//3.3
// const pointsList = [32, 54, 21, 64, 75, 43];
const pointsList1 = [32, 54, 21, 64, 75, 43]
const pointsLis2 = [54, 87, 99, 65, 32]

const pointsListConcat = [...pointsList1, ...pointsLis2]

console.log(pointsListConcat)

//3.4
// const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyInit = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }

const toyConcat = { ...toyInit, ...toyUpdate }

console.log(toyConcat)

//3.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']

const colorsCopy = [colors[0], colors[1], ...colors.slice(3)]

console.log(colorsCopy)
