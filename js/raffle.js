var fireBaseRef = firebase.database().ref();




function submitRaffleInfo() {

    var Age = document.getElementById("age").value;
    var Gender = document.getElementById("gender").value;

    fireBaseRef.child("Raffle Info").child("Person2").child("Age").set(Age);
    fireBaseRef.child("Raffle Info").child("Person2").child("Gender").set(Gender);

    window.location.href = 'participantDemographics.html';
}
