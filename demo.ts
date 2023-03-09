// Exercice # 1

// - Créer une fonction Javascript avec deux constantes nommées : "address" et "zipCode", la première est une string, la seconde est un nombre, veillez à bien les typer.
// - Créer une constante nommée "addressFull" contenant la concaténation de ces deux variables, veillez à bien les typer.
// - Faire s'afficher la constante "addressFull" dans la console du navigateur.

function exercice1 () {
    const address: string = "Avenue de Vénaria";
    const zipcode: number = 453;
    const addressFull: string = zipcode + ", " + address;
    console.log(addressFull);
}

exercice1();
// Exercice # 2

// - Créer une fonction Javascript avec une constante contenant un tableau de vos 5 pays favoris, veillez à bien le typer.
// - À l'aide d'une boucle, itérrer dans ce tableau et afficher chaque valeur dans la console du navigateur.

const tableau: string[] = ['France', 'Italie', 'Suisse', 'Espagne', 'Angleterre'];
function pays() {
    for (let i = 0; i < tableau.length; i++) {
        console.log(tableau[i]);
    } 
}
pays();



// Exercice # 3

// - Créer une fonction Javascript pour décomposer une string, exemple : ma phrase : "developpement", resultat souhaité : [d, e, v, e, l, o, p, p, e, m, e, n, t]
// - Le resultat est stocké dans une constante correctement typée dont vous afficherez la valeur dans la console du navigateur.

const ma_phrase: string = "test";

function decompose() {
    const ma_phrase_split: string[] = ma_phrase.split('');
    console.log(ma_phrase_split);
}

decompose();

// Exercice # 4

// - Créer une fonction Javascript pour recomposer une string, exemple : ma phrase décomposée : [d, e, v, e, l, o, p, p, e, m, e, n, t], résultat souhaité : "developpement"
// - Le resultat est stockée dans une constante correctement typée dont vous afficherez la valeur dans la console du navigateur.

const phrase_split: string[] = ['t','e','s','t'];

function recompose() {
    const phrase_recompose: string = phrase_split.join('');
    console.log(phrase_recompose);
}

recompose();


// Partie 3 exo 1

console.log("--------------Partie 3 exo 1 ------------");
const data: string[] = ['Théo', 'Martin','Lucas','Antoine','Etienne'];

for (let i = 0; i < data.length; i++){
    if (data[i].length <= 5) {
        console.log(data[i]);
    }
}

// Partie 3 exo 2

console.log("--------------Partie 3 exo 2 ------------");

const countries: string[] = ['France', 'Italie', 'Suisse', 'Belgique', 'Espagne'];
let sentence: string = '';

for (let i = 0; i < countries.length - 1; i++){
    sentence = sentence + countries[i] + ', ';
}
sentence = sentence + countries[countries.length-1];
console.log(sentence);

// Partie 3 exo 3

console.log("--------------Partie 3 exo 3 ------------");

const numbers: number[] = [123, 999, 340, 12390];
let results: number[] = [];

for (let i = 0; i < numbers.length; i++){
    results.push(numbers[i]*180);
}
console.log(results);

// Partie 3 exo 4

console.log("--------------Partie 3 exo 4 ------------");

interface Person {
    name: string;
    surname: string;
    age: number;
}

const person: Person = {
    name: "Marchal",
    surname: "Mickeal",
    age: 19
}

if (person.age >= 18){
    console.log("Majeur");
} else {
    console.log("Mineur");
}

// Partie 3 exo 5

console.log("--------------Partie 3 exo 5 ------------");

interface Moi {
    nom: string;
    prenom: string;
    age: number;
}

const moi: Moi = {
    nom: "BAKALARZ",
    prenom: "David",
    age: 23
}

console.log("Bonjour mon nom est " + moi.nom + " " + moi.prenom + ", j'ai " + moi.age + " ans");

// Partie 3 exo 6

console.log("--------------Partie 3 exo 6 ------------");

interface Famille {
    nom: string;
    prenom: string;
    age: number;
}

const papa: Famille = {
    nom: "BAKALARZ",
    prenom: "Franck",
    age: 51
}

const maman: Famille = {
    nom: "VAZ",
    prenom: "Marie",
    age: 54
}

const soeur: Famille = {
    nom: "BAKALARZ",
    prenom: "Manon",
    age: 19
}

const moi_2: Moi = {
    nom: "BAKALARZ",
    prenom: "David",
    age: 23
}

const oncle: Moi = {
    nom: "VAZ",
    prenom: "Adelio",
    age: 52
}

const tableau_famille: Famille[] = [papa, maman, soeur, moi_2, oncle];

for (let i = 0; i < tableau_famille.length; i++){
    console.log("Bonjour mon nom est " + tableau_famille[i].nom + " " + tableau_famille[i].prenom + ", j'ai " + tableau_famille[i].age + " ans");
}