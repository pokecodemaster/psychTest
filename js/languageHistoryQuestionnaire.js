var education = document.getElementById("education");
var countryOrigin = document.getElementById("countryOrigin");
var countryResidence = document.getElementById("countryResidence");
var q5A = document.getElementById("q5A");
var q5B = document.getElementById("q5B");
var nativeLang = document.getElementById("nativeLang");
var secondLang = document.getElementById("secondLang");
var yesx = document.getElementById("yesx");
var Q8home = document.getElementById("Q8home");
var Q8school = document.getElementById("Q8school");
var q8CheckBox = document.getElementById("q8CheckBox");

var submityBtn = document.getElementById("submitBtn");



function setVisible(elem) {

    if (elem.value == "No") {
        document.getElementById("yes").style.display = "none";
    }
    else if (elem.value == "Yes") {
        document.getElementById("yes").style.display = "block";
    }
}

function writeToDB() {

    var fireBaseRef = firebase.database().ref();


    fireBaseRef.child("Person2").set();
    fireBaseRef.child("Person2").child("3. Education:").set(education.value);
    fireBaseRef.child("Person2").child("4a. Country of Origin:").set(countryOrigin.value);
    fireBaseRef.child("Person2").child("4b. Country of Residence:").set(countryResidence.value);
    fireBaseRef.child("Person2").child("5a. How long lived in foreign country:").set(q5A.value);
    fireBaseRef.child("Person2").child("5b. How long lived in country of Residence:").set(q5B.value);
    fireBaseRef.child("Person2").child("6. Native Language:").set(nativeLang.value);
    fireBaseRef.child("Person2").child("7. Second Language:").set(secondLang.value);
    fireBaseRef.child("Person2").child("8. Yes, second language is:").set(yesx.value);
    fireBaseRef.child("Person2").child("At home::").set(Q8home.value);
    fireBaseRef.child("Person2").child("In School:").set(Q8school.value);
    fireBaseRef.child("Person2").child("Check all that apply:").set(q8CheckBox.value);
    alert("Write to DB");
}