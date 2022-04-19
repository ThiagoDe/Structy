const dictionary = ["zoo", "tack", "tick", "door"];
const alphabet = "ghzstijbacdopnfklmeqrxyuvw";

const detectDictionary = (dictionary, alphabet) => {
    for (let i = 0; i < dictionary.length - 1 ; i++){
        const current = dictionary[i];
        const next = dictionary[i + 1];
        if (lexicalOrder(current, next, alphabet) === false ) return false;
    }
    return true;
};

const lexicalOrder = (word1, word2, alphabet) => {
    const maxSize = Math.max(word1.length, word2.length);
    for (let i = 0; i < maxSize; i++){
        const char1 = word1[i];
        const char2 = word2[i];
        const val1 = alphabet.indexOf(char1);
        const val2 = alphabet.indexOf(char2);
        if (val1 < val2){
            return true;
        } else if ( val1 > val2){
            return false;
        }
    }
    return true;
}

console.log(detectDictionary(dictionary, alphabet)); // -> false