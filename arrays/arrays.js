//1
const musketeers = ["Athos", "Porthos", "Aramis"];
console.log(musketeers);
musketeers.push("D'Artagnan");
console.log(musketeers);
//musketeers.forEach(m =>{console.log(m)});
//splice(I, N) used to remove N element from I index
//indexOf(el) returnes an index of element based on value
let index = musketeers.indexOf("Aramis");
if(index > -1) {
    musketeers.splice(index, 1);
}
console.log(musketeers);

//2
let sumArray = (values) => {
    let sum = 0;
    try {
        values.forEach(element => {
            sum += element
        });
    } catch (error) {
        console.error("An error occurred", error.message);
    }
    return sum;
}
let values = [1, 2, 3];
console.log(`Sum is ${sumArray(values)}`);

//3
let maxElement = (values) => {
    let max = null;
    array.forEach(element => {
        if(max !== null) {
            if(element > max) {
                max = element;
            }
        } else {
            max = element;
        }
    });
    return max;
};

let array = [3, 11, 7, 2, 9, 10];
console.log(`Max value is ${maxElement(array)}`);

//4
let secondMinimum = (values) => {
    sndMin = null;
    frtMin = null;
    values.forEach(element => {
        if(frtMin !== null) {
            if(element < frtMin) {
                sndMin = frtMin;
                frtMin = element;
            }
            if(sndMin === null) {
                sndMin = element
            }
        } else {
            frtMin = element;
        }
    });
    return sndMin;
};
let sndMinValues = [3, 2, 1];
console.log(secondMinimum(sndMinValues));

//5
let words = {
    list: [],
    addWord: function(word) {
        console.time("addWord");
        //split word into array of characters using spread operator
        let letters = [...word];
        //geting index of the last third element of an array to perform splice
        let index = letters.length - 3;
        //splicing ang joining letters
        let lastThreeLetters = letters.splice(index, 3).join('');
        if(lastThreeLetters !== "ing") {
            this.list.push(word);
        }
        console.timeEnd("addWord");
    },
    addWordLight: function(word) {
        console.time("addWordLight");
        if(!word.endsWith("ing")) {
            this.list.push(word);
        }
        console.timeEnd("addWordLight");
    },
    getArray: function() {
        return this.list;
    }
};

words.addWord("wing");
console.log(words.getArray());
words.addWordLight("wing");
console.log(words.getArray());

//6
let wordsStarts = {
    list: [],
    addWord: function(word) {
        if(!word.startsWith("Coc")) {
            this.list.push(word);
        }
    }
}
