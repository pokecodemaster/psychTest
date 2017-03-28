var fireBaseRef = firebase.database().ref();

var uKey = document.cookie;
//uKey = uKey.substring(0, uKey.length - 1);

//Quita esta pinche linea ates de hacer el deploy!!!!!
//fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").set("");

function writeFromText(elem) {
    //get text from label
    var lblVal = document.getElementById("lbl" + elem.id).textContent;
    //alert(lblVal + "\n" + elem.value);
    var question = lblVal;
    var answer = elem.value;

    fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child(question).set(answer);

    //if (elem.id == "countryOrigin" || elem.id == "countryResidence") {
       // showQuestion3();
   // }

    
}

/*
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
}*/

function table8ToJson(idStr) {
    var table = document.getElementById(idStr);

    for (var i = 1; i < table.rows.length; i++) {
        var idName = "row" + i;
        var Row = document.getElementById(idName);
        var Cells = Row.getElementsByTagName("td");

        var langName = parseOutput(Cells[0].innerHTML);
        var readingVal = parseOutput(Cells[1].innerHTML);
        var writingVal = parseOutput(Cells[2].innerHTML);
        var speakingVal = parseOutput(Cells[3].innerHTML);
        var listeningVal = parseOutput(Cells[4].innerHTML);

        if (langName.length > 0) {
            fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child("-8 Languages known").child(langName).child("Reading").set(readingVal);
            fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child("-8 Languages known").child(langName).child("Writing").set(writingVal);
            fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child("-8 Languages known").child(langName).child("Speaking").set(speakingVal);
            fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child("-8 Languages known").child(langName).child("Listening").set(listeningVal);
        }


    }

    //alert(concatVal);
}

function table9ToJson(idStr) {
    var table = document.getElementById(idStr);

    for (var i = 1; i < table.rows.length; i++) {
        var idName = "row" + i;
        var Row = document.getElementById(idName);
        var Cells = Row.getElementsByTagName("td");

        var langName = parseOutput(Cells[0].innerHTML);
        var speakingVal = parseOutput(Cells[1].innerHTML);
        var readingVal = parseOutput(Cells[2].innerHTML);
        var writingVal = parseOutput(Cells[3].innerHTML);
        var numOfYears = parseOutput(Cells[4].innerHTML);

        if (langName.length > 0) {
            fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child("-9 Language Exposure").child(langName).child("Reading").set(readingVal);
            fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child("-9 Language Exposure").child(langName).child("Writing").set(writingVal);
            fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child("-9 Language Exposure").child(langName).child("Speaking").set(speakingVal);
            fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child("-9 Language Exposure").child(langName).child("Listening").set(numOfYears);
        }


    }

    //alert(concatVal);
}

function table10ToJson(idStr) {
    var table = document.getElementById(idStr);

    for (var i = 1; i < table.rows.length; i++) {
        var idName = "rows" + i;
        var Row = document.getElementById(idName);
        var Cells = Row.getElementsByTagName("td");

        var langName = parseOutput(Cells[0].innerHTML);
        var accentVal = parseOutput(Cells[1].innerHTML);
        var strengthVal = parseOutput(Cells[2].innerHTML);

        if (langName.length > 0) {
            fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child("-10 Accent Strength").child(langName).child("Accent").set(accentVal);
            fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child("-10 Accent Strength").child(langName).child("Strength").set(strengthVal);
        }


    }

    //alert(concatVal);
}

function parseOutput(str) {
    var parsStr = str.substr(24);
    parsStr = parsStr.replace("</div>", "");
    return parsStr;
}

function setVisible(elem) {

    if (elem.value == "No") {
        document.getElementById("yes").style.display = "none";
        document.getElementById("no").style.display = "block";
        document.getElementById("yesx").value = "";
        fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child("-5 Do you speak a second language?").set("NO");
    }
    else if (elem.value == "Yes") {
        document.getElementById("yes").style.display = "block";
        document.getElementById("no").style.display = "none";
        fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child("-5 Do you speak a second language?").set("Yes");
    }
}

function hideBlocks() {
    document.getElementById("no").style.display = "none";
    document.getElementById("yes").style.display = "none";
}

function goTo() {

    var isDone = document.getElementById("yesx").value;

    table8ToJson('langTable');
    table9ToJson('langTable9');
    table10ToJson('langTable10');

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
    window.location = "../html/debriefing.html";

}

function goToD() {
    window.location = "../html/debriefing.html";

}