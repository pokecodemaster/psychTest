
function submitParticipantDemographics() {

    
    var Age = document.getElementById("age").value;
    var Gender = document.getElementById("gender").value;
    var CountryOfOrigin = document.getElementById("country").value;
    var CountryOfFather = document.getElementById("countryFather").value;
    var CountryOfMother = document.getElementById("countryMother").value;
    var CountryReside = document.getElementById("currentCityState").value;

    fireBaseRef.child(KEY).child("Participant Demographics").child("1 Age").set(Age);
    fireBaseRef.child(KEY).child("Participant Demographics").child("2 Gender").set(Gender);
    fireBaseRef.child(KEY).child("Participant Demographics").child("3 Country of Origin").set(CountryOfOrigin);
    fireBaseRef.child(KEY).child("Participant Demographics").child("4 Country of Origin (Father)").set(CountryOfFather);
    fireBaseRef.child(KEY).child("Participant Demographics").child("5 Country of Origin (Mother)").set(CountryOfMother);
    fireBaseRef.child(KEY).child("Participant Demographics").child("6 Current City & State").set(CountryReside);
}