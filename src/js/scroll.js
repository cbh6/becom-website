function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    // if(window.screen.width < 991){
    //     $('.navbar').removeClass('navbar-toggleable-md fixed-top transparent stroke');
    //     $('#logo').attr('src', 'assets/img/logosinfondonegro.png');
    // }else{
    //     $('.navbar').addClass('navbar-toggleable-md fixed-top transparent stroke');
    // }
    
    if($(window).scrollTop() > startY){
        $('.navbar').removeClass("transparent");
        $('.nav-link').removeClass("nav-link-transparent");
        $('#logo').attr('src', 'assets/img/logosinfondonegro.png');
        
    }else{
        $('.navbar').addClass("transparent");
        $('.nav-link').addClass("nav-link-transparent");
        if($('#inicio, #nosotros').hasClass('becom-color')) $('#logo').attr('src', 'assets/img/logosinfondonegro.png');
        else $('#logo').attr('src', 'assets/img/logosinfondoblanco.png');

    }

    
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}