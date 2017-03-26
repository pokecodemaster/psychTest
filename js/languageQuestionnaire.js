var fireBaseRef = firebase.database().ref();

var uKey = document.cookie;
uKey = uKey.substring(0, uKey.length - 1);

//Quita esta pinche linea ates de hacer el deploy!!!!!
//fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").set("");

function writeFromText(elem) {
    //get text from label
    var lblVal = document.getElementById("lbl" + elem.id).textContent;
    //alert(lblVal + "\n" + elem.value);
    var question = lblVal;
    var answer = elem.value;

    fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child(question).set(answer);

    if (elem.id == "countryOrigin" || elem.id == "countryResidence") {
        showQuestion3();
    }

    
}

function showQuestion3() {

    var ansOfA = document.getElementById("countryOrigin").value;
    var ansOfB = document.getElementById("countryResidence").value;
    var q5A = document.getElementById("lblq5A");

    if (ansOfA == ansOfB) {
        q5A.innerHTML = "-3 How long have you lived in a foreign country where your second language is spoken?";
    }
    else if (ansOfA != ansOfB) {
        q5A.innerHTML = "-3 How long have you lived in the country of your current residence?";
    }

    var question = document.getElementById("lblq5A").value;

    fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child(question).set(answer);
}

function setVisible(elem) {

    if (elem.value == "No") {
        document.getElementById("yes").style.display = "none";
        document.getElementById("no").style.display = "block";
        document.getElementById("yesx").value = "";
        fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child("5 Do you speak a second language?").set("NO");
    }
    else if (elem.value == "Yes") {
        document.getElementById("yes").style.display = "block";
        document.getElementById("no").style.display = "none";
        fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child("5 Do you speak a second language?").set("Yes");
    }
}

function hideBlocks() {
    document.getElementById("no").style.display = "none";
    document.getElementById("yes").style.display = "none";
}

function goTo() {

    var isDone = document.getElementById("yesx").value;

    if (isDone.length > 0) {
        //partB
        window.location = "../html/languageQuestionnaireB.html";
    }
    else {
        //debriefing page
        window.location = "../html/debriefing.html";
    }

}

function goToC() {
    window.location = "../html/languageQuestionnaireC.html";

}

function goToD() {
    window.location = "../html/debriefing.html";

}