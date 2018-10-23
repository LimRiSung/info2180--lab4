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
    //end.onmouseover = messageAlert; /*Used for alert messages*/
    const boundaries = document.querySelectorAll(".boundary");

    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].addEventListener("mouseover", allRedBoundary);
    }
    end.onmouseover = statusUpdates;
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
    document.getElementById("status").innerHTML = 'Move your mouse over the "S" to begin.';
    const boundaries = document.querySelectorAll(".boundary");

    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.remove("youlose");
    }
}

/*Exercise 5*/

function statusUpdates() {
    if (trackBoundary) 
    {
        document.getElementById("status").innerHTML = "You lose, mate!";
    }
    else 
    {
        document.getElementById("status").innerHTML = "You win!";
    }
}


/*Exercise 6*/

