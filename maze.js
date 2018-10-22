/*Exercise 1 */

var tlboundary;

window.onload = topLeftBoundary;

function topLeftBoundary() {
   tlboundary = document.getElementById("boundary1");
   tlboundary.onmouseover = redBoundary;
}

function redBoundary() {
    tlboundary.classList.add("youlose");
}

/*Exercise 2*/


/*Exercise 3*/

