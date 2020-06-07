var userName;
if (userName == null) {
   userName = "friend";
}

getGreeting();

document.getElementById("settings-button").addEventListener('click', openSettings)
document.getElementById("name-form").addEventListener('submit', function(e) {
   e.preventDefault()
   changeName();
});

function openSettings() {
   document.getElementById("settings").classList.toggle("settings-open");
}
function saveName() {
    localStorage.setItem('receivedName', userName);
    var userName = localStorage.getItem('receivedName');
}
function changeName() {
   userName = document.getElementById("name-input").value;
   saveName();
   getGreeting();

}
function getGreeting() {
   document.getElementById("greeting").innerHTML  = `Hello, ${userName}. Enjoy your day!`;
}
