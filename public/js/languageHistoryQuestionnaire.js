var education = document.getElementById("education");
var countryOrigin = document.getElementById("countryOrigin");
var countryResidence = document.getElementById("countryResidence");
var q5A = document.getElementById("q5A");
var q5B = document.getElementById("q5B");
var nativeLang = document.getElementById("nativeLang");
var secondLang = document.getElementById("secondLang");
var yesx = document.getElementById("yesx");
var Q8home = document.getElementById("home");
var Q8school = document.getElementById("school");
var q8CheckBox = document.getElementById("q8CheckBox");

var submityBtn = document.getElementById("submitBtn");

var myName = document.getElementById("name");
var lwriting = document.getElementById("writing");
var llistening = document.getElementById("listening");
var lreading = document.getElementById("reading");
var table = document.getElementById("myTableData");
var addBtn = document.getElementById("add");




function addRow() {

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML = '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML = myName.value.toUpperCase();
    row.insertCell(2).innerHTML = lwriting.value;
    row.insertCell(3).innerHTML = llistening.value;
    row.insertCell(4).innerHTML = lreading.value;

    myName.value = "";
    lwriting.value = "";
    llistening.value = "";
    lreading.value = "";
    //table.value="";
    addBtn.disabled = true;
}

function enableAdd() {
    if (myName.value != "" && lwriting.value != "" && llistening.value != "") {
        addBtn.disabled = false;
    }

}
function deleteRow(obj) {

    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);

}

function setVisible(elem) {

    if (elem.value == "No") {
        document.getElementById("yes").style.display = "none";
    }
    else if (elem.value == "Yes") {
        document.getElementById("yes").style.display = "block";
    }
}

function showQuestion5() {

    var ansOfA = document.getElementById("countryOrigin").valueOf;
    var ansOfB = document.getElementById("countryResidence").valueOf;
    var q5A = document.getElementById("q5Label");

    if (ansOfA == ansOfB) {
        q5A.innerHTML = "3. How long have you lived in a foreign country where your second language is spoken?";
        
    }




}

function writeToDB() {

    var fireBaseRef = firebase.database().ref();

    var mtable = $('#langTable').tableToJSON();


    fireBaseRef.child("Person2").set("");
    fireBaseRef.child("Person2").child( "3) Education").set(education.value);
    fireBaseRef.child("Person2").child("4a) Country of Origin").set(countryOrigin.value);
    fireBaseRef.child("Person2").child("4b) Country of Residence").set(countryResidence.value);
    fireBaseRef.child("Person2").child("5a) How long lived in foreign country").set(q5A.value);
    fireBaseRef.child("Person2").child("5b) How long lived in country of Residence").set(q5B.value);
    fireBaseRef.child("Person2").child("6) Native Language").set(nativeLang.value);
    fireBaseRef.child("Person2").child("7) Second Language").set(secondLang.value);
    fireBaseRef.child("Person2").child("8) Yes, second language is").set(yesx.value);
    fireBaseRef.child("Person2").child("8a) At home").set(Q8home.value);
    fireBaseRef.child("Person2").child("8b) In School").set(Q8school.value);
    fireBaseRef.child("Person2").child("8c) Check all that apply").set(q8CheckBox.value);
    fireBaseRef.child("Person2").child("8d) Language List").set(mtable);

    alert("Write to DB");
}