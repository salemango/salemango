  // Salem Mangum October 9 2024
    
  // JavaScript code for form validation

      // Variables
      inputField = document.getElementById('inputField');
      submitButton = document.getElementById('submit');
      myForm = document.getElementById('myForm');

      myForm.addEventListener("submit", function() { 
        inputValue = inputField.value; // Retrieve the input field value
        const alphanumeric = /\w/; // Regular expression pattern for alphanumeric input
        validationResult = alphanumeric.test(inputValue); // Check if the input value matches the pattern
        if (validationResult === true) { // Valid input: display confirmation and submit the form
          alert("Correct input! Thank you!");
          myForm.submit();
        }
        else {  // Invalid input: display error message
          alert ("There was an error with your input. Please try again.");
          event.preventDefault(); // Prevent form from submitting
        }     
      })
        

       