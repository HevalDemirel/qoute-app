let btn = document.getElementById("quote-button");
let output = document.getElementById("quote-container");
let myQouteArray = ["Livet är som en gurka, ibland har du den i handen och ibland i röven", "Tjenare grabbar, läget?", "Sawadikap", "Bosse, är du knarkare?", "Vem var det, vem var det som kasta?", "Jag e lugn nu jag e bra"];


btn.addEventListener('click', function(){
const randomQoute = myQouteArray[Math.floor(Math.random() * myQouteArray.length)];
output.innerHTML = randomQoute;
});


