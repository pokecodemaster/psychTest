var fireBaseRef = firebase.database().ref();

var d = new Date();
var KEY = d.getTime();

//document.cookie = KEY;

//localStorage.setItem("storageName", KEY);


function submitForm() {

    document.cookie = KEY;

    var email = "myemaizl@email.com";
    var password = "mypassword";

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        
        console.log(error.code);
        console.log(error.message);
    });
    console.log('winners and gonads');
    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
        
        console.log(error.code);
        console.log(error.message);
        alert('winners and gonads');
    });
    console.log('winners and gonadzz');
    var Name = document.getElementById("name").value;
    var Age = document.getElementById("age").value;
    fireBaseRef.child("<Name to UID> Map").child(Name).set(KEY);

    window.location.href = 'participantDemographics.html';
}



