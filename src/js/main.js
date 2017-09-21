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
$(document).on('click', '.card-profile', function() {
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

    new Custombox.modal(optionsInfo).open();
 		new Custombox.modal(optionsPhoto).open();
  });

  $(document).on('click', '.custombox-content', function() {
      Custombox.modal.closeAll();
    });
