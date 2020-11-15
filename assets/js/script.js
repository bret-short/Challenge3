
//user input variables: 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
//start variable values: 
character = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "=", "`", "\:", "\;", " - ", "+", " > ", " ? ", "[", "]", "{", "|", "}"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];
var choices;
var toUpper = function (x) {
    return x.toUpperCase();
};
alpha2 = alpha.map(toUpper);

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
    ps = writePassword();
    document.getElementById("password").placeholder = ps;
});

//start function to generate password
function writePassword() {
    //asks for user input
    enter = parseInt(prompt("How many characters would you like your password to be? Choose an amount between 8 and 100"));
    //if statement for user validation 
    if (!enter) {
        alert("Must enter a value");
    } else if (enter < 8 || enter > 100) {
        //start user input prompts
        enter = parseInt(prompt("You must choose an amount between 8 and 100"));

    } else {
        //continues once user input is validated
        confirmNumber = confirm("Will this contain any numbers?");
        confirmCharacter = confirm("Will this contain any special characters?");
        confirmUppercase = confirm("Will this contain any Uppercase letters?");
        confirmLowercase = confirm("Will this contain any Lowercase letters?");
    };

    //else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
    //else if for 4 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpha, alpha2);
    }
    //else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }
    //else if for 2 positive options 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }
    //else if for 1 positive option
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
    //created space variable to fill uppercase conversion
    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };

    //password variable is an array placeholder for user generated amount of length
    var password = [];

    //random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var makeChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(makeChoices);
    }
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
//puts password value into the textbox
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}
