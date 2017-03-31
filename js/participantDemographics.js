
function submitParticipantDemographics() {
    
    
    var uKey = document.cookie;
    uKey = uKey.replace(/\D/g, '');
    //uKey = uKey.substring/*(0, uKey.length - 1)*/;
    
    var Age = document.getElementById("age").value;
    var Gender = document.getElementById("gender").value;
    var CountryOfOrigin = document.getElementById("country").value;
    var CountryOfFather = document.getElementById("countryFather").value;
    var CountryOfMother = document.getElementById("countryMother").value;
    var CountryReside = document.getElementById("currentCityState").value;

    fireBaseRef.child("Participant Demographics").child(uKey).child("1 Age").set(Age);
    fireBaseRef.child("Participant Demographics").child(uKey).child("2 Gender").set(Gender);
    fireBaseRef.child("Participant Demographics").child(uKey).child("3 Country of Origin").set(CountryOfOrigin);
    fireBaseRef.child("Participant Demographics").child(uKey).child("4 Country of Origin (Father)").set(CountryOfFather);
    fireBaseRef.child("Participant Demographics").child(uKey).child("5 Country of Origin (Mother)").set(CountryOfMother);
    fireBaseRef.child("Participant Demographics").child(uKey).child("6 Current City & State").set(CountryReside);

    //fireBaseRef.child("Participant Demographics").child("Person2").child("Age").set(Age);

    window.location.href = 'continuePage.html';
}