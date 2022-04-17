const sentence = "follow the yellow brick road";
const synonyms = {
  follow: ["chase", "pursue"],
  yellow: ["gold", "amber", "lemon"],
};


const substituteSynonyms = (sentence, synonyms) => {
    const words = sentence.split(' ');
    const subarrays = generate(words, synonyms);//
    // const result = [];
    return subarrays.map((subarray) => subarray.join(' '));
    // for (let subarray of subarrays) {
    //     result.push(subarray.join(' '));
    // }

    // return result;
};

const generate = (words, synonyms) => {
    if (words.length === 0) return [[]];
    const firstWord = words[0];
    const remaining = words.slice(1);

    const subarrays = generate(remaining, synonyms);

    if (firstWord in synonyms) {
        const result = [];
        for (let synonym of synonyms[firstWord]) {
            for (let subarray of subarrays) {
            result.push([synonym, ...subarray]);
            }
        }

        return result;
    } else {
        const result = [];

        for (let subarray of subarrays) {
            result.push([firstWord, ...subarray]);
        }

        return result;
    }
}

console.log(substituteSynonyms(sentence, synonyms));
// [
//   'chase the gold brick road',
//   'chase the amber brick road',
//   'chase the lemon brick road',
//   'pursue the gold brick road',
//   'pursue the amber brick road',
//   'pursue the lemon brick road'
// ]
