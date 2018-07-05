//SMOOTH SCROLL
$(function smoothScroll() {
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

//toggle bottom nav on scroll
$(document).scroll(function () {
	var y = $(this).scrollTop();
	var height = $(window).height();
	//console.log(height);
	if (y > height) {
		$('.bottom-nav').fadeIn();
		$("#nav-text").fadeIn();
	} else {
		$('.bottom-nav').fadeOut();
		$("#nav-text").fadeOut();
	}
});


//detect which nav link was clicked and change bottom nav text accordingly
$('.half-screen a').click(function () {
	if ($(this).text() == "Front-end Engineer") {
		$("#nav-text")[0].text = "UIX Designer";
	} else {
		$("#nav-text")[0].text = "Front-end Engineer";
	}
});

//navigation using bottom nav
$('#nav-text').click(function () {
	if (this.text == "UIX Designer") {
		$(this).attr("href", "#design");
	} else if (this.text == "Front-end Engineer") {
		$(this).attr("href", "#develop");
	}
});

//if scrolled to #photoSection change bottomNav text to Web Developer
function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();
	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();
	return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function () {
	if (isScrolledIntoView($('#design'))) {
		$("#nav-text")[0].text = "Front-end Engineer";
	} else if (isScrolledIntoView($('#develop'))) {
		$("#nav-text")[0].text = "UIX Designer";
	}

	if (isScrolledIntoView($("#contact"))) {
		$(".to-contact").fadeOut();
	} else {
		$(".to-contact").fadeIn();
	}
});
