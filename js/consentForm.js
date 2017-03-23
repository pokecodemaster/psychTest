var fireBaseRef = firebase.database().ref();

var d = new Date();
var KEY = d.getTime();




function submitForm() {

    var Name = document.getElementById("name").value;
    var Age = document.getElementById("age").value;
    fireBaseRef.child("<Name to UID> Map").child(Name).set(KEY);

    window.location.href = '../html/participantDemographics.html';
}



