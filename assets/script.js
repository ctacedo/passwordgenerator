
function writePassword() {
    var password = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var passwordText = "";
    for (let index = 1; index <= 10; index++) {
        var i = Math.floor((Math.random() * password.length)+0);
        passwordText+= password.charAt(i);
    }
    console.log(passwordText);


document.getElementById('password').innerHTML= passwordText;}

