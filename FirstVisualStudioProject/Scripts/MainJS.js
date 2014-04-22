function LetterCapitalize(str) {
    var firstLetter;
    var theRest;

    wordsArr = str.split(" ");
    for (var i = 0; i < wordsArr.length; i++) {
        var firstLetter = wordsArr[i].charAt(0).toUpperCase();
        var theRest = wordsArr[i].slice(1, wordsArr[i].length);

        wordsArr[i] = firstLetter + theRest;
    }
    str = wordsArr.join(" ");
    // code goes here  
    return str;

}

console.log(LetterCapitalize("hello world"));