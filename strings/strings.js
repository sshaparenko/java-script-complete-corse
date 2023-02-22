//1
let getLength = (word) => word.length;
let getLowerCase = (word) => word.toLowerCase();
let getUpperCase = (word) => word.toUpperCase();

//2
let vowels = (word) => {
    const allVowels = 'aeiouyAEIOUY';
    let numberOfVowels = 0;
    for(const letter of word) {
        if(allVowels.includes(letter)) {
            numberOfVowels++;
        }
    }
    return numberOfVowels;
};

console.log(vowels("heroes of the storm"));

//3
let reverse = (word) => {
    let reverseWord = '';
    for(let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    return reverseWord;
}

console.log(reverse("word"));

//4
let isPalindrome = (word) => {
    console.time("palendrome");
    console.time('isPalindrome');
    if(word === reverse(word)) {
        console.timeEnd("palendrome");
        return true;
    } else {
        console.timeEnd("palendrome");
        return false;
    }
}

function palindrome(word){ 
    console.time("palendrome2");
    let backwardWord = "";
    for (letter of word){
      // Adding letter at the beginning of the backward string
      backwardWord = letter + backwardWord;
  }
    if (word.toLowerCase() === backwardWord.toLowerCase()) {
        console.timeEnd("palendrome2");
        console.log(true);
    } else {
        console.timeEnd("palendrome2");
        console.log(false);
    }
  }

console.log(isPalindrome("issi"));
palindrome('issi');