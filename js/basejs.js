$(document).ready(function(){
	var window_height = $(window).height();
	$('.main-section').css('min-height',window_height-70);

	$('.link').hide();
	$('ul.off-canvas-list li').click(function(){
		var offCanvas_id = $(this).attr('id');
	  var flag = $('.'+offCanvas_id).css('display');
		$('.link').slideUp();
		if(flag!='block'){
			$('.'+offCanvas_id).slideDown();
		}
	});
});