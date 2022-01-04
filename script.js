// Establishing variables to be used
var generateBtn = document.querySelector("#generate");
var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789"
var special = "~`! @#$%^&*()_-+={[}]|:;<,>.?/\\ \"\'"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ask;
var selection;

generateBtn.addEventListener("click", genPassword);

var password=document.getElementById("password");
//Main criteria selection function.
 function genPassword() {
  document.getElementById("password").innerHTML = " ";
   ask = prompt("How long would you like the password? Type only numbers between 8 and 128");
   //First two statements are to let the user know his input was not accepted.
    if (!ask) {
     alert("fine, no password for you");
    }
    else if (ask < 8 || ask > 128) {    
    var pw = "Choose a number between 8 and 128"
    pass1(pw);
    return pw;
     }
   //Establishing variables to delimit the parameters of the password to be generated
    else {
    digits = confirm("Will this contain numbers?");
    specialchars = confirm("Will this contain special characters?");
    caps = confirm("Will this contain Uppercase letters?");
    small = confirm("Will this contain Lowercase letters?");
   }
   //If the user does not choose any parameter
    if (!specialchars && !digits && !caps && !small) {
      // document.getElementById("password").innerHTML = "Agree to at least one of the prompts";
      var pw = "Agree to at least one of the prompts"
    pass1(pw);
    return pw;
   }
    //Next several statements are just concatenation of the accepted prompts
    else if (specialchars && digits && caps && small) {

    selection = special.concat(numbers, letters, upper);
   }

    else if (specialchars && digits && caps) {
      selection = special.concat(numbers, upper);
   }
    else if (specialchars && digits && small) {
      selection = special.concat(numbers, letters);
   }
    else if (specialchars && small && caps) {
      selection = special.concat(letters, upper);
   }
    else if (digits && small && caps) {
      selection = numbers.concat(letters, upper);
   }
    else if (specialchars && digits) {
      selection = special.concat(numbers);

    } 
    else if (specialchars && small) {
      selection = special.concat(letters);

    } 
    else if (specialchars && caps) {
      selection = special.concat(upper);
    }
    else if (small && digits) {
      selection = letters.concat(number);

    } 
    else if (small && caps) {
      selection = letters.concat(upper);

    } 
    else if (digits && caps) {
      selection = numbers.concat(upper);
    }
    else if (specialchars) {
      selection = special;
    }
    else if (digits) {
      selection = numbers;
    }
    else if (small) {
      selection = letters;
    }
  //establishing empty array variable to be filled with the next statement
  let password= [];
  //Main password generating function. 'ask' variable is the original length prompt. 'selection' is a concatenated array of the confirmed prompts
  for (var i = 0; i < ask; i++) {
    var pickselection = selection[Math.floor(Math.random() * selection.length)];
    password.push(pickselection);
  }
//'password' variable is now a random number/symbol/letter array. A new variable is made using the join method with an empty string as the argument so the characters are concatenated next to each other.
var pw = password.join("");
    pass1(pw);
    return pw;
 }
 //Function to print the generated password into the text field
 function pass1(ps) {
  document.getElementById("password").innerHTML = ps;

}