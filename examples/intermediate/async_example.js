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
