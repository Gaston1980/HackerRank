//https://www.hackerrank.com/challenges/one-week-preparation-kit-no-prefix-set
// Solution: using Data Structure Trie (avanzado)
function noPrefix(words) {
const trieRoot = {};
    for(const word of words) {
        let node = trieRoot, last_i = word.length - 1;
        for(let i = 0; i <= last_i; i++) {
            const ch = word[i];
            if(node.isFullWord || (node[ch] && i === last_i)) {
                return console.log('BAD SET' + '\n' + word);
            }
            if(!node[ch]) node[ch] = {};
            node = node[ch];
        }
        node.isFullWord = true;
    }
    console.log('GOOD SET');
}

//var words = ["aab", "defgab", "abcde", "aabcde", "bbbbbbbbbb", "jabjjjad"]
var words =["aab","aac","aacghgh","aabghgh"]
//var words = ["aab","defgab","abcde","cedaaa","bbbbbbbbbb","jabjjjad"]                
//NOTA: solo pasa 10 tests de 42 HackerRank                                     


console.log(noPrefix(words))