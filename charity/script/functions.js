jQuery(document).ready(function($) {

	'use strict';
    //***************************
    // Sticky Header Function
    //***************************
	  jQuery(window).scroll(function() {
	      if (jQuery(this).scrollTop() > 170){  
	          jQuery('body').addClass("consultant-sticky");
	      }
	      else{
	          jQuery('body').removeClass("consultant-sticky");
	      }
	  });

    //***************************
    // BannerOne Functions
    //***************************
      jQuery('.charity-banner-one').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: false,
          arrows: false,
          fade: true,
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    //***************************
    // banner-two Functions
    //***************************
      jQuery('.charity-banner-two').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: false,
          prevArrow: "<span class='slick-arrow-left'><i class='fa fa-angle-right'></i></span>",
          nextArrow: "<span class='slick-arrow-right'><i class='fa fa-angle-right'></i></span>",
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    //***************************
    // PartnerSlider Functions
    //***************************
      jQuery('.charity-partner-slider').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: false,
          prevArrow: "<span class='slick-arrow-left'><i class='fa fa-angle-right'></i></span>",
          nextArrow: "<span class='slick-arrow-right'><i class='fa fa-angle-right'></i></span>",
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    
    //***************************
    // Click to Top Button
    //***************************
    jQuery('.charity-back-top').on("click", function() {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    //***************************
    // Parent AddClass Function
    //***************************
    jQuery(".charity-dropdown-menu,.charity-megamenu").parent("li").addClass("subdropdown-addicon");

    //***************************
    // Fancybox Function
    //***************************
    jQuery(".fancybox").fancybox({
      openEffect  : 'elastic',
      closeEffect : 'elastic',
    });

    //***************************
    // Progressbar Function
    //***************************
    jQuery('.progressbar1').progressBar({
            percentage : false,
            animation : true,
            backgroundColor : "#606060",
            barColor : "#edb542",
            height : "10",
    });

    //***************************
    // Counter Function
    //***************************
    jQuery('#word-count1').jQuerySimpleCounter({
      end:2210,
      duration: 40000
    });
    jQuery('#word-count2').jQuerySimpleCounter({
      end:210,
      duration: 40000
    });
    jQuery('#word-count3').jQuerySimpleCounter({
      end:957,
      duration: 40000
    });
    jQuery('#word-count4').jQuerySimpleCounter({
      end:3010,
      duration: 40000
    });

    //********************************
    // Switcher MainToggle Function
    //*******************************
    jQuery(".switcher-style-btn").on("click", function() {
        jQuery(".switcher-style").trigger('click')
        jQuery(this).toggleClass('switcher-style-btn-open');
        jQuery(".switcher-style").toggleClass('switcher-sidebar-on');
        return false;
    });
    
    //********************************
    // TopStrip OnOff Function
    //*******************************
    jQuery(".topstrip-switch .switch").on("click", function() {
        jQuery(".charity-main-wrapper").trigger('click')
        jQuery(this).toggleClass('top-strip-switche');
        jQuery(".charity-main-wrapper").toggleClass('top-strip-off');
        return false;
    });
    //********************************
    // Logo Background Function
    //*******************************
    jQuery(".logobackground-switch .switch").on("click", function() {
        jQuery(".charity-main-wrapper").trigger('click')
        jQuery(this).toggleClass('logobackground-btn');
        jQuery(".charity-main-wrapper").toggleClass('logobackground-off');
        return false;
    });
    //********************************
    // Logo Background Function
    //*******************************
    jQuery(".bannerslider-switch .switch").on("click", function() {
        jQuery(".charity-main-wrapper").trigger('click')
        jQuery(this).toggleClass('bannerslider-btn');
        jQuery(".charity-main-wrapper").toggleClass('bannerslider-on');
        return false;
    });
    //********************************
    // Header Border Function
    //*******************************
    jQuery(".header-border .switch").on("click", function() {
        jQuery(".charity-main-wrapper").trigger('click')
        jQuery(this).toggleClass('header-border-btn');
        jQuery(".charity-main-wrapper").toggleClass('header-border-off');
        return false;
    });

    //***************************
    // Countdown Function
    //***************************
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 2, 1 - 1, -308);
        jQuery('#charity-countdown').countdown({
            until: austDay
        });
        jQuery('#year').text(austDay.getFullYear());
    
    //***************************
    // Donation Active Function
    //***************************
    jQuery('.charity-donation-section ul li').on('click', function() {
        jQuery('li.current').removeClass('current');
        jQuery(this).addClass('current');
    });


});


//***************************
// FilterAble Function
//***************************
jQuery(window).on('load', function() {
  var $grid = $('.charity-masonery-gallery').isotope({
    itemSelector: '.element-item',
    layoutMode: 'masonry'
  });
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  // bind filter button click
  $('.charity-filterable').on( 'click', 'a', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.charity-filterable').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'a', function() {
      $buttonGroup.find('.charity-active').removeClass('charity-active');
      $( this ).addClass('charity-active');
    });
  });
});

jQuery(document).ready(function($) {
    var myPlayer = new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_16",
        cssSelectorAncestor: "#jp_container_16"
    }, [
        //php writePlaylist('Y',' (!!duration!!)'); 
        //php writePlaylist('Y',"<span style='color:#828282'> (!!duration!!)</span>");
        {
            title: "Dj kozak-promo mix soundwave <span>05:30</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            album_buy_mp3: "sdas",
            url: "sdas",
            layrics: "sdas",
        }, {
            title: "Shot me Down (feat. Skylar Grey) <span>04:00</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            album_buy_mp3: "sdas",
            url: "sdas",
            layrics: "sdas",
        }, {
            title: "I'll Keep Loving you (feat. Birdy) <span>03:00</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            album_buy_mp3: "sdas",
            url: "sdas",
            layrics: "sdas",
        }, {
            title: "The Hum (Short Edit) <span>04:30</span>",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            album_buy_mp3: "sdas",
            url: "sdas",
            layrics: "sdas",
        },
    ],
     {
       
        playlistOptions: { loopOnPrevious: true, },
        loop: true,
        swfPath: "images/jplayer.swf",
        supplied: "mp3, oga",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        preload: 'auto',
        preload: 'metadata',
        smoothPlayBar: true,
        audioFullScreen: true,
        keyEnabled: true,
    });

});








//***************************
// Map Function
//***************************

  function initMap() {
      // Basic options for a simple Google Map
      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
      var mapOptions = {
          // How zoomed in you want the map to start at (always required)
          zoom: 11,

          // The latitude and longitude to center the map (always required)
          center: new google.maps.LatLng(40.6700, -73.9400), // New York

          // How you would like to style the map. 
          // This is where you would paste any style found on Snazzy Maps.
          styles: [{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#4e4841"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#fbede2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"hue":"#ff0000"},{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"visibility":"on"},{"hue":"#ff0000"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#febb64"},{"visibility":"on"}]}]
      };

      // Get the HTML DOM element that will contain your map 
      // We are using a div with id="map" seen below in the <body>
      var mapElement = document.getElementById('map');

      // Create the Google Map using our element and options defined above
      var map = new google.maps.Map(mapElement, mapOptions);

      // Let's also add a marker while we're at it
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(40.6700, -73.9400),
          map: map,
          title: 'Snazzy!'
      });
  }
