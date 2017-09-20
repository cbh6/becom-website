//=require ../../lib/PaperKit/js/jquery-3.2.1.min.js"
//=require ../../lib/PaperKit/js/jquery-ui-1.12.1.custom.min.js
//=require ../../lib/PaperKit/js/tether.min.js
//=require ../../lib/PaperKit/js/bootstrap.min.js
//=require ../../lib/PaperKit/js/bootstrap-switch.min.js
//=require ../../lib/PaperKit/js/nouislider.js
//=require ../../lib/PaperKit/js/photo_swipe/photoswipe.min.js
//=require ../../lib/PaperKit/js/photo_swipe/photoswipe-ui-default.min.js
//=require ../../lib/PaperKit/js/photo_swipe/init-gallery.js
//=require ../../lib/PaperKit/js/bootstrap-select.js
//=require ../../lib/PaperKit/js/jasny-bootstrap.min.js
//=require ../../lib/PaperKit/js/bootstrap-tagsinput.js
//=require ../../lib/PaperKit/js/moment.min.js
//=require ../../lib/PaperKit/js/bootstrap-datetimepicker.min.js
//=require ../../lib/PaperKit/js/paper-kit.js

$(window).on('load', function() {
  AOS.init();
});

$(".miembro").click(function() {
  var openW = 100;
  var mySize = parseInt($(".verPerfilInfo").css("top"));
  if (mySize == 0) openW = 50;
  var bgPerfil = $(this).find('img').attr("src");
  var nomPerfil = $(this).find('img').attr("alt");
  var cargoPerfil = $(this).find('img').attr("cargo");
  var bio = $(this).index();
  //var getBio = $(".bios .bio:eq("+bio+")").html();
  $(".verPerfil").css("background-image", "url(" + bgPerfil + ")");
  $(".L1").text(nomPerfil);
  //$(".L2").html(getBio);
  $(".L3").text(cargoPerfil);
  $(".verPerfil, .verPerfilInfo").stop().animate({
    'width': openW + "%"
  }, {
    duration: 500,
    queue: true,
    easing: 'swing',
    complete: function() {}
  });
  $(".header").stop().animate({
    'top': "-120px"
  }, {
    duration: 500,
    queue: true,
    easing: 'swing',
    complete: function() {}
  });
});

$(".closePerfil").click(function() {
  $(".verPerfil, .verPerfilInfo").stop().animate({
    'width': "0%"
  }, {
    duration: 300,
    queue: true,
    easing: 'easeOutExpo',
    complete: function() {}
  });
  $(".header").stop().animate({
    'top': "0px"
  }, {
    duration: 300,
    queue: true,
    easing: 'swing',
    complete: function() {}
  });
});

function onViewport(el, elClass, offset, callback) {
  /*** Based on http://ejohn.org/blog/learning-from-twitter/ ***/
  var didScroll = false;
  var this_top;
  var height;
  var top;

  if (!offset) {
    var offset = 0;
  }

  $(window).scroll(function() {
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      didScroll = false;
      top = $(this).scrollTop();

      $(el).each(function(i) {
        this_top = $(this).offset().top - offset;
        height = $(this).height();

        // Scrolled within current section
        if (top >= this_top && !$(this).hasClass(elClass)) {
          $(this).addClass(elClass);

          if (typeof callback == "function") callback(el);
        }
      });
    }
  }, 100);
}
