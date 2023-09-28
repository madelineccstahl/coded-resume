var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
constellations.push("Canis Major");
constellations.sort();

console.log(constellations);

planets.splice(5);

console.log(planets);

var galaxy = constellations.concat(planets);

console.log(galaxy);

var newStar = star.replace("polaris", "POLARIS");

console.log(newStar);
