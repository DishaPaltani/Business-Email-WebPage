var helpLink = document.getElementById("helpLink");
var helpIcon = document.getElementById("helpIcon");
var helpPopup = document.getElementById("helpPopup");

helpLink.onmouseover = function() {
    helpPopup.style.display = "block";
};

helpIcon.onmouseover = function() {
    helpPopup.style.display = "block";
};

function closePopup() {
    helpPopup.style.display = "none";
}