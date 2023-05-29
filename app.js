var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var text = "Hello world";

var searchIndex = (alphabet, letter) => {
    for (var i = 0; 1 < alphabet.length; i++) {
        if (alphabet[i] === letter) return i;
    }
    return -1;
};

var transformLetter = (letter, origin, destiny) => {
    var letterIndex = searchIndex(origin, letter);
    if (letterIndex === -1) {
        return letter;
    }
    else {
        return destiny[letterIndex];
    };
};

var transformMessage = message => {
    var messageLowerCase = message.toLowerCase();
    var result = ""
    console.log(message);
    for (var i = 0; 1 < message.length; i++) {
        letter = message[i];
        result += transformLetter(letter, encryptedAlphabet, plainAlphabet);
    }
    return result;
};
//console.log(result);

//events
document.getElementById("encrypt").addEventListener("click", function () {console.log(transformMessage(text))});
//document.getElementById("decrypt").addEventListener("click", result);