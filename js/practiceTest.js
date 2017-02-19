var btnRed = document.getElementById("btn1");
var btnBlue = document.getElementById("btn2");
var btnOrange = document.getElementById("btn3");
var btnGreen = document.getElementById("btn4");
var Name = document.getElementById("fullName");


var mname = document.getElementById("fullName").value;
var Participant = {
                name: mname ,
                score:"500",
                times:[],
                answers: [],
};
 

var fireBaseRef = firebase.database().ref();


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
 
var index = 0;
 
 

function writeRed() {
    var fireBaseRef = firebase.database().ref();

    fireBaseRef.child("Person2").child("Practice Test").set("");
    fireBaseRef.child("Person2").child("Practice Test").child("Question" + (index + 1)).set("RED");
}
 
 
function displayNextQuestion(value) {
    
    if (index == 0) {
        fireBaseRef.child(Name.value).child("Practice Test").set("");
    }

    if (value == "red") {

        
        fireBaseRef.child(Name.value).child("Practice Test").child("Question " + (index + 1)).set("RED");
    }

    else if (value == "blue") {
        
        fireBaseRef.child(Name.value).child("Practice Test").child("Question " + (index + 1)).set("BLUE");
    }

    else if (value == "orange") {
        
        fireBaseRef.child(Name.value).child("Practice Test").child("Question " + (index + 1)).set("ORANGE");
    }

    else if (value == "green") {
        
        fireBaseRef.child(Name.value).child("Practice Test").child("Question " + (index + 1)).set("GREEN");
    }

    if(index >= questions.value.length) {
                document.getElementById("content").innerHTML  = "Questions ended";
                showResults();
    }
    else {
                document.getElementById("content").innerHTML  = questions.value[index];
                                document.getElementById("selectedValue").innerHTML  = value;
                logAnswer(value);
                index++;
    }
   
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
    window.location.href = "languageQuestionaire.html";
}

 
 
 
 
