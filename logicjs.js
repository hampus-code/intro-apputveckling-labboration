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


/* Function för användarens egen star rating */
function userRating() {

    var result = prompt("Vänligen sätt ditt eget betyg på denna serie, från 1-10")

    alert(result)
}

/*Denna function ser till att man kan få upp allt i menyn när man trycker på de 3 strecken på en mindre skärm */
function navBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 