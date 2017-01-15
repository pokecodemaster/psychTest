var mainText = document.getElementById("mainText");
var submityBtn = document.getElementById("submitBtn");

function storeInDB() {

    var fireBaseRef = firebase.database().ref();

    alert(mainText.value);
    fireBaseRef.child("Person2").set(mainText.value);
    fireBaseRef.child("Person2").child("Question1").set(mainText.value);
    
}