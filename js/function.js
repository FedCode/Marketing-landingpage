
//COMPANY DASHBAORD SEARCH SLIDER JS
$(document).ready(function(){
  $('.mainland-slider-one').slick({
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:false,
	//autoplaySpeed: 2000,
	 dots:true,
	arrows:false,
    centerMode:true,
	//centerPadding: '60px',
	responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,

      }

    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots:true,
        infinite: true,
		centerMode:true,

      }
    },  {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        infinite: true,
        autoplay: true,
		centerMode:true,
        autoplaySpeed: 2000,
      }
    }]
  });
});







