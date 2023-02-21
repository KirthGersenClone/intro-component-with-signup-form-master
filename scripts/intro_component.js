"use strict";

// Select the form and the input fields
const form = document.querySelector("form");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const eFormImg = document.querySelectorAll("form > div > img");
const eFormSpan = document.querySelectorAll("form > div > span");

// Add event listener to the form's submit button
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Check if each input field is valid
  if (validateInput(fname) && validateInput(lname) && validateEmail(email) && validatePassword(password)) {
    // Submit the form
    form.submit();
  }
});

// Function to validate a single input field
function validateInput(inputField) {
  if (inputField.value.trim() === "") {
    //Still struggling with the double equal sign
    if (inputField.id == "fname") {
      Fout(0);
    } else {
      Fout(1);
    }
    inputField.focus();
    return false;
  }
  // Still struggling with the double equal sign
  if (inputField.id == "fname") {
    geenFout(0);
  } else {
    geenFout(1);
  }
  return true;
}

// Function to validate the email input field
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    // if an error occurs render visible
    Fout(2);
    email.focus();
    return false;
  }
  geenFout(2);
  return true;
}

// Function to validate the password input field
function validatePassword(password) {
  if (password.value.length < 8) {
    Fout(3);
    password.focus();
    return false;
  }
  geenFout(3);
  return true;
}
function Fout(index) {
  eFormImg[index].style.visibility = "visible";
  eFormSpan[index].style.visibility = "visible";
}
function geenFout(index) {
  eFormImg[index].style.visibility = "hidden";
  eFormSpan[index].style.visibility = "hidden";
}
