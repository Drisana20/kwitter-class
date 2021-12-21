const firebaseConfig = {
  apiKey: "AIzaSyConoyuwLD7f9iAeVrQGZh8kpjYgku2Gdk",
  authDomain: "kwitter1-16e6b.firebaseapp.com",
  databaseURL: "https://kwitter1-16e6b-default-rtdb.firebaseio.com",
  projectId: "kwitter1-16e6b",
  storageBucket: "kwitter1-16e6b.appspot.com",
  messagingSenderId: "620990578465",
  appId: "1:620990578465:web:2bffcdb101e9a8fc188860"
};
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("q3").innerHTML = " welcome "+ user_name +"!";
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name"+ Room_names);
row = "<div class ='room_name' id="+Room_names +" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}