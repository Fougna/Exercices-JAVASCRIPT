/* Exercice JavaScript 06 (Conçu par Amin Mangeot)

Créez une variable playlist contenant “Katy Perry - Chained To The Rhythm” , "Ed Sheeran - Shape of You" , "Maroon 5 - Don't Wanna Know".
En utilisant la variable playlist, définissez une condition qui affiche dans la console le message suivant "Attention il ne vous reste plus que 3 titres" s'il y a un nombre de titres inférieur à 4.*/

var playlist = ["Katy Perry - Chained To The Rhythm", "Ed Sheeran - Shape of You", "Maroon 5 - Don't Wanna Know"];

if (playlist.length<4){
    console.log("Attention, il ne vous reste plus que 3 titres !");
};