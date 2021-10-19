// VALIDATE FORM using Constraint Validation API
const myForm = document.querySelector(".contact-form");
const emailField = document.getElementById("email");
const nameField = document.getElementById("name");
const errorMessage = document.querySelector(".error");

let nameValidityState = nameField.validity;

myForm.noValidate = true;

document.addEventListener('blur', function(event){
  let error = hasError(event.target);
  //If there's an error, show it
  if (error) {
      showError(event.target, error);
      return;
  }
  // Otherwise, remove any existing error message
  removeError(event.target);

}, true);

let hasError = function(field){
  // Don't validate submit
  if (field.type === 'submit') return;

  // Get validity
  let validity = field.validity;

  // If valid, return null
  if(validity.valid) return;

  // If field is required and empty
  if (validity.valueMissing) return 'Please fill out this field.';

  // If not the right type
  if (validity.typeMismatch) {
    if (field.type === 'email') return 'Please enter an email address.';
}

  // If all else fails, return a generic catchall error
  return 'The value you entered for this field is invalid.';

};

let showError = function(field, error){
  // Add error class to field
  field.classList.add('error');

  // Get field id
  let id = field.id;
  if (!id) return;
  

// Check if error message field already exists
  // If not, create one
  let message = field.form.querySelector('.error-message#error-for-' + id );
  if (!message) {
      message = document.createElement('div');
      message.className = 'error-message';
      message.id = 'error-for-' + id;
      field.parentNode.insertBefore( message, field.nextSibling );
  }

  // Add ARIA role to the field
  field.setAttribute('aria-describedby', 'error-for-' + id);

  // Update error message
  message.innerHTML = error;

  // Show error message
  message.style.display = 'block';
  message.style.visibility = 'visible';
};

let removeError = function(field){
  
    // Remove error class to field
    field.classList.remove('error');

    // Remove ARIA role from the field
    field.removeAttribute('aria-describedby');

    // Get field id
    let id = field.id;
    if (!id) return;

    // Check if an error message is in the DOM
    let message = field.form.querySelector('.error-message#error-for-' + id + '');
    if (!message) return;

    // If so, hide it
    message.innerHTML = '';
    message.style.display = 'none';
    message.style.visibility = 'hidden';
}

// Check all fields on submit
document.addEventListener('submit', function (event) {

  // Get all of the form elements
  let fields = event.target.elements;

  // Validate each field
  // Store the first field with an error to a variable so we can bring it into focus later
  let error, hasErrors;
  for (let i = 0; i < fields.length; i++) {
      error = hasError(fields[i]);
      if (error) {
          showError(fields[i], error);
          if (!hasErrors) {
              hasErrors = fields[i];
          }
      }
  }

  // If there are errrors, don't submit form and focus on first element with error
  if (hasErrors) {
      event.preventDefault();
      hasErrors.focus();
  }

}, false);




