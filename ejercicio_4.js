// 4.1
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]

const nameUsers = users.map((user) => user.name)

console.log(nameUsers)

// 4.2
// const users = [
const users2 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]

const nameUsersModified = users2.map((user) =>
  user.name.startsWith('A') ? 'Anacleto' : user.name
)

console.log(nameUsersModified)

// 4.3
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]

const citiesVisited = cities.map((city) =>
  city.isVisited ? `${city.name} (Visitado)` : city.name
)

console.log(citiesVisited)
