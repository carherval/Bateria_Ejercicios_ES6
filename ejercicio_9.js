const movies = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura']
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción']
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller']
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación']
  }
]

// Versión concatenando todo y eliminando los duplicados al final
let categories = []

for (const movie of movies) {
  categories = [...categories, ...movie.categories]
}

for (let i = categories.length - 1; i >= 0; i--) {
  if (categories.indexOf(categories[i]) !== i) {
    categories.splice(i, 1)
  }
}

console.log(categories)

// Versión filtrando con la función includes
categories = []

for (const movie of movies) {
  const categoriesMovie = movie.categories

  categoriesMovie.forEach((categorieMovie) => {
    if (!categories.includes(categorieMovie)) {
      categories.push(categorieMovie)
    }
  })
}

console.log(categories)
