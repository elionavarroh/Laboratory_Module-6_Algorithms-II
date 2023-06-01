var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var text = "Hello world";
var incoming = document.getElementById("incoming");
var outcoming = document.getElementById("outcoming");

var searchIndex = (alphabet, letter) => {
    for (var i = 0; i < alphabet.length; i++) {
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
    var result = ""
    console.log(message);
    for (var i = 0; i < message.length; i++) {
        letter = message[i];
        result += transformLetter(letter, plainAlphabet, encryptedAlphabet);
    }
    return result;
};

var decryptMessage = message => {
    var result = ""
    console.log(message);
    for (var i = 0; i < message.length; i++) {
        letter = message[i];
        result += transformLetter(letter, encryptedAlphabet, plainAlphabet);
    }
    return result;
};

//events
document.getElementById("encrypt").addEventListener("click", function () {
    var result = transformMessage(incoming.value);
    outcoming.value = result;
});
document.getElementById("decrypt").addEventListener("click", function () {
    var result = decryptMessage(outcoming.value);
    incoming.value = result;
});