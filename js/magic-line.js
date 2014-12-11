;(function(window, document, $) {
	

	//Scroll navigation
	var $scrollTimer;
	console.log('ura');
	if (!$.browser.mobile) {
		$.scrollIt({
			upKey: 38,             // key code to navigate to the next section
			downKey: 40,           // key code to navigate to the previous section
			easing: 'linear',      // the easing function for animation
			scrollTime: 600,       // how long (in ms) the animation takes
			activeClass: 'active', // class given to the active nav element
			onPageChange: function(){
				clearTimeout($scrollTimer);
				$scrollTimer = setTimeout(setline,10);
			},    // function(pageIndex) that is called when page is changed
			topOffset: -50        // offste (in px) for fixed top navigation
		});

	} else {
		$.scrollIt({
			upKey: 38,             // key code to navigate to the next section
			downKey: 40,           // key code to navigate to the previous section
			easing: 'linear',      // the easing function for animation
			scrollTime: 600,       // how long (in ms) the animation takes
			activeClass: 'active', // class given to the active nav element
			onPageChange: false,    // function(pageIndex) that is called when page is changed
			topOffset: 0        // offste (in px) for fixed top navigation
		});

	}

	//Animation line for navigation
	var $el, leftPos, newWidth;

	/* Add Magic Line markup via JavaScript, because it ain't gonna work without */
	$(".section.nav ul").append("<li id='magic-line'></li>");
	/* Cache it */
	var $magicLine = $("#magic-line");
	/*
	$magicLine
		.width($(".section.nav a.active").parent().width())
		.css("left", $(".section.nav a.active").position().left)
		.data("origLeft", $magicLine.position().left)
		.data("origWidth", $magicLine.width());
	*/
		
	$(".header.menu li").find("a").hover(function() {
		/*
		$el = $(this);
		leftPos = $el.position().left;
		newWidth = $el.parent().width();
		
		$magicLine.stop().animate({
			left: leftPos,
			width: newWidth
		});
		*/
	}, function() {
		/*
		$magicLine.stop().animate({
			left: $magicLine.data("origLeft"),
			width: $magicLine.data("origWidth")
		});
		*/
	});

	function setline() {
		$el = $('.header .menu a.active');

		leftPos = $el.position().left;
		newWidth = $el.parent().width();

		$magicLine.stop().animate({
			left: leftPos,
			width: newWidth
		});
	}

});