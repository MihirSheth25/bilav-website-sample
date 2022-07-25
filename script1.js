// function that shows the icon that helps in navigation when screen size is small
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// animation text
var myClasses = document.getElementsByClassName("hitem");

// change scroll text by changing inner html here
for (var i = 0; i < myClasses.length; i++) {
  myClasses[i].innerHTML = "New Data Service Launched - LEI Snapshot";
}

// gives current time and date in specific format
var x = new Date().toLocaleDateString("en-IN");
var y = new Date().toLocaleTimeString("en-IN", {
  hour12: false,
});
document.getElementById("wlcmtext").innerHTML +=
  "<br>" + "Last Login: " + x + " | " + y;
