
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let storepass = document.getElementById('output')
let message = document.getElementById('message')

function generatePass() {
    
let symbolPref = document.getElementById('symbol-pref').checked;
let numPref = document.getElementById('number-pref').checked;
let passwordLengthInput = document.getElementById('password-length').value;
let characters = lowercase + uppercase

if (numPref) {
    characters += numbers;
  }

  if (symbolPref) {
    characters += symbols;
  }
    let password = []
        

    for (let i = 0; i < passwordLengthInput; i++) {
        let index = Math.floor(Math.random() * characters.length)
        let letter = characters[index]
        password.push(letter)
    }



    let passwordString = password.join('');
    
    const el = document.createElement('textarea');
    el.value = passwordString;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
 message.textContent = "Password Copied!"
    storepass.textContent = passwordString
    return passwordString
}


