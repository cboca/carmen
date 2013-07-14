$("document").ready(function() {
 
    $('nav ul li').click(function(){
		
	var destination = $(this).data("scroll");

        $('html, body').animate({
            scrollTop: $("."+destination).offset().top
        }, 500);

     });

    $(document).ready(function(){
	  $('.bxslider').bxSlider({
	  });
	});
 
});
