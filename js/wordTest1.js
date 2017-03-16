var btnRed = document.getElementById("btn1");
var btnBlue = document.getElementById("btn2");
var btnOrange = document.getElementById("btn3");
var btnGreen = document.getElementById("btn4");
var Name = document.getElementById("fullName");


var spanish1 = ["uno", "dos", "tres", "cuatro"];
var spanish2 = ["carro", "casa", "foco", "bote"];
var english1 = ["one", "two", "three", "four"];
var english2 = ["car", "house", "lightbulb", "bottle"];

var allWords = new Array();
allWords.push(spanish1, spanish2, english1, english2);
var currWord = ""



var colors = ["RED","BLUE","GREEN","ORANGE"];

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

var selectedWord = "";

function displayWord() {
    document.getElementById("dispMessage").innerHTML = "";
    var randColor = colors[Math.floor(Math.random() * colors.length)];
    
    var sp1 = spanish1[Math.floor(Math.random() * spanish1.length)];
    var sp2 = spanish2[Math.floor(Math.random() * spanish2.length)];
    var en1 = english1[Math.floor(Math.random() * english1.length)];
    var en2 = english2[Math.floor(Math.random() * english2.length)];

    var allW = allWords[Math.floor(Math.random() * allWords.length)];
    currWord = allW[Math.floor(Math.random() * allW.length)]

    document.getElementById("demo").style.color = randColor;
    document.getElementById("demo").innerHTML = currWord;

    //writeRed(); call the method and pass the current word and curent word, along with the time.
    /*Currently we are writing by clicking on the button "start" which should not be the case
    instead, try to write after each call of the method displayWord(). If that only writes
    the very LAST word selected, then create a "Continue" button shown ONLY at the end of the
    test, and call the writeRed() method (which should be renamed, by the way) as an onclick event
    from that "Continue" button. */ 
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

 
 
 
 
