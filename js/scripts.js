(function($) {
    "use strict";

	$.getJSON('https://api.github.com/users/tcuthbert', { get_param: 'value' }, function(data) {
		$.each(data, function(index, element) {
			if (index == "avatar_url") {
				$('#avatar').append($('<img>', {
					src: element
				}));
			}
		});
	});

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    
    new WOW().init();
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
    	$('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

})(jQuery);
