// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD1ZOCjcrCbOEJMKnETa9QqsvqZWAZS71E",
    authDomain: "kwitter-6d422.firebaseapp.com",
    databaseURL: "https://kwitter-6d422-default-rtdb.firebaseio.com",
    projectId: "kwitter-6d422",
    storageBucket: "kwitter-6d422.appspot.com",
    messagingSenderId: "572248421917",
    appId: "1:572248421917:web:0aea69aaad221c1a0938f4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}

