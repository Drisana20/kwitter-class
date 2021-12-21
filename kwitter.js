function adduser(){
    user_name = document.getElementById("m8").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
    
}