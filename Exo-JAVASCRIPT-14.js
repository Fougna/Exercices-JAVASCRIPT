/* Exercice JavaScript 14 (Conçu par Amin Mangeot)

Calculer le montant du panier et afficher “frais de port gratuit” si le client bénéficie de l’offre promotionnelle :*/

var shopping = [
{ product: "Livre", unitPrice: 10.99 },
{ product: "CD", unitPrice: 15.99 },
{ product: "DVD", unitPrice: 23 }
];

var shopping2 =  [
{ product: "Livre", unitPrice: 30 },
{ product: "CD", unitPrice: 20 },
{ product: "DVD", unitPrice: 25 }
];

/*1.  Total panier
👉 Pour chacun de ces paniers, calculez et affichez le total du panier.*/

/*2. Frais de port
👉 Si le total est supérieur à 60, affichez “frais de port offert”.*/

/*3. Quantité
👉 Refaites les mêmes opérations en prenant en compte la quantité :*/

var shopping = [
{ product: "Livre", unitPrice: 10.99, quantity: 1 },
{ product: "CD", unitPrice: 15.99, quantity: 1 },
{ product: "DVD", unitPrice: 23, quantity: 3 }
];

var shopping2 = [
{ product: "Livre", unitPrice: 10, quantity: 1 },
{ product: "CD", unitPrice: 5, quantity: 2 },
{ product: "DVD", unitPrice: 25, quantity: 1 }
];