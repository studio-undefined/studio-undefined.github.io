$(document).ready(function () {
    fetch("templates/nav.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("nav").innerHTML = data;
    })
    .catch(error => {
        console.log(error);
    });
});