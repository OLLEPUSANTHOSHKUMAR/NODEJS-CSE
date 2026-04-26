document = whole webpage
getElementbyID("city") = select input box
.value = get what user typed
*/
let cityName = document.getElementById("city").value;
/*
If the user does not type anything show alert and stop function.
*/
if (cityName ===""){
alert("Please enter a city name!");
 return ; // stop exection
}
/*
