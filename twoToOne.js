function longest(s1, s2) {
  // mélanger les deux chaines de caractères
  let mix = s1 + s2;
  // créer un tableau vide pour stocker les lettres
  let letters = [];
  // boucle pour parcourir les lettres de la chaîne de caractères
  for (let i = 0; i < mix.length; i++) {
    // vérifier si la lettre est déjà dans le tableau
    if (letters.includes(mix[i])) {
      // si oui, ne rien faire
    } else {
      // si non, stocker la lettre dans le tableau
      letters.push(mix[i]);
    }
  }
  // retourner le tableau de lettres en une seule string
  return letters.sort().join("");
}
