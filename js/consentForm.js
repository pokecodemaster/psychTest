var fireBaseRef = firebase.database().ref();

var d = new Date();
var KEY = d.getTime();

//document.cookie = KEY;

//localStorage.setItem("storageName", KEY);


function submitForm() {

    //Delete all cookies before you assign a new one.
    deleteAllCookies();

    var keyStr = KEY.toString();

    document.cookie = keyStr.replace(/\D/g, '');


    var Name = document.getElementById("name").value;

    var dateStr = d.getMonth()+1 + "-" + d.getDate() + "-" + d.getFullYear(); 
    fireBaseRef.child("Consent Form").child(Name).set(dateStr);

    window.location.href = 'participantDemographics.html';

    //alert("whaaaadup");
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }




