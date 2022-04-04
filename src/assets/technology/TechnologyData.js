import Launch1 from './images/image-launch-vehicle-portrait.jpg';
import Launch2 from './images/image-launch-vehicle-landscape.jpg';
import Spaceport1 from './images/image-spaceport-portrait.jpg';
import Spaceport2 from './images/image-spaceport-landscape.jpg';
import Capsule1 from './images/image-space-capsule-portrait.jpg';
import Capsule2 from './images/image-space-capsule-landscape.jpg';

const data = 
{
    "technology": [
        {
            "name": "Launch vehicle",
            "images": {
            "portrait": { Launch1 },
            "landscape": { Launch2 }
        },
            "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
            "name": "Spaceport",
            "images": {
            "portrait": { Spaceport1 },
            "landscape": { Spaceport2 }
        },
            "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
            "name": "Space capsule",
            "images": {
            "portrait": { Capsule1 },
            "landscape": { Capsule2 }
        },
            "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    ]
}

export default data;