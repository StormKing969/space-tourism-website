import Hurley1 from './images/image-douglas-hurley.png';
import Hurley2 from './images/image-douglas-hurley.webp';
import Shuttleworth1 from './images/image-mark-shuttleworth.png';
import Shuttleworth2 from './images/image-mark-shuttleworth.webp';
import Glover1 from './images/image-victor-glover.png';
import Glover2 from './images/image-victor-glover.webp';
import Ansari1 from './images/image-anousheh-ansari.png';
import Ansari2 from './images/image-anousheh-ansari.webp';

const crew = 
  [
    {
      "name": "Douglas Hurley",
      "images": {
        "png": { Hurley1 },
        "webp": { Hurley2 }
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": { Shuttleworth1 },
        "webp": { Shuttleworth2 }
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": { Glover1 },
        "webp": { Glover2 }
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": { Ansari1 },
        "webp": { Ansari2 }
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ]


export default crew;