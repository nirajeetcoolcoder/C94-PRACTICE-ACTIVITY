var firebaseConfig = {
    apiKey: "AIzaSyCwm0-3oAPLCL1yyaoUyHrcwWp5F1n5g9s",
    authDomain: "kwitter-f9f26.firebaseapp.com",
    databaseURL: "https://kwitter-f9f26-default-rtdb.firebaseio.com",
    projectId: "kwitter-f9f26",
    storageBucket: "kwitter-f9f26.appspot.com",
    messagingSenderId: "115223416589",
    appId: "1:115223416589:web:c34204a92ff65056d9aa44"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose : "new user is added here"
    });
}
