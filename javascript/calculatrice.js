//Stocke les deux nombres insérés par l'utilisateur
let nombre1 = document.getElementById('chiffre1');
let nombre2 = document.getElementById('chiffre2');
let resultat = document.getElementById('resultat');

//Déclaration des opérateurs
const additionner = document.getElementById('addition');
const soustraire = document.getElementById('soustraction');
const multiplier = document.getElementById('multiplication');
const diviser = document.getElementById('division');
const modulo = document.getElementById('mod');

//permet d'additioner  lorsque l'utilisateur presse "+" et appelle la fonction qui effectue les calcules
additionner.addEventListener('click', function(){
    executeOperation('addition');
})
//permet de soustraire  lorsque l'utilisateur presse "-" et appelle la fonction qui effectue les calcules
soustraire.addEventListener('click', function(){
    executeOperation('soustraction');
})
//permet de multiplier lorsque l'utilisateur presse "*" et appelle la fonction qui effectue les calcules
multiplier.addEventListener('click', function(){
    executeOperation('multiplication');
})
//permet diviser lorsque l'utilisateur presse "/" et appelle la fonction qui effectue les calcules
diviser.addEventListener('click', function(){
    executeOperation('division');
})
//permet d'obtenir le modulo lorsque l'utilisateur presse "%" et appelle la fonction qui effectue les calcules
modulo.addEventListener('click', function(){
    executeOperation('mod')
})

//fonction qui effectue les calculs
function executeOperation(operation){

    //permet de stocker le nombre inséré dans le 1er input
    //et de controler que c'est un nombre et pas un autre caractère
    let nbr1 = parseFloat(nombre1.value);
    //permet de stocker le nombre inséré dans le 2ème input
    //et de controler que c'est un nombre et pas un autre caractère
    let nbr2 = parseFloat(nombre2.value);

    //déclaration de la variables qui permet de stocker le résultat du calcul
    let resultatCalcul = 0;

    switch (operation){
        case 'addition':
            resultatCalcul = nbr1 + nbr2;
            resultat.innerText = String(resultatCalcul);
            break;
        case 'soustraction':
            resultatCalcul = nbr1 - nbr2;
            resultat.innerText = String(resultatCalcul);
            break;
        case 'multiplication':
            resultatCalcul = nbr1 * nbr2;
            resultat.innerText = String(resultatCalcul);
            break;
        case 'division':
            resultatCalcul = nbr1 / nbr2;
            resultat.innerText = String(resultatCalcul);
            break;
        case 'mod':
            resultatCalcul = nbr1 % nbr2;
            resultat.innerText = String(resultatCalcul);
            break;
    }
}