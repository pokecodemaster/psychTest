var btnRed = document.getElementById("btn1");
var btnBlue = document.getElementById("btn2");
var btnOrange = document.getElementById("btn3");
var btnGreen = document.getElementById("btn4");
var Name = document.getElementById("fullName");

var fireBaseRef = firebase.database().ref();

var spanish1 = ["olla", "calle", "paz", "goce", "florecer", "violacion", "molestia", "vomito", "escroto", "bastardo", ];
var english1 = ["kettle", "street", "peace", "enjoyment", "blossom", "rape", "ache", "vomit", "scrotum", "bastard"];

var allWords = new Array();

var currWord = new Array();

var selectedWords = new Array();
selectedWords.push("");

var selectedColors = new Array();
selectedColors.push("");

var colors = ["RED", "BLUE", "GREEN", "ORANGE"];

var index = 0;

var selectedWord = "";

var myVar = setInterval(myTimer, 1000);
var s = new Date();
var buffer = 0;

var uKey = document.cookie;
//uKey = uKey.replace(/\D/g, '');
//uKey = uKey.substring/*(0, uKey.length - 1)*/;

//fireBaseRef.child(uKey).child("WordTest 1").set("");
function displayWord(sel) {

    if (allWords.length == 0) {

        if (uKey[uKey.length - 2] % 2 == 0) {
            allWords = shuffle(spanish1);
            allWords.push("...");
        }
        else {
            allWords = shuffle(english1);
            allWords.push("...");
        }

    }

    
    document.getElementById("dispMessage").innerHTML = "";
    var randColor = colors[Math.floor(Math.random() * colors.length)];

    currWord = allWords[index];

    selectedWords.push(currWord);
    selectedColors.push(randColor);

    

    if (index <= 10) {
        document.getElementById("demo").style.color = randColor;
        document.getElementById("demo").innerHTML = currWord;
        writeToDB(selectedWords[selectedWords.length - 2], sel.value, selectedColors[selectedColors.length - 2]);
    }
    else {
        //change this
        window.location.href = 'continueTest.2.html';
    }
    index++;
    

}

function writeToDB(currWord, selColor, randColor) {
    var status = "INCORRECT";

    var d = new Date();
    var t = Math.round(Math.abs(d - s));
    var time = "";
    time = Math.abs(t - buffer);//parseTime(Math.abs(t - buffer));
    buffer = t;
    //alert(time);

    if (currWord != "") {
        if (selColor == randColor) {
            status = "CORRECT";
        }
        fireBaseRef.child("Participants Data").child(uKey).child("WordTest 1").child(currWord.toUpperCase()).child("Displayed In").set(selColor);
        fireBaseRef.child("Participants Data").child(uKey).child("WordTest 1").child(currWord.toUpperCase()).child("Selected").set(randColor);
        fireBaseRef.child("Participants Data").child(uKey).child("WordTest 1").child(currWord.toUpperCase()).child("Status").set(status);
        fireBaseRef.child("Participants Data").child(uKey).child("WordTest 1").child(currWord.toUpperCase()).child("Time").set(time + " ms");
    }
    
}

function myTimer() {
    var d = new Date();
    var t = Math.round(Math.abs(d - s) / 1000);

    parseTime(t, "timer");

}

function parseTime(t, idVal) {
    var x = "";
    if (t < 10) {
        x = "00:0" + t;
    }
    else if (t < 60) {
        x = "00:" + t;
    }
    if (t >= 60) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (60 * minutes);
        if (seconds < 10) {
            if (minutes < 10) {
                x = "0" + minutes + ":0" + seconds;
            }
            else {
                x = minutes + ":0" + seconds;
            }

        }
        else {
            if (minutes < 10) {
                x = "0" + minutes + ":" + seconds;
            }
            else {
                x = minutes + ":" + seconds;
            }

        }

    }
    //document.getElementById("timer").innerHTML = x
    return x;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}

/*
var spanish1 = ["olla", "calle", "paz", "goce", "florecer", "violaci�n", "molestia", "v�mito", "escroto", "bastardo",];
var english1 = ["kettle", "street", "peace", "enjoyment", "blossom", "rape", "ache", "vomit", "scrotum", "bastard"];


var spanish2 = ["barril", "mesa", "sue�o", "acuerdo", "recompensa", "suicidio", "dolor", "eyacular", "verga", "chocha",];
var english2 = ["barrel", "table", "dream", "agreement", "reward", "suicide", "pain", "ejaculate", "dick", "pussy"];


var spanish3 = ["tela", "tiempo", "noticias", "vacaci�n", "dicha", "tortura", "soledad", "matanza", "coger", "mierda",];
var english3 = ["fabric", "time", "noticias", "holiday", "bliss", "torture", "loneliness", "slaughter", "fuck", "shit"];


var spanish4 = ["habitante", "mermelada", "unidad", "afecto", "suave", "muerte", "pena", "pendejo", "mear", "pene",];
var english4 = ["inhabitant", "jelly", "unit", "affection", "soft", "death", "grief", "asshole", "piss", "penis"];
*/
 
 
 
