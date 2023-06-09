$(document).ready(function () {
    fetch("templates/nav.html")
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data, 'text/html');
        const navBody = htmlDoc.querySelector('body');
        document.getElementById("nav").innerHTML = navBody.innerHTML;
    })
    .catch(error => {
        console.log(error);
    });
    fetch("templates/footer.html")
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data, 'text/html');
        const footerBody = htmlDoc.querySelector('body');
        document.getElementById("footer").innerHTML = footerBody.innerHTML;
    })
});