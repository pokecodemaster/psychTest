var fireBaseRef = firebase.database().ref();
var uKey = document.cookie;
uKey = uKey.substring(0, uKey.length - 1);

function submitRaffleInfo() {

    var Age = document.getElementById("age").value;
    var Gender = document.getElementById("gender").value;

    fireBaseRef.child("Raffle Info").child(uKey).child("Age").set(Age);
    fireBaseRef.child("Raffle Info").child(uKey).child("Gender").set(Gender);

    window.location.href = 'endPage.html';
}
