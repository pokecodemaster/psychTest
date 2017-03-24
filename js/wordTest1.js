var btnRed = document.getElementById("btn1");
var btnBlue = document.getElementById("btn2");
var btnOrange = document.getElementById("btn3");
var btnGreen = document.getElementById("btn4");
var Name = document.getElementById("fullName");

var fireBaseRef = firebase.database().ref();

var spanish1 = ["uno", "dos", "tres", "cuatro"];
var spanish2 = ["carro", "casa", "foco", "bote"];
var english1 = ["one", "two", "three", "four"];
var english2 = ["car", "house", "lightbulb", "bottle"];

var allWords = new Array();
allWords.push(spanish1, spanish2, english1, english2);
var currWord = ""

var selectedWords = new Array();
selectedWords.push("");

var selectedColors = new Array();
selectedColors.push("");

var colors = ["RED", "BLUE", "GREEN", "ORANGE"];

var index = 10;

var selectedWord = "";

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


function displayWord(sel) {
    
    document.getElementById("dispMessage").innerHTML = "";
    var randColor = colors[Math.floor(Math.random() * colors.length)];
    
    var sp1 = spanish1[Math.floor(Math.random() * spanish1.length)];
    var sp2 = spanish2[Math.floor(Math.random() * spanish2.length)];
    var en1 = english1[Math.floor(Math.random() * english1.length)];
    var en2 = english2[Math.floor(Math.random() * english2.length)];

    var allW = allWords[Math.floor(Math.random() * allWords.length)];
    currWord = allW[Math.floor(Math.random() * allW.length)]

    selectedWords.push(currWord);
    selectedColors.push(randColor);

    document.getElementById("demo").style.color = randColor;
    document.getElementById("demo").innerHTML = currWord;

    if (index > 0) {

        writeToDB(selectedWords[selectedWords.length - 2], sel.value, selectedColors[selectedColors.length - 2]);
    }
    else {
        window.location.href = 'continueTest.2.html';
    }
    index--;
    

}

function writeToDB(currWord, selColor, randColor) {
    var status = "INCORRECT";

    if (currWord != "") {
        if (selColor == randColor) {
            status = "CORRECT";
        }
        fireBaseRef.child("Person2").child("WordTest 1").child("Word: " + currWord.toUpperCase()).set("Displayed: " + selColor + " , Selected: " + randColor + ", Status: " + status + ", Time: 0:02");
    }
    
}

/*
<!DOCTYPE html>
<html>
<body>

<p>A script on this page starts this clock:</p>

<h2 id="timer"></h2>

<script>
var myVar = setInterval(myTimer, 1000);
var s = new Date();

function myTimer() {
    var d = new Date();
    var t = Math.round(Math.abs(d-s)/1000);
    
    if(t < 10) {
    	document.getElementById("timer").innerHTML = "00:0" + t;
    }
    else if(t < 60) {
    	document.getElementById("timer").innerHTML = "00:" + t;
    }
    else {
    	var minutes = Math.floor(t/60);
        var seconds = t-60;
        if(seconds < 10) {
        	document.getElementById("timer").innerHTML = "0" + minutes + ":0" + seconds;
        }
        else {
        	document.getElementById("timer").innerHTML = "0" + minutes + ":" + seconds;
        }
        
    }
    
}
</script>

</body>
</html>
*/
 
 
 
