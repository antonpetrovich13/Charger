// СЛАЙДЕР
$(window).on('load resize', function () {
	if ($(window).width() < 950) {
		$('#slider:not(.slick-initialized)').slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 500,
			cssEase: 'ease-out',
			touchThreshold: 10,
			adaptiveHeight: true,
			slidesToShow: 2,
			responsive: [
				{
					breakpoint: 650,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});
	} else {
		$("#slider.slick-initialized").slick("unslick");
	}
});