# 7.2 Gestion des erreurs

## Définition
Utilisez `try/catch` pour gérer les exceptions.

## Exemple
```javascript
try {
    let resultat = JSON.parse("texte non JSON");
} catch (erreur) {
    console.log("Erreur :", erreur.message);
}
```

**Exercices**
1. Vérifiez si une chaîne est un nombre valide.
2. Gérez l’erreur d’accès à une propriété inexistante.
