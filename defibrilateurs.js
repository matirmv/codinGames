const longitudeUser = +readline().replace(",", ".");
const latitudeUser = +readline().replace(",", ".");
const N = parseInt(readline());
const defibrilateurs = [];
let distanceMinimale = 0;
let indexMinimal = 0;
//création du tableau de defibrilateurs
for (let i = 0; i < N; i++) {
    const DEFIB = readline();
    defibrilateurs.push([...DEFIB.split(";")]);
}

//enrichissement du tableau avec les distances calculées
defibrilateurs.forEach(el => {
    el.push(calculerDistance(el[4], el[5]))
    console.error(el)
});
distanceMinimale = defibrilateurs[0][6]


//determination de la distance la plus petite
defibrilateurs.forEach((el, index) => {
    if (el[6] < distanceMinimale) {
        distanceMinimale = el[6];
        indexMinimal = index
    }
});

//fonction de calcul de la distance entre 2 coordonées
function calculerDistance(longitude, latitude) {
    longitude = +longitude.replace(",", ".");
    latitude = +latitude.replace(",", ".");
    const x =
        (longitude - longitudeUser) * Math.cos((latitudeUser + latitude) / 2);
    const y = latitude - latitudeUser;
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 6371;
}


console.log(defibrilateurs[indexMinimal][1])