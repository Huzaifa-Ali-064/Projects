const firebaseConfig = {
  apiKey: "AIzaSyB8ifSAClHwnngqrTHYBErA21KHESDYU1A",
  authDomain: "resumebuilder-d926e.firebaseapp.com",
  databaseURL: "https://resumebuilder-d926e-default-rtdb.firebaseio.com",
  projectId: "resumebuilder-d926e",
  storageBucket: "resumebuilder-d926e.appspot.com",
  messagingSenderId: "691156398457",
  appId: "1:691156398457:web:b311ed688f03e0d172ffa8",
  measurementId: "G-436EFX522F",
};

// firebase.initializeApp(firebaseConfig);

// function signup(event) {
//   event.preventDefault();
//   let email = document.getElementById("mygmail").value;
//   let password = document.getElementById("signup_password").value;

//   sessionStorage.setItem("mygmail", email);
//   sessionStorage.setItem("signup_password", password);
//   window.location.replace('signUp.html');
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(email, password)

//     .then((userCredential) => {
//       // User signed up successfully
//       const user = userCredential.user;
//       console.log("User signed up:", user);
//     })
//     .catch(
//       (error) => {
//         // Handle errors
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error("Error signing up:", errorCode, errorMessage);
//       }
//     );
// }

// document.addEventListener('DOMContentLoaded', function(){

//   let signinbtn= document.getElementById('signb');
//   if(signinbtn!==null){
//   signinbtn.addEventListener('click', function(){
//     signinbtn.disabled = false;

//   let email = document.getElementById("singG").value;
//   let password = document.getElementById("signP").value;
//   let em1 = sessionStorage.getItem("mygmail")
//   let ps1 = sessionStorage.getItem("signup_password")
//   firebase.auth().signInWithEmailAndPassword(email, password);
//     if (email === em1 && password === ps1) {
//       alert("You have successfully signed in");
//     } else if(email==='' && password===''){
//     document.getElementById("passmail").textContent= "Failed to Sign in";
//     }else{
//       alert("last")
//     }
//   });}
// });

firebase.initializeApp(firebaseConfig);
// Function to handle user signup
function signup(event) {
  event.preventDefault(); // Prevent default form submission

  let email = document.getElementById("mygmail").value;
  let password = document.getElementById("signup_password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
      console.log("User signed up:", user);
      alert("User signed up successfully!");
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing up:", errorCode, errorMessage);
      alert(errorMessage); // Display error message to the user
    });
}

document.addEventListener('DOMContentLoaded', function(){
  let signupForm = document.getElementById('signupForm');

  if (signupForm) {
    // Add event listener for form submission
    signupForm.addEventListener('submit', signup);
  }
});
// { <script type="module">
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyCMxxVoeAD8hq-0gnHaobIjqoLJ-KnNLJU",
//     authDomain: "build-resume-3b45a.firebaseapp.com",
//     projectId: "build-resume-3b45a",
//     storageBucket: "build-resume-3b45a.appspot.com",
//     messagingSenderId: "279065149140",
//     appId: "1:279065149140:web:9719ac588d4ab4a8f24541",
//     measurementId: "G-62VR2KV9PK"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
//   console.log(app)
//  </script> } 