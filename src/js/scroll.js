function checkScroll(){
    console.log('cee');
    console.log($('#inicio').hasClass('becom-color'));
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').removeClass("transparent");
        $('.nav-link').removeClass("nav-link-transparent");
        $('#logo').attr('src', 'assets/img/logosinfondonegro.png');
        
    }else{
        console.log('2')
        $('.navbar').addClass("transparent");
        $('.nav-link').addClass("nav-link-transparent");
        if($('#inicio').hasClass('becom-color'))
          $('#logo').attr('src', 'assets/img/logosinfondonegro.png');
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}