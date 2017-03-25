var fireBaseRef = firebase.database().ref();




function submitRaffleInfo() {

    var Age = document.getElementById("age").value;
    var Gender = document.getElementById("gender").value;

    fireBaseRef.child("Person2").child("Raffle Info").child("Age").set(Age);
    fireBaseRef.child("Person2").child("Raffle Info").child("Gender").set(Gender);

    window.location.href = 'participantDemographics.html';
}
