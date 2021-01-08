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
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}