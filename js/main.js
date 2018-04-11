const look = document.getElementById('look');

function onQuadrant(evt){
    
        if ((evt.clientX >= 0 && evt.clientX <= (innerWidth / 3) ) && (evt.clientY >= 0 && evt.clientY <= (innerHeight / 2)) ){
            look.setAttribute('src', 'img/Look-left.svg');
        } else if ((evt.clientX >= (innerWidth / 3 + 1) && evt.clientX <= ((innerWidth / 3 ) * 2) ) && (evt.clientY >= 0 && evt.clientY <= (innerHeight / 2))) {
            look.setAttribute('src', 'img/Look-straight.svg');
        } else if ((evt.clientX >= ((innerWidth / 3) * 2 + 1) && evt.clientX <= innerWidth ) && (evt.clientY >= 0 && evt.clientY <= (innerHeight / 2))) {
            look.setAttribute('src', 'img/Look-up-right.svg');
        } else if ((evt.clientX >= 0 && evt.clientX <= (innerWidth / 3) ) && (evt.clientY >= (innerHeight / 2 + 1) && evt.clientY <= innerHeight ) ) {
            look.setAttribute('src', 'img/Look-up-left.svg');
        } else if ((evt.clientX >= ((innerWidth / 3) * 2 + 1) && evt.clientX <= innerWidth ) && (evt.clientY >= (innerHeight / 2 + 1) && evt.clientY <= innerHeight )) {
            look.setAttribute('src', 'img/Look-right.svg');
        } else {
            look.setAttribute('src', 'img/Look-straight.svg');
        }
    
}

function clearMouse(){
    look.setAttribute('src', 'img/Look-straight.svg');
}


// $( "#sd" ).click(function () {
//     alert("Clicou");
// });

// $( "#il" ).click(function () {
//     alert("Clicou");
// });

// $( "#3d" ).click(function () {
//     alert("Clicou");
// });

