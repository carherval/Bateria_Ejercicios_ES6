const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Pedro',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Cristina',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]

const favoritesSoundsCount = {}

for (const user of users) {
  // Almacena los sonidos favoritos de cada usuario
  // const favoritesSoundsNames = []

  for (const key in user.favoritesSounds) {
    // favoritesSoundsNames.push(key)

    if (!Object.keys(favoritesSoundsCount).includes(key)) {
      eval(`favoritesSoundsCount.${key} = 1`)
    } else {
      eval(`favoritesSoundsCount.${key} = favoritesSoundsCount.${key} + 1`)
    }
  }

  // console.log(`${user.name}: ${favoritesSoundsNames}`)
}

for (const key in favoritesSoundsCount) {
  console.log(`${key}: ${favoritesSoundsCount[key]}`)
}
