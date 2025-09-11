# 5. Gestion des événements

## Définition
Les événements sont des actions (clic, saisie) gérées via `addEventListener`.

## Exemple
```html
<button id="monBouton">Cliquez-moi</button>
<script>
    document.getElementById("monBouton").addEventListener("click", () => {
        alert("Bouton cliqué !");
    });
</script>
```

**Exercices**
1. Créez un bouton qui ajoute un paragraphe.
2. Affichez le nombre de caractères saisis dans un champ texte.
