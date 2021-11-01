/* Exercice JavaScript 14 (Conçu par Amin Mangeot)

Calculer le montant du panier et afficher “frais de port gratuit” si le client bénéficie de l’offre promotionnelle :*/

var shopping = [
{ product: "Livre", unitPrice: 10.99 },
{ product: "CD", unitPrice: 15.99 },
{ product: "DVD", unitPrice: 23 }
];

var shopping2 = [
{ product: "Livre", unitPrice: 30 },
{ product: "CD", unitPrice: 20 },
{ product: "DVD", unitPrice: 25 }
];

/*1.  Total panier
👉 Pour chacun de ces paniers, calculez et affichez le total du panier.*/

var panier = 0;
for (i=0 ; i<shopping.length ; i++){
    panier += shopping[i].unitPrice;
};
console.log(panier);

var panier2 = 0;
for (i=0 ; i<shopping2.length ; i++){
    panier2 += shopping2[i].unitPrice;
};
console.log(panier2);

/*2. Frais de port
👉 Si le total est supérieur à 60, affichez “frais de port offert”.*/

var panier = 0;
for (i=0 ; i<shopping.length ; i++){
    panier += shopping[i].unitPrice;
    if (panier >= 60){
        console.log("Frais de port offerts !");
    }
};

var panier2 = 0;
for (i=0 ; i<shopping2.length ; i++){
    panier2 += shopping2[i].unitPrice;
    if (panier2 >= 60){
        console.log("Frais de port offerts !");
    }
};

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

var panier = 0, panier2 = 0;

for (i=0 ; i<shopping.length ; i++){
    panier += shopping[i].quantity;
};
console.log(panier);

for (i=0 ; i<shopping2.length ; i++){
    panier2 += shopping2[i].quantity;
};
console.log(panier2);