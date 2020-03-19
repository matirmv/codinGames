/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const longitudeUser = +readline().replace(",",'.');
const latitudeUser = +readline().replace(",",'.');
const N = parseInt(readline());
const defibrilateurs=[];
for (let i = 0; i < N; i++) {
    const DEFIB = readline();
    defibrilateurs.push([...DEFIB.split(';')]);
}
    console.error(defibrilateurs)
    
defibrilateurs.forEach(el=>{
    console.error(calculerDistance(el[4],el[5]))
    }
)



function calculerDistance(longitude,latitude){
    longitude=+longitude.replace(",",'.');
    latitude=+latitude.replace(",",'.');
    console.error(longitude)
    console.error(latitude)
    const x = (longitude-longitudeUser)*Math.cos((latitudeUser+latitude)/2)
    const y = (latitude-latitudeUser)
    return Math.sqrt(Math.pow(x,2),Math.pow(y,2))*6371;
}

// Write an action using console.log()
// To debug: console.error('Debug messages...');

console.log('answer');