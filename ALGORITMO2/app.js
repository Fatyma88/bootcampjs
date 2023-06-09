var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function encryptMessage(message) {
  var encryptedMessage = "";
  for (var i = 0; i < message.length; i++) {
    var index = plainAlphabet.indexOf(message[i]);
    if (index !== -1) {
      encryptedMessage += encryptedAlphabet[index];
    } else {
      encryptedMessage += message[i];
    }
  }
  return encryptedMessage;
}

function decryptMessage(message) {
  var decryptedMessage = "";
  for (var i = 0; i < message.length; i++) {
    var index = encryptedAlphabet.indexOf(message[i]);
    if (index !== -1) {
      decryptedMessage += plainAlphabet[index];
    } else {
      decryptedMessage += message[i];
    }
  }
  return decryptedMessage;
}

var clearMessageTextarea = document.getElementById("clearMessage");
var encryptedMessageTextarea = document.getElementById("encryptedMessage");
var encryptButton = document.getElementById("encryptButton");
var decryptButton = document.getElementById("decryptButton");

encryptButton.addEventListener("click", function() {
  var message = clearMessageTextarea.value;
  var encryptedMessage = encryptMessage(message);
  encryptedMessageTextarea.value = encryptedMessage;
});

decryptButton.addEventListener("click", function() {
  var message = encryptedMessageTextarea.value;
  var decryptedMessage = decryptMessage(message);
  clearMessageTextarea.value = decryptedMessage;
});
