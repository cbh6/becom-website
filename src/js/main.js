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

// On load
$(window).on('load', function() {
  AOS.init();
  checkScroll(); 
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


// Open
$(document).on('click', '.card-img-top', function() {
  var name = $(this).data('info');
  var photoTarget = '#modal-photo-' + name;
  var infoTarget = '#modal-info-' + name;

  var optionsPhoto = {
    content: {
      effect: 'slide',
      target: photoTarget,
      animateFrom: 'left',
      positionX: 'left',
    }
  };
  var optionsInfo = {
    content: {
      effect: 'slide',
      target: infoTarget,
      animateFrom: 'right',
      positionX: 'right',
    }
  };

  if($(window).width() > 991){ // Big
    $('.modal-photo,.modal-info').css({ width: "50%", height: "100%" });


    new Custombox.modal(optionsInfo).open();
    new Custombox.modal(optionsPhoto).open();
  }else{ // Small
    $('.modal-info').css({ width: "100%", height: "100%" });

    new Custombox.modal(optionsInfo).open();
  }


});

$(document).on('click', '.custombox-content', function() {
  Custombox.modal.closeAll();
});

function smoothScroll(target) {
  target = $(target);
  $('body,html').animate({
      'scrollTop': target.offset().top
    },
    600
  );
}

function initContactUsMap(){
    var myLatlng = new google.maps.LatLng(38.346903,-0.484399);
    var mapOptions = {
      zoom: 15,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
    }

    var map = new google.maps.Map(document.getElementById("contactUsMap"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Oficina de Becom",
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);

}

// Show dropdown menu when hover nav-link
$('.nav-item.dropdown:not(.dropdown-menu)').hover(function(){
  if ($(window).width() > 720) {
    $(this).toggleClass('show');
  }
})

$('.nav-link[href="que-hacemos.html"]').click(function(){
  window.location.href = "que-hacemos.html";
})

