# 2. Configuration de l'environnement

Pour coder en JavaScript, vous avez besoin de :
1. **Un éditeur de texte** : Visual Studio Code (recommandé), Sublime Text, Atom.
2. **Un navigateur** : Chrome ou Firefox avec outils de développement (F12 > Console).
3. **Node.js (optionnel)** : Téléchargez sur [nodejs.org](https://nodejs.org). Vérifiez : `node -v`.

## Premier programme
1. Créez `index.html` :
   ```html
   <!DOCTYPE html>
   <html lang="fr">
   <head>
       <meta charset="UTF-8">
       <title>Mon Premier Programme JS</title>
   </head>
   <body>
       <h1>Bienvenue dans JavaScript !</h1>
       <script src="script.js"></script>
   </body>
   </html>
   ```
2. Créez `script.js` :
   ```javascript
   console.log("Bonjour, monde !");
   alert("Bienvenue dans votre premier programme JavaScript !");
   ```
3. Ouvrez `index.html` dans un navigateur. Vérifiez la console.

**Exercice** : Modifiez `script.js` pour afficher votre prénom dans la console et une alerte personnalisée.
