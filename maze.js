/*Exercise 1 */

//var boundaries;

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

    const boundaries = document.querySelectorAll(".boundary");

    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].addEventListener("mouseover", allRedBoundary);
    }
}

function allRedBoundary() {
    const boundaries = document.querySelectorAll(".boundary");

    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.add("youlose");
    }
}

/*Exercise 3*/



/*Exercise 4*/

/*Exercise 5*/

