
//ADD YOUR FIREBASE LINKS HERE
var  firebaseConfig = {
      apiKey: "AIzaSyC3OHXUpqoFRUNYXu_j8537FQDcoZUtdcM",
      authDomain: "kwitter-c678b.firebaseapp.com",
      projectId: "kwitter-c678b",
      databaseURL: "https://kwitter-c678b-default-rtdb.firebaseio.com",
      storageBucket: "kwitter-c678b.appspot.com",
      messagingSenderId: "546957514803",
      appId: "1:546957514803:web:251022e61ef2646b20eb46"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
var username=localStorage.getItem("username");
document.getElementById("myname").innerHTML="Welcome  "+  username+" !";
function addroom(){
      var roomname=document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
     purpose:"Adding room name" 
      });
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html";
}
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("Room_name",name);
window.location="kwitter_page.html";

}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}