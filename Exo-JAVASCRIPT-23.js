/* Exercice JavaScript 23 (Conçu par Yoel Melki)

Création d'une fonction appellée multiplicaton permettant :
- de multiplier deux nombres.
- de multiplier trois nombres.*/

var nombre1 = prompt("Veuillez rentrer un premier nombre à multiplier...");
var nombre2 = prompt("Veuillez rentrer un deuxième nombre à multiplier...");
var nombre3 = prompt("Veuillez rentrer un troisième nombre à multiplier...");
var resultat = 0;

function multiplication(nombre1, nombre2, nombre3){
    if (typeof(nombre1)==="number" && typeof(nombre2)==="number" && isNaN(nombre3)){
            resultat = nombre1*nombre2;
            alert("La multiplication de " + nombre1 + " et de " + nombre2 + " est égale à " + resultat);
        }
        else if (typeof(nombre1)==="number" && isNaN(nombre2) && typeof(nombre3)==="number"){
            resultat = nombre1*nombre3;
            alert("La multiplication de " + nombre1 + " et de " + nombre3 + " est égale à " + resultat);
        }
        else if (isNaN(nombre1) && typeof(nombre2)==="number" && typeof(nombre3)==="number"){
            resultat = nombre2*nombre3;
            alert("La multiplication de " + nombre2 + " et de " + nombre3 + " est égale à " + resultat);
        }
        else if (typeof(nombre1)==="number" && typeof(nombre2)==="number" && typeof(nombre3)==="number"){
            resultat = nombre1*nombre2*nombre3;
            alert("La multiplication de " + nombre1 + ", de " + nombre2 + " et de " + nombre3 + " est égale à " + resultat);
        }
        else if (isNaN(nombre1) && isNaN(nombre2) && typeof(nombre3)==="number"){
            alert("La multiplication ne peut se faire car deux des valeurs rentrées ne sont pas numériques.");
            nombre1 = prompt("Veuillez rentrer un premier nombre à multiplier...");
            nombre2 = prompt("Veuillez rentrer un deuxième nombre à multiplier...");
            nombre3 = prompt("Veuillez rentrer un troisième nombre à multiplier...");
        }
        else if (isNaN(nombre1) && typeof(nombre2)==="number" && isNaN(nombre3)){
            alert("La multiplication ne peut se faire car deux des valeurs rentrées ne sont pas numériques.");
            nombre1 = prompt("Veuillez rentrer un premier nombre à multiplier...");
            nombre2 = prompt("Veuillez rentrer un deuxième nombre à multiplier...");
            nombre3 = prompt("Veuillez rentrer un troisième nombre à multiplier...");
        }
        else if (typeof(nombre1)==="number" && isNaN(nombre2) && isNaN(nombre3)){
            alert("La multiplication ne peut se faire car deux des valeurs rentrées ne sont pas numériques.");
            nombre1 = prompt("Veuillez rentrer un premier nombre à multiplier...");
            nombre2 = prompt("Veuillez rentrer un deuxième nombre à multiplier...");
            nombre3 = prompt("Veuillez rentrer un troisième nombre à multiplier...");
        }
        else{
            alert("La multiplication ne peut se faire car aucune des valeurs rentrées n'est numérique.");
            nombre1 = prompt("Veuillez rentrer un premier nombre à multiplier...");
            nombre2 = prompt("Veuillez rentrer un deuxième nombre à multiplier...");
            nombre3 = prompt("Veuillez rentrer un troisième nombre à multiplier...");
    };
};

multiplication(parseInt(nombre1), parseInt(nombre2), parseInt(nombre3));