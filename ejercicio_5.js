// 5.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]

const agesGt18 = ages.filter((age) => age > 18)

console.log(agesGt18)

// 5.2
// const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90]

const evenAges = ages2.filter((age) => age % 2 === 0)

console.log(evenAges)

// 5.3
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const streamersLoL = streamers.filter(
  (streamer) => streamer.gameMorePlayed === 'League of Legends'
)

console.log(streamersLoL)

// 5.4
// const streamers = [
const streamers2 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const uNameStreamers = streamers2.filter((streamer) =>
  streamer.name.includes('u')
)

console.log(uNameStreamers)

// 5.5
const legendsStreamersGt35 = streamers
  .filter((streamer) => streamer.gameMorePlayed.includes('Legends'))
  .filter((streamer) =>
    streamer.age > 35
      ? (streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase())
      : streamer.gameMorePlayed
  )

console.log(legendsStreamersGt35)
