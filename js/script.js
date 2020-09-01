$(function(){
	$('.photo__slider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		adaptiveHeight: true,
		nextArrow: '<button type="button" class="slick-next slick-btn"> <img src="img/slider/next.svg"></button>',
		prevArrow: '<button type="button" class="slick-prev slick-btn"> <img src="img/slider/prev.svg"></button>'
	});
	$('.menu__btn').on('click', function(){
		$('.menu__list').slideToggle();
	});
});
