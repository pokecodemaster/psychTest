var mname = document.getElementById("fullName").value;
var Participant = {
                name: mname ,
                score:"500",
                times:[],
                answers: [],
};
 
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
 
 
 
 
function displayNextQuestion(value) {
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
                var allResults = "Results for " + document.getElementById("fullName").value + "<br>";
    for(var i=0; i<Participant.times.length; i++)
    {
                allResults += questions.value[i] + ": " + Participant.times[i] + "<br>";
    }
                document.getElementById("results").innerHTML  = allResults;
}
 
 
 
 
