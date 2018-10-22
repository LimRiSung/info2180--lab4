/*Exercise 1 */

//var boundaries;
var trackBoundary = false;
window.onload = allBoundaries;

function topLeftBoundary() {
   tlboundary = document.getElementById("boundary1");
   tlboundary.onmouseover = redBoundary;
}

function redBoundary() {
    tlboundary.classList.add("youlose");
}

/*Exercise 2*/

//Works but only one boundary get coloured at a time
/*function allBoundaries() {

    const boundaries = document.querySelectorAll(".boundary");

    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].addEventListener("mouseover", function() {
            boundaries[i].classList.add("youlose");
        });
    }
}*/

function allBoundaries() {
    const end = document.getElementById("end");
    end.onmouseover = messageAlert;
    const boundaries = document.querySelectorAll(".boundary");

    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].addEventListener("mouseover", allRedBoundary);
    }
}

function allRedBoundary() {
    trackBoundary = true;
    const boundaries = document.querySelectorAll(".boundary");

    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.add("youlose");
    }
}

/*Exercise 3*/

function messageAlert() {
    if (trackBoundary)
    {
        alert("You lose, mate!");
    }
    else{
        alert("You win!");
    } 
}

/*Exercise 4*/

/*Exercise 5*/

