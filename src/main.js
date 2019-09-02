/*
//
*/

/*
Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
*/
//
function flightHandlerFunction (event) {
    const sectionElement = document.querySelector('#flight');

    if ( sectionElement.className === "power disabled" ) {
        sectionElement.className = "power enabled";
    } else {
        sectionElement.className = "power disabled";
    }
}

//
document.querySelector("#activate-flight").addEventListener( "click", flightHandlerFunction )
