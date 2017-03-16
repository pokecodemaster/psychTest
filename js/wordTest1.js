var btnRed = document.getElementById("btn1");
var btnBlue = document.getElementById("btn2");
var btnOrange = document.getElementById("btn3");
var btnGreen = document.getElementById("btn4");
var Name = document.getElementById("fullName");


var spanish1 = ["uno", "dos", "tres", "cuatro"];
var spanish2 = ["carro", "casa", "foco", "bote"];
var english1 = ["one", "two", "three", "four"];
var english2 = ["car", "house", "lightbulb", "bottle"];

var colors = ["red","blue","green","orange"];

//Randomizer
function showMessage() {

var sp1 = spanish1[Math.floor(Math.random() * spanish1.length)];
var sp2 = spanish2[Math.floor(Math.random() * spanish2.length)];
var en1 = english1[Math.floor(Math.random() * english1.length)];
var en2 = english2[Math.floor(Math.random() * english2.length)];

var postmessage = sp1 + " - " + sp2 + " - " + en1 + " - " + en2;
document.getElementById("par").innerHTML = postmessage

}
//end randomizer
var index = 0;


function startTest() {
    displayWord();
}


function displayWord() {
    var randColor = colors[Math.floor(Math.random() * colors.length)];
    
    var sp1 = spanish1[Math.floor(Math.random() * spanish1.length)];
    var sp2 = spanish2[Math.floor(Math.random() * spanish2.length)];
    var en1 = english1[Math.floor(Math.random() * english1.length)];
    var en2 = english2[Math.floor(Math.random() * english2.length)];

    var randCombo = sp1 + " - " + sp2 + " - " + en1 + " - " + en2;

    document.getElementById("demo").style.color = randColor;
    document.getElementById("demo").innerHTML = randCombo;
}
 
 

function writeRed() {
    var fireBaseRef = firebase.database().ref();

    fireBaseRef.child("Person2").child("WordTest 1").set("");
    fireBaseRef.child("Person2").child("WordTest 1").child("Word: coger").set("Displayed:RED, Selected:RED, Status:Correct, Time: 0:02");
    fireBaseRef.child("Person2").child("WordTest 1").child("Word: pendejo").set("Displayed:BLUE, Selected:RED, Status:Incorrect, Time: 0:03");
    fireBaseRef.child("Person2").child("WordTest 1").child("Word: mierda").set("Displayed:ORANGE, Selected:ORANGE, Status:Correct, Time: 0:01");
    fireBaseRef.child("Person2").child("WordTest 1").child("Word: mear").set("Displayed:GREEN, Selected:GREEN, Status:Incorrect, Time: 0:04");
}
 
 
function displayNextQuestion(value) {
   
}
 
function logAnswer(value){
                Participant.times.push(value);
}
 
function showResults() {
                var mname = document.getElementById("fullName").value;
                var allResults = "Results for " + Name.value + "<br>";
    for(var i=0; i<Participant.times.length; i++)
    {
                allResults += questions.value[i] + ": " + Participant.times[i] + "<br>";
    }
    document.getElementById("results").innerHTML = allResults;
    //window.location.href = "languageQuestionaire.html";
}

 
 
 
 
