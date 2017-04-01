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

function tableToJson5(idStr) {
    var table = document.getElementById(idStr);
    var question = document.getElementById("lbl" + idStr).textContent;
    var concatVal = question + "\n";

    var title1 = table.rows[0].cells[1].innerHTML;
    var title2 = table.rows[0].cells[2].innerHTML;
    var title3 = table.rows[0].cells[3].innerHTML;
    var title4 = table.rows[0].cells[4].innerHTML;

    for (var i = 1; i < table.rows.length; i++) {
        var idName = idStr + "row" + i;
        var Row = document.getElementById(idName);
        var Cells = Row.getElementsByTagName("td");

        var langName = parseStr(Cells[0].innerHTML);
        var cellVal1 = parseStr(Cells[1].innerHTML);
        var cellVal2 = parseStr(Cells[2].innerHTML);
        var cellVal3 = parseStr(Cells[3].innerHTML);
        var cellVal4 = parseStr(Cells[4].innerHTML);

        if (langName.length > 0) {
            concatVal = concatVal + langName + ":\n" + title1 + ": " + cellVal1 + "\n" + title2 + ": " + cellVal2 + "\n" + title3 + ": " + cellVal3 + "\n" + title4 + ": " + cellVal4 + "\n\n";
            fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child(question).child(langName).child(title1).set(cellVal1);
            fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child(question).child(langName).child(title2).set(cellVal2);
            fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child(question).child(langName).child(title3).set(cellVal3);
            fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child(question).child(langName).child(title4).set(cellVal4);
        }

    }

   // alert(concatVal + "\n\n");
}

function tableToJson3(idStr) {
    var table = document.getElementById(idStr);
    var question = document.getElementById("lbl" + idStr).textContent;
    var concatVal = question + "\n";

    var title1 = table.rows[0].cells[1].innerHTML;
    var title2 = table.rows[0].cells[2].innerHTML;

    for (var i = 1; i < table.rows.length; i++) {
        var idName = idStr + "row" + i;
        var Row = document.getElementById(idName);
        var Cells = Row.getElementsByTagName("td");

        var langName = parseStr(Cells[0].innerHTML);
        var cellVal1 = parseStr(Cells[1].innerHTML);
        var cellVal2 = parseStr(Cells[2].innerHTML);

        if (langName.length > 0) {
            concatVal = concatVal + langName + ":\n" + title1 + ": " + cellVal1 + "\n" + title2 + ": " + cellVal2 + "\n\n";
            fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child(question).child(langName).child(title1).set(cellVal1);
            fireBaseRef.child("Participants Data").child(uKey).child("Language History Questionnaire").child(question).child(langName).child(title2).set(cellVal2);
        }

    }

    //alert(concatVal + "\n\n");
}

function parseStr(strIn) {

    if (strIn.length > 20) {
        strIn = strIn.substr(24);
        strIn = strIn.replace("</div>", "");
        strIn = strIn.replace("<br", "");
        strIn = strIn.replace(">", "");

    }

    return strIn;
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

    tableToJson5('table8');
    tableToJson5('table9');
    tableToJson3('table10');

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

    tableToJson3('table22');
    tableToJson3('table23');
    tableToJson3('table26');

    window.location = "../html/debriefing.html";

}

function goToD() {
    window.location = "../html/debriefing.html";

}