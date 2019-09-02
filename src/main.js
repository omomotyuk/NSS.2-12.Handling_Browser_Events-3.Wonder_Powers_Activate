/*
//
*/

//
function buttonHandler ( button_id, section_id ) {
    this.button_id = button_id;
    this.section_id = section_id;
}

//
const buttonArray = [];
buttonArray[0] = new buttonHandler( 'activate-flight', 'flight' );
buttonArray[1] = new buttonHandler( 'activate-mindreading', 'mindreading' );
buttonArray[2] = new buttonHandler( 'activate-xray', 'xray' );

//
buttonArray.forEach( button => {
    document.querySelector(`#${button.button_id}`).addEventListener( "click", function( event ) {
        const sectionElement = document.querySelector(`#${button.section_id}`);
        if ( sectionElement.className === "power disabled" ) {
            sectionElement.className = "power enabled";
        } else {
            sectionElement.className = "power disabled";
        }
    })
});
