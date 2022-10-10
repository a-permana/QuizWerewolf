function greetUser() {
    var gender, lastname;
  
    gender = prompt("are you a Male or Female? ");
    while (gender !== "Male" && gender !== "Female") {
      gender = prompt("Try again: Male or Female?");
    }
  
    lastname = prompt("And what is your last name?")
    while (lastname === '' || lastname.length < 4 || lastname === null) {
      lastname = prompt("Please try again. What is your last name?");
    }
  }
  
  greetUser();