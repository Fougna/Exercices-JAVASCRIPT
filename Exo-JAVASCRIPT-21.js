/* Exercice JavaScript 21 (Conçu par Yoel Melki)

1. Afficher 20 lignes « Bonjour !» en numérotant les lignes.*/

for (i=1 ; i<21 ; i++){
    alert("Bonjour ! Ligne n° " + i);
};

/*2. Écrire un script demandant de l’utilisateur d’entrer son âge et de contrôler la validité de l’âge entré (si l’âge est erroné afficher un message d’erreur et
redemander de saisir l’âge).*/

function checkage (age){
    while(age<=0 || age>=110){
        alert("Votre âge n'est pas valide.");
        age = prompt("Veuillez rentrer un âge valide...");
    }
    alert("Merci d'avoir rentré votre âge.");
};

var age = prompt("Veuillez rentrer votre âge...");

checkage(parseInt(age));

/*3. Saisie contrôlée : utiliser une saisie contrôlée afin que l’entier b soit obligatoirement différent de 0.
Tant que l’utilisateur choisira une valeur incorrecte (donc nulle), une nouvelle valeur sera redemandée.*/

function valdiff(b){
    while(b==0){
        alert("NON ! C'est zéro !");
        b = prompt("Veuillez recommencer...");
    }
    alert("Merci d'avoir rentré un nombre entier différent de zéro.");
};

var b = prompt("Veuillez rentrer un nombre entier différent de zéro...");

valdiff(parseInt(b));

/*4. Écrire un programme permettant de saisir un entier compris dans l’intervalle [1, 15] et de calculer son carré.
Le programme affichera un message d’erreur si l’entier n’est pas dans l’intervalle et demandera une nouvelle saisie.*/

function racine (resultat){
    while(resultat<1 || resultat>15){
        resultat = prompt("Le nombre rentré n'est pas compris entre 1 et 15, veuillez recommencer...")
    }
    var carre = Math.sqrt(resultat);
    alert("La racine carrée de " + resultat + " est : " + carre);
};

var resultat = prompt("Veuillez rentrer un nombre compris entre 1 et 15...");

racine(parseInt(resultat));

/*5. Écrire un script affichant la moyenne d’un tableau.*/

var tableau = [24, 235, 4, 15, 17];
var somme = 0;
var total = 0;

function average (tableau){
    for (i=0 ; i<tableau.length ; i++){
        somme += tableau[i];
    };
    total = somme/tableau.length;
    alert("La moyenne totale de " + tableau[0] + ", " + tableau[1] + ", " + tableau[2] + ", " + tableau[3] + " et " + tableau[4] + " est égale à : " + total)
};

average(tableau);

/*6. Écrire un script affichant des * n fois.*/

function stargenerator (etoile){
    alert("Voici vos " + star.repeat(etoile) + " étoiles");
    };
var star = "*"
var etoile = prompt("Combien d'étoiles voulez-vous voir apparaître ?","Nombre d'étoiles");

stargenerator(parseInt(etoile));

/*7. Écrire un script qui permet d'afficher la table de multiplication d'un nombre entier n : La valeur de n sera demandée à l’utilisateur via une boîte de dialogue.*/

function multiplication (nombre){
    alert("La table de multiplication de " + nombre + " est : " +
          "\n" + nombre + "x1 = " + nombre*1 +
          "\n" + nombre + "x2 = " + nombre*2 +
          "\n" + nombre + "x3 = " + nombre*3 +
          "\n" + nombre + "x4 = " + nombre*4 +
          "\n" + nombre + "x5 = " + nombre*5 +
          "\n" + nombre + "x6 = " + nombre*6 +
          "\n" + nombre + "x7 = " + nombre*7 +
          "\n" + nombre + "x8 = " + nombre*8 +
          "\n" + nombre + "x9 = " + nombre*9 +
          "\n" + nombre + "x10 = " + nombre*10);
    };

var nombre = prompt("Veuillez entrer un nombre pour connaître sa table de multiplication...");

multiplication(parseInt(nombre));

/*8. Écrire un script qui permette de calculer la factorielle d'un nombre entier positif n.*/

function factorielle (entier){
    resultat = 1;
    for (i=1 ; i<entier ; i++){
        resultat = resultat*i;
        alert ("La factorielle de " + entier + " est : " + resultat);
    }
};

var entier = prompt("Veuillez entrer un nombre entier positif afin d'en connaître la factorielle...");

factorielle(parseInt(entier));