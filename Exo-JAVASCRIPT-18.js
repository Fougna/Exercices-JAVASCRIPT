/* Exercice JavaScript 18 (Conçu par Yoel Melki)

1. Réalisez le même exercice que précédemment en faisant en sorte que lors de l’affichage :
• on affiche la taille des variables.
• on affiche les variables en majuscules.
• On affiche les variables en minuscules.
• On supprime les espaces en début et fin de chaîne.
• On extrait la chaine du caractère à partir de la 3eme lettre.
• On extrait le nom et prénom à partir d’une variable contenant le nom et prénom.*/

var nom_etudiant = " Ferran ", prenom_etudiant = " Sébastien ";
var tableau = ["Ferran", " Sébastien"];
alert("Nombre de lettres dans le nom : " + nom_etudiant.length +
      "\nNombre de lettres dans le prénom : " + prenom_etudiant.length +
      "\nTout en majuscules : " + nom_etudiant.toUpperCase() + prenom_etudiant.toUpperCase() +
      "\nTout en minuscules : " + nom_etudiant.toLowerCase() + prenom_etudiant.toLowerCase() +
      "\nSans espaces : " + nom_etudiant.trim() + prenom_etudiant.trim() +
      "\nExtraction à partir de la 3ème lettre : " + nom_etudiant.substr(4) + prenom_etudiant.substr(4) +
      "\nExtraction à partir d'un tableau : " + tableau[0] + tableau[1]);