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
buttonArray[3] = new buttonHandler( 'activate-all', "" );
buttonArray[4] = new buttonHandler( 'deactivate-all', "" );

//
function allButtonHandler( message ) {
    for( var i = 0; i < 3; i++ ) {
        const sectionElement = document.querySelector(`#${buttonArray[i].section_id}`).className = message;
    }
}

//
buttonArray.forEach( button => {
    document.querySelector(`#${button.button_id}`).addEventListener( "click", function( event ) {
        if ( button.button_id === "activate-all" ) {
            allButtonHandler( 'power enabled' );
        } else if ( button.button_id === "deactivate-all" ) {
            allButtonHandler( 'power disabled' );
        } else {
            const sectionElement = document.querySelector(`#${button.section_id}`);
            if ( sectionElement.className === "power disabled" ) {
            sectionElement.className = "power enabled";
            } else {
            sectionElement.className = "power disabled";
            }
        }
    })
});
