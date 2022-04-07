import moon1 from './images/image-moon.png'
import moon2 from './images/image-moon.webp'
import mars1 from './images/image-mars.png'
import mars2 from './images/image-mars.webp'
import europa1 from './images/image-europa.png'
import europa2 from './images/image-europa.webp'
import titan1 from './images/image-titan.png'
import titan2 from './images/image-titan.webp'

const destinations = 
  [
    {
      "id": "01",
      "name": "Moon",
      "images": {
        "png": moon1,
        "webp": moon2
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "id": "02",
      "name": "Mars",
      "images": {
        "png": mars1,
        "webp": mars2
      },
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "id": "03",
      "name": "Europa",
      "images": {
        "png": europa1,
        "webp": europa2
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "id": "04",
      "name": "Titan",
      "images": {
        "png": titan1,
        "webp": titan2
      },
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
  ]

export default destinations;