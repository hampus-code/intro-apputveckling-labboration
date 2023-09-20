/* Function för varje button för länkarna */

function hemsidaButton() {
    window.location.href = "index.html"
}

function sida1Button() {
    window.location.href = "sida1.html"
}

function sida2Button() {
    window.location.href = "sida2.html"
}

function sida3Button() {
    window.location.href = "sida3.html"
}

function sida4Button() {
    window.location.href = "sida4.html"
}

function sida5Button() {
    window.location.href = "sida5.html"
}


/* Function som gör att användaren kan ge egen rating */
function userRating() {

    var result = prompt("Vänligen sätt ditt eget betyg på denna serie, från 1-10")

    alert(result)
}
