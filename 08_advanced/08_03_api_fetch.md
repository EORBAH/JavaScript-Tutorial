# 8.3 API et Fetch

## Définition
`fetch` effectue des requêtes HTTP.

## Exemple
```javascript
async function obtenirPosts() {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await reponse.json();
    posts.slice(0, 3).forEach(post => console.log(post.title));
}
obtenirPosts();
```

**Exercices**
1. Affichez 10 posts dans une page HTML.
2. Créez un formulaire pour envoyer un post via POST.
