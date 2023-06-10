$(document).ready(function () {
    fetch("templates/nav.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("nav").innerHTML = data.getElementById("nav-content").innerHTML;
    })
    .catch(error => {
        console.log(error);
    });
});