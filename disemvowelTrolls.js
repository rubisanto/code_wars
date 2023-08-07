function disemvowel(str) {
    //1 - lister les voyelles 
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    //2 - créer un tableau vide pour stocker les consonnes
    let consonants = [];
    //3 - boucle pour parcourir les lettres de la chaîne de caractères
    for (let i = 0; i < str.length; i++) {
        //4 - vérifier si la lettre est une voyelle
        if (vowels.includes(str[i].toLowerCase())) {
            //5 - si oui, ne rien faire
        } else {
            //6 - si non, stocker la lettre dans le tableau
            consonants.push(str[i]);
        }
    }

    //7 - retourner le tableau de consonnes en une seule string
    return consonants.join('');
  }

console.log(disemvowel("This website is for losers LOL!"));