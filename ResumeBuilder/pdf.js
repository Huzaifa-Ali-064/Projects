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

firebase.initializeApp(firebaseConfig);

function signup(event) {
  event.preventDefault();
  let email = document.getElementById("mygmail").value;
  let password = document.getElementById("signup_password").value;

  sessionStorage.setItem("mygmail", email);
  sessionStorage.setItem("signup_password", password);
  window.location.replace("signUp.html");
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)

    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
      console.log("User signed up:", user);
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing up:", errorCode, errorMessage);
    });
}
