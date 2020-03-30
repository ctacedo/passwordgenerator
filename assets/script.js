character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

lowerc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

upperc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var choices; 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

function generatePassword() {
    
    enter = parseInt(prompt("Please select the amonut of characters you would like for you password. Please choose between 8 and 128"));
    
    if (!enter) {
        alert("Invalid Selection");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
    
        confirmNumber = confirm("Do you want numbers in your password?");
        confirmCharacter = confirm("Do you want special characters in your password?");
        confirmUppercase = confirm("Do you want Uppercase letters in your password?");
        confirmLowercase = confirm("Do you want lowercase letters in your password??");
    };

    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
    
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, lowerc, upperc);
    }
    
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, upperc);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, lowerc);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(lowerc, upperc);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(lowerc, upperc);
    }
   
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(lowerc);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(upperc);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = lowerc.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = lowerc.concat(upperc);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(upperc);
    }
    
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = lowerc;
    }
    
    else if (confirmUppercase) {
        choices = upperc;
    };

    var placeholder = [];
 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        placeholder.push(pickChoices);
    }
    
    var password = placeholder.join("");
    UserInput(password);
    return password;
}

function UserInput(password) {
    document.getElementById("password").textContent = password;
}

var generateBtn = document.querySelector("#generate");

function writePassword () {
    var password = generatePassword();
    var passwordText = document.querySelector("password")

    passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword);


