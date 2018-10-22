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
function allBoundaries() {
    
    var boundaries = document.querySelectorAll("boundary");
    var i;
    for (i = 0; i < boundaries.length; i++)
    {
        boundaries[i].onmouseover = allRedBoundary;
        alert("What is going on?");
    }
}

function allRedBoundary() {
    var boundaries = document.querySelectorAll("boundary");
    var i;
    for (i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.add("youlose");
       // alert("All should be red?");
    }
}

/*Exercise 3*/



/*Exercise 4*/

/*Exercise 5*/

