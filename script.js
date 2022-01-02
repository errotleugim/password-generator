// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789"
var special = "~!@#$%^&*"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ask;
var choices;

generateBtn.addEventListener("click", genPassword);

var password=document.getElementById("password");

 function genPassword() {
   ask = prompt("How long would you like the password? Type only numbers between 8 and 128");
   if (!ask) {
     alert("fine, no password for you");

   }
   else if (ask < 8 || ask > 128) {
     alert("Try again. Type a number between 8 and 128");

   }
   else {
    confirmNumber = confirm("Will this contain numbers?");
    confirmspecial = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
   }

   if (!confirmspecial && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");
 }
  else if (confirmspecial && confirmNumber && confirmUppercase && confirmLowercase) {

    choices = special.concat(numbers, letters, upper);
  }

    else if (confirmspecial && confirmNumber && confirmUppercase) {
      choices = special.concat(numbers, upper);
  }
    else if (confirmspecial && confirmNumber && confirmLowercase) {
      choices = special.concat(numbers, letters);
  }
    else if (confirmspecial && confirmLowercase && confirmUppercase) {
      choices = special.concat(letters, upper);
  }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = numbers.concat(letters, upper);
  }
  else if (confirmspecial && confirmNumber) {
    choices = special.concat(numbers);

} else if (confirmspecial && confirmLowercase) {
    choices = special.concat(letters);

} else if (confirmspecial && confirmUppercase) {
    choices = special.concat(upper);
}
else if (confirmLowercase && confirmNumber) {
    choices = letters.concat(number);

} else if (confirmLowercase && confirmUppercase) {
    choices = letters.concat(upper);

} else if (confirmNumber && confirmUppercase) {
    choices = numbers.concat(upper);
}
// Else if for 1 positive option
else if (confirmspecial) {
    choices = special;
}
else if (confirmNumber) {
    choices = numbers;
}
else if (confirmLowercase) {
    choices = letters;
}
  
var password = [];

for (var i = 0; i < ask; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}
var ps = password.join("");
    UserInput(ps);
    return ps;
 }
 function UserInput(ps) {
  document.getElementById("password").innerHTML = ps;

}