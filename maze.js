/*Exercise 1 */

//var tlboundary;
var trackBoundary = false;
window.onload = allBoundaries;
//window.onload = topLeftBoundary;
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
    const start = document.getElementById("start");
    start.onclick = restartMaze;
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

function restartMaze() {
    trackBoundary = false;
    const boundaries = document.querySelectorAll(".boundary");

    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.remove("youlose");
    }
}

/*Exercise 5*/

/*Exercise 6*/

