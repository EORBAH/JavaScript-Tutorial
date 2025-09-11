# 7.3 Programmation asynchrone

## Définition
Gère les opérations asynchrones avec callbacks, Promises, `async/await`.

## Exemple
```javascript
async function fetchUtilisateur() {
    try {
        const reponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const donnees = await reponse.json();
        console.log(donnees.name);
    } catch (erreur) {
        console.log("Erreur :", erreur);
    }
}
fetchUtilisateur();
```

**Exercices**
1. Créez une Promise simulant un téléchargement.
2. Récupérez 5 titres de posts avec `async/await`.
