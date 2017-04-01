var btnRed = document.getElementById("btn1");
var btnBlue = document.getElementById("btn2");
var btnOrange = document.getElementById("btn3");
var btnGreen = document.getElementById("btn4");
var Name = document.getElementById("fullName");


var words = ["+-+-+-+-", "+-+-+-+-", "+-+-+-+-", "+-+-+-+-", "+-+-+-+-", "+-+-+-+-", "+-+-+-+-", "+-+-+-+-", "+-+-+-+-", "+-+-+-+-"];

var colors = ["red","blue","green","orange"];


var questions = {
 
value: [
    "Select Red",
    "Select Green",
    "Select Blue",
    "Select Yellow",
    "Select Red",
    "Select Blue",
    "Select Yellow"
    ],
answers: [
                "red",
    "red",
    "blue",
    "blue",
    "orange",
    "orange",
    "green"
    ],
   
}
 
var index = 10;


function startTest() {
    displayWord();
}


function displayWord() {
    document.getElementById("dispMessage").innerHTML = "";
    if (index > 0) {
        var randColor = colors[Math.floor(Math.random() * colors.length)];
        var randWord = words[Math.floor(Math.random() * words.length)];
        document.getElementById("demo").style.color = randColor;
        document.getElementById("demo").innerHTML = randWord;
    }
    else {
        window.location.href = 'continueTest.1.html';
    }
    index--;
}
 
 

function writeRed() {
    var fireBaseRef = firebase.database().ref();

    fireBaseRef.child("Person2").child("Practice Test").set("");
    fireBaseRef.child("Person2").child("Practice Test").child("Word: coger").set("Displayed:RED, Selected:RED, Status:Correct, Time: 0:02");
    fireBaseRef.child("Person2").child("Practice Test").child("Word: pendejo").set("Displayed:BLUE, Selected:RED, Status:Incorrect, Time: 0:03");
    fireBaseRef.child("Person2").child("Practice Test").child("Word: mierda").set("Displayed:ORANGE, Selected:ORANGE, Status:Correct, Time: 0:01");
    fireBaseRef.child("Person2").child("Practice Test").child("Word: mear").set("Displayed:GREEN, Selected:GREEN, Status:Incorrect, Time: 0:04");
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

 
 
 
 
