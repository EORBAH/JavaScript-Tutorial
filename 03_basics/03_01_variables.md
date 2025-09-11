# 3.1 Variables et types de données

## Définition
Une **variable** est un conteneur pour stocker des données. Mots-clés : `let`, `const`, `var`.

## Types de données
- **Primitifs** : `Number`, `String`, `Boolean`, `null`, `undefined`, `Symbol`.
- **Non-primitifs** : `Object`, `Array`, `Function`.

## Exemples
```javascript
let prenom = "Alice"; // String
const age = 25; // Number
var estEtudiant = true; // Boolean
let hobbies = ["lecture", "jeux", "sport"]; // Array
let utilisateur = { nom: "Bob", age: 30 }; // Object
console.log(prenom); // Alice
console.log(hobbies[0]); // lecture
console.log(utilisateur.nom); // Bob
```

**Exercices**
1. Créez des variables pour prénom, âge, et 3 hobbies. Affichez-les.
2. Créez un objet voiture (marque, modèle, année) et affichez ses propriétés.
