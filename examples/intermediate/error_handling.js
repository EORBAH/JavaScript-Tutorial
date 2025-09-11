try {
    let resultat = JSON.parse("texte non JSON");
    // traiter le resultat
} catch (erreur) {
    console.log("Erreur :", erreur.message);
}
