var fireBaseRef = firebase.database().ref();

var d = new Date();
var KEY = d.getTime();

//document.cookie = KEY;

//localStorage.setItem("storageName", KEY);


function submitForm() {

    //Delete all cookies before you assign a new on
    //document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });

    var keyStr = KEY.toString();

    document.cookie = keyStr.replace(/\D/g, '');


    var Name = document.getElementById("name").value;

    var dateStr = d.getMonth()+1 + "-" + d.getDate() + "-" + d.getFullYear(); 
    fireBaseRef.child("Consent Form").child(Name).set(dateStr);

    window.location.href = 'html/participantDemographics.html';

    //alert("whaaaadup");
}






