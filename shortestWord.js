function findShort(s){
    //1 - séparer les mots de la phrase
    let words = s.split(' ');
    //2 - créer un tableau vide pour stocker les longueurs des mots
    let wordsLength = [];
    //3 - boucle pour parcourir les mots
    for (let i = 0; i < words.length; i++) {
        //4 - stocker la longueur de chaque mot dans le tableau
        wordsLength.push(words[i].length);
    }
    //5 - retourner la plus petite valeur du tableau
    return Math.min(...wordsLength);

}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));