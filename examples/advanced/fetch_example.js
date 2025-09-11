async function obtenirPosts() {
    try {
        const reponse = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await reponse.json();
        posts.slice(0, 3).forEach(post => console.log(post.title));
    } catch (erreur) {
        console.log("Erreur :", erreur);
    }
}
obtenirPosts();
