
function generatePass() {
    let password = []
    let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let passwordLengthInput = document.getElementById('password-length').value;
    let symbolPref = document.getElementById('symbol-pref').checked;
    let numPref = document.getElementById('number-pref').checked;
    let storepass = document.getElementById('output')

    if (symbolPref && numPref) {
        characters.push("~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/");
    } else if (symbolPref && !numPref){
        characters.push("~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/");
    } else if ( !symbolPref && numPref){
        characters.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    }
        

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
alert("Password Copied")
    storepass.textContent = passwordString
    return passwordString
}


