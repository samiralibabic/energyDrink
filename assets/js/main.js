$(document).ready(function() {

    /* Navigation smooth scroll */
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    // icon animations
    var end = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var animation = 'animated bounceIn';
    $('#svg1').waypoint(function() {
        $('#svg1').css('visibility', 'visible');
        $('#svg1').addClass(animation);
        $('#svg1').one(end, function() {
            $('#svg2').css('visibility', 'visible');
            $('#svg2').addClass(animation)
        });
    }, {offset: '100%'});
    $('#svg3').waypoint(function() {
        $('#svg2').one(end, function() {
            $('#svg3').css('visibility', 'visible');
            $('#svg3').addClass(animation);
            $('#svg3').one(end, function() {
                $('#svg4').css('visibility', 'visible');
                $('#svg4').addClass(animation)
            });
        });
    }, {offset: '100%'});
    $('#svg5').waypoint(function() {
        $('#svg4').one(end, function() {
            $('#svg5').css('visibility', 'visible');
            $('#svg5').addClass(animation);
        });
    }, {offset: '100%'});

    // cans animations (over 767px)
    if ($(window).width() > 767) {
        var doseAnimation = 'animated bounceInRight';
        $('#dose1').waypoint(function() {
            $('#dose1').css('visibility', 'visible');
            $('#dose1').addClass(doseAnimation);
        }, {offset: '50%'});
        $('#dose2').waypoint(function() {
            $('#dose1').one(end, function() {
                $('#dose2').css('visibility', 'visible');
                $('#dose2').addClass(doseAnimation);
            });
        }, {offset: '50%'});
        $('#dose3').waypoint(function() {
            $('#dose2').one(end, function() {
                $('#dose3').css('visibility', 'visible');
                $('#dose3').addClass(doseAnimation);
            });
        }, {offset: '50%'});
    } else {
    // cans animations (under 767px)
        var doseAnimation = 'animated bounceInRight';
        $('#dose1').waypoint(function() {
            $('#dose1').css('visibility', 'visible');
            $('#dose1').addClass(doseAnimation);
        }, {offset: '50%'});
        $('#dose2').waypoint(function() {
            $('#dose2').css('visibility', 'visible');
            $('#dose2').addClass(doseAnimation);
        }, {offset: '50%'});
        $('#dose3').waypoint(function() {
            $('#dose3').css('visibility', 'visible');
            $('#dose3').addClass(doseAnimation);
        }, {offset: '50%'});
    }

    // draw attention to geschmacksrichtungen
    $('#attention-box').waypoint(function() {
        $('#attention-box').addClass('animated pulse');
    }, {offset: '50%'});

});
