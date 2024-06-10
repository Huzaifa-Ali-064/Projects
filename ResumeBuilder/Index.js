function submitInput() {
  // Get the user input

  // First Name
  let userInput = document.getElementById("fn").value;
  // Store the user input in localStorage
  localStorage.setItem("fn", userInput);

  // Last Name
  let userInput2 = document.getElementById("ln").value;
  // Store the user input in localStorage
  localStorage.setItem("ln", userInput2);

  // Gmail
  let gmail01 = document.getElementById("gm").value;
  localStorage.setItem("gm", gmail01);

  // Address
  let adr = document.getElementById("addr").value;
  localStorage.setItem("addr", adr);

  // Phone Number
  let phone = document.getElementById("cn").value;
  localStorage.setItem("cn", phone);

  // Experience
  let exp = document.getElementById("da").value;
  localStorage.setItem("da", exp);

  // Expertise
  let expertise = document.getElementById("ex").value;
  localStorage.setItem("ex", expertise);

  // Education
  let educa = document.getElementById("ed").value;
  localStorage.setItem("ed", educa);

  //Language
  let langu = document.getElementById("lang").value;
  localStorage.setItem("lang", langu);

  //About yourself
  let about = document.getElementById("ab").value;
  localStorage.setItem("ab", about);

  //Dynamics input fields
  let lang1 = document.getElementById("input_A").value;
  localStorage.setItem("input_A", lang1);

  let lang2 = document.getElementById("input_B").value;
  localStorage.setItem("input_B", lang2);

  let lang3 = document.getElementById("input_C").value;
  localStorage.setItem("input_C", lang3);

  let lang4 = document.getElementById("input_D").value;
  localStorage.setItem("input_D", lang4);

  let lang5 = document.getElementById("input_E").value;
  localStorage.setItem("input_E", lang5);

  let lang6 = document.getElementById("input_F").value;
  localStorage.setItem("input_E", lang6);

  let lang7 = document.getElementById("input_G").value;
  localStorage.setItem("input_G", lang7);

  let lang8 = document.getElementById("input_H").value;
  localStorage.setItem("input_H", lang8);

  // Redirect to the Resume1.html file
  window.location.href = "Resume1.html";
}

// function submitInput() {
//   const requiredFields = ['fn', 'ln', 'gm', 'cn', 'addr', 'ed', 'ex', 'ab', 'da', 'lang'];
//   let isValid = true;

//   for (let id of requiredFields) {
//       const element = document.getElementById(id);
//       if (!element.value) {
//           isValid = false;
//           element.style.borderColor = 'red';
//       } else {
//           element.style.borderColor = '';
//       }
//   }

//   if (!isValid) {
//       document.getElementById('validation').textContent = 'Please fill in all required fields.';
//       return false;
//   }

//   // Store values in localStorage
//   const fieldsToStore = [...requiredFields, 'sk'];
//   for (let id of fieldsToStore) {
//       storeInLocalStorage(id);
//   }

//   // Dynamically added fields
//   for (let i = 0; i < 8; i++) {
//       storeInLocalStorage(`input_${String.fromCharCode(65 + i)}`);
//   }

//   // Redirect to the Resume1.html file
//   window.location.href = "Resume1.html";
//   return false; // Prevent form submission
// }

// function addInput() {
//   // Add your logic to add input fields
// }

// function removeInput() {
//   // Add your logic to remove input fields
// }

document.addEventListener("DOMContentLoaded", function () {
  // First Name
  let userInput = localStorage.getItem("fn");
  // Display the user input
  let outputText = document.getElementById("h12");
  // outputText.textContent = userInput;
  outputText ? (outputText.textContent = userInput) : "";
  localStorage.removeItem("fn");

  // Last Name
  let userInput2 = localStorage.getItem("ln");
  let outputText2 = document.getElementById("ln1");
  // outputText2.textContent = userInput2;
  outputText2 ? (outputText2.textContent = userInput2) : "";
  localStorage.removeItem("ln");

  // Gmail
  let gmailInput1 = localStorage.getItem("gm");
  let gmailOutput1 = document.getElementById("em");
  // gmailOutput1.textContent = gmailInput1;
  gmailOutput1 ? (gmailOutput1.textContent = gmailInput1) : "";
  localStorage.removeItem("gm");

  // Phone Number
  let userInput3 = localStorage.getItem("cn");
  let outputText3 = document.getElementById("phN0");
  // outputText3.textContent = userInput3;
  outputText3 ? (outputText3.textContent = userInput3) : "";
  localStorage.removeItem("cn");

  // Address
  let addressin = localStorage.getItem("addr");
  let addressout = document.getElementById("adrs");
  // addressout.textContent = addressin;
  addressout ? (addressout.textContent = addressin) : "";
  localStorage.removeItem("addr");

  // Educational background
  let eduin = localStorage.getItem("ed");
  let eduout = document.getElementById("education1");
  // eduout.textContent = eduin;
  eduout ? (eduout.textContent = eduin) : "";
  localStorage.removeItem("ed");

  //Experience
  let expin = localStorage.getItem("da");
  let expout = document.getElementById("exper");
  // expout.textContent = expin;
  expout ? (expout.textContent = expin) : "";

  localStorage.removeItem("da");

  //Experties
  let experin = localStorage.getItem("ex");
  let experout = document.getElementById("skid");
  // experout.textContent = experin;
  experout ? (experout.textContent = experin) : "";

  localStorage.removeItem("ex");

  //About yourself
  let aboutin = localStorage.getItem("ab");
  let aboutout = document.getElementById("aboutme");
  // aboutout.textContent = aboutin;
  aboutout ? (aboutout.textContent = aboutin) : "";

  localStorage.removeItem("ab");

  //Language
  let lanin = localStorage.getItem("lang");
  let langout = document.getElementById("skills");
  // langout.textContent = lanin;
  langout ? (langout.textContent = lanin) : "";
  localStorage.removeItem("lang");

  let langin1 = localStorage.getItem("input_A");
  let langout1 = document.getElementById("lan01");
  // langout1.textContent =langin1;
  langout1 ? (langout1.textContent = langin1) : "";
  localStorage.removeItem("input_A");

  let langin2 = document.getElementById("input_B");
  let langout2 = document.getElementById("lan02");
  langout2 ? (langout2.textContent = langin2) : "";

  localStorage.removeItem("input_B");

  let langin3 = localStorage.getItem("input_C");
  let langout3 = document.getElementById("lan03");
  langout3 ? (langout3.textContent = langin3) : "";
  localStorage.removeItem("input_C");

  let langin4 = localStorage.getItem("input_D");
  let langout4 = document.getElementById("lan04");
  langout4 ? (langout4.textContent = langin4) : "";
  localStorage.removeItem("input_C");

  let langin5 = localStorage.getItem("input_E");
  let langout5 = document.getElementById("lan05");
  langout5 ? (langout5.textContent = langin5) : "";
  localStorage.removeItem("input_E");

  let langin6 = localStorage.getItem("input_F");
  let langout6 = document.getElementById("lan06");
  langout6 ? (langout6.textContent = langin6) : "";
  localStorage.removeItem("input_F");

  let langin7 = localStorage.getItem("input_G");
  let langout7 = document.getElementById("lan07");
  langout7 ? (langout7.textContent = langin7) : "";
  localStorage.removeItem("input_G");

  let langin8 = localStorage.getItem("input_H");
  let langout8 = document.getElementById("lan08");
  langout8 ? (langout8.textContent = langin8) : "";
  localStorage.removeItem("input_H");
});

function uploadImage() {
  var input = document.getElementById("imageInput");
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      localStorage.setItem("uploadedImage", e.target.result);
      window.location.href = "Resume1.html";
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function validateImage() {
  var fileInput = document.getElementById("imageInput");
  var errorMessages = document.getElementById("errorMessages");
  errorMessages.textContent = ""; // Clear previous error messages

  if (fileInput.files.length === 0) {
    errorMessages.textContent = "Please select an image to upload.";
    return false;
  }

  var file = fileInput.files[0];
  var allowedTypes = ["image/jpeg", "image/png", "image/gif"];

  if (!allowedTypes.includes(file.type)) {
    errorMessages.textContent =
      "Unsupported image type. Please upload a JPEG, PNG, or GIF.";
    return false;
  }

  var maxSizeInBytes = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSizeInBytes) {
    errorMessages.textContent = "Image size exceeds the maximum allowed (5MB).";
    return false;
  }

  errorMessages.textContent = "Image is valid and can be uploaded.";
  return true;
}

function removeImage() {
  localStorage.removeItem("uploadedImage");
}

document.addEventListener("DOMContentLoaded", function () {
  var imageData = localStorage.getItem("uploadedImage");
  var displayImage = document.getElementById("displayImage");

  if (displayImage) {
    displayImage.src = imageData ? imageData : "placeholder.jpg";
  }
  localStorage.removeItem("uploadedImage");
});

function combinationfun() {
  uploadImage();
  submitInput();
  // getNewInputId();
  removeImage();
}

let currentAlphabet = 65;

function addInput() {
  const inputContainer = document.getElementById("inputContainer");
  const validationMessage = document.getElementById("validation");

  if (currentAlphabet < 72) {
    const newInput = document.createElement("input");
    const currentCharacter = String.fromCharCode(currentAlphabet);

    newInput.type = "text";
    (newInput.name = "dynamicInput[]"), "<br>";
    newInput.placeholder = "Enter the new experience";

    // Generate a unique ID using the current character and a prefix
    newInput.id = "input_" + currentCharacter;

    // Print the generated ID to the console
    console.log("Generated ID: " + newInput.id);

    inputContainer.appendChild(newInput);
    currentAlphabet++;
    validationMessage.textContent = "";
  } else {
    validationMessage.textContent = "You cannot enter more skills";
  }
}
function removeInput() {
  const inputContainer = document.getElementById("inputContainer");
  const inputFields = inputContainer.getElementsByTagName("input");

  if (inputFields.length > 0) {
    inputContainer.removeChild(inputFields[inputFields.length - 1]);

    currentAlphabet--;

    document.getElementById("validation").textContent = "";
  } else {
    document.getElementById("validation").textContent =
      "No input fields to remove";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let passwordInput = document.getElementById("signup_password");
  let showPasswordCheckbox = document.getElementById("showPassword");
  let email = document.getElementById("gmail");
  let name = document.getElementById("mname");
  let repass = document.getElementById("repass");
  let signup = document.getElementById("btn");

  if (showPasswordCheckbox !== null) {
    showPasswordCheckbox.addEventListener("change", function () {
      passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
      repass.type = showPasswordCheckbox.checked ? "text" : "password";
    });
  }

  if (signup !== null) {
    signup.addEventListener("click", function () {
      let password = passwordInput.value;
      let repeatpass = repass.value;
      let supemail = email.value;

      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(supemail);

      const validName = name.value.trim() !== "";

      const validPasswordLength = password.length >= 8;

      document.getElementById("namemsg").textContent = !validName
        ? "Please enter your name"
        : "";
      document.getElementById("emailmsg").textContent = !validEmail
        ? "Invalid email format"
        : "";
      document.getElementById("passlength").textContent = !validPasswordLength
        ? "Password must be at least 8 characters long"
        : "";
      document.getElementById("whenpassempty").textContent =
        password === "" && repeatpass === "" ? "Please enter the password" : "";
      document.getElementById("passnotmatch").textContent =
        password !== repeatpass ? "Passwords do not match" : "";

      // Show success message and clear messages after a delay
      if (
        validName &&
        validEmail &&
        validPasswordLength &&
        password === repeatpass
      ) {
        alert("Congratulations");
        setTimeout(function () {
          clearMessages();
        }, 2000);
      }
    });
  }

  // Function to clear error messages
  function clearMessages() {
    document.getElementById("whenpassempty").textContent = "";
    document.getElementById("passnotmatch").textContent = "";
    document.getElementById("passwordMatchMessage").textContent = "";
    document.getElementById("emailmsg").textContent = "";
    document.getElementById("namemsg").textContent = "";
    document.getElementById("passlength").textContent = "";
  }
});

// function signUP(){
//   window.location.replace("signUP.html");
// }
// function signIn() {
//   window.location.replace("SignIn.html");
// }

function redirectTo(targetPage) {
  window.location.replace(targetPage);
}
function convertToPDF() {
  // Get the HTML element to be converted
  const element = document.getElementById("pdfContent");

  html2pdf(element);
}
