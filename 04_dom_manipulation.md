# 4. Manipulation du DOM

## Définition
Le DOM est une représentation de la structure HTML. JavaScript permet de la modifier.

## Méthodes
- Sélection : `getElementById`, `querySelector`.
- Modification : `textContent`, `innerHTML`, `style`.
- Création : `createElement`, `appendChild`.

## Exemple
```html
<div id="conteneur">
    <h1>Mon titre</h1>
</div>
<script>
    const titre = document.querySelector("h1");
    titre.textContent = "Nouveau titre";
</script>
```

**Exercices**
1. Ajoutez 3 éléments `<li>` à une liste `<ul>` vide.
2. Changez la couleur de fond d’un `<div>` via un bouton.
