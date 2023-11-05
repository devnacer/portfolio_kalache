const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const subject = document.getElementById("subject");
const email = document.getElementById("email");
const message = document.getElementById("message");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check if email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listener for form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([nameInput, subject, email, message]);
  checkLength(nameInput, 2, 55);
  checkLength(subject, 15, 255);
  checkLength(message, 5, 1000);
  checkEmail(email);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    checkRequired([nameInput, subject, email, message]) &&
    checkLength(nameInput, 2, 55) &&
    checkLength(subject, 15, 255) &&
    checkLength(message, 5, 1000) &&
    checkEmail(email)
  ) {
    // If all validations succeed, submit the form
    form.submit();
  } else {
    // If validations fail, do not submit the form and display an error message
    console.log("The form contains errors. Please correct the fields.");
  }
});
