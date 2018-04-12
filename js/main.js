const look = document.getElementById('look');

$('#sdev').click( function () {
    $('[data-fancybox="software"]').fancybox({
        // Enable keyboard navigation
        keyboard: true,
    
        btnTpl: {
            // Arrows
            arrowLeft:
                '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;">' +
                '<svg viewBox="0 0 40 40">' +
                '<path d="M18,12 L10,20 L18,28 M10,20 L30,20"></path>' +
                "</svg>" +
                "</a>",
    
            arrowRight:
                '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;">' +
                '<svg viewBox="0 0 40 40">' +
                '<path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path>' +
                "</svg>" +
                "</a>"
        },
        
    });
    
    
});

$('#art').click(function () {
    $('[data-fancybox="artGallery"]').fancybox({
        
        // Enable keyboard navigation
        keyboard: true,
        // ProtecImages
        protect: true,

        btnTpl: {
            // Arrows
            arrowLeft:
                '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;">' +
                '<svg viewBox="0 0 40 40">' +
                '<path d="M18,12 L10,20 L18,28 M10,20 L30,20"></path>' +
                "</svg>" +
                "</a>",
    
            arrowRight:
                '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;">' +
                '<svg viewBox="0 0 40 40">' +
                '<path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path>' +
                "</svg>" +
                "</a>"
        },


       
        
    });
 
   
});



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

