var fireBaseRef = firebase.database().ref();

var uKey = document.cookie;
uKey = uKey.substring(0, uKey.length - 1);

function writeFromText(elem) {
    //get text from label
    var lblVal = document.getElementById("lbl" + elem.id).textContent;
    alert(lblVal + "\n" + elem.value);

    /*if (elem.id == "q5A") {
        showQuestion5();
    }*/

    fireBaseRef.child("Participants Data").child("Person2").child("Language History Questionnaire").child(lblVal).set(elem.value);
}

function showQuestion5() {

    var ansOfA = document.getElementById("countryOrigin").valueOf;
    var ansOfB = document.getElementById("countryResidence").valueOf;
    var q5A = document.getElementById("lblq5A");

    if (ansOfA == ansOfB) {
        q5A.innerHTML = "3. How long have you lived in a foreign country where your second language is spoken?";

    }




}