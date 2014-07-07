$(document).ready(function(){
	
	var window_height = $(window).height();
	$('.main-section').css('min-height',window_height-70);

	$('.link').hide();
	$('ul.off-canvas-list li').click(function(){
		var offCanvas_id = $(this).attr('id');
	  var flag = $('.'+offCanvas_id).css('display');
		$('.link').slideUp();
		//alert(flag);
		if(flag!='list-item'){
			$('.'+offCanvas_id).slideDown();
		}
	});

	$('.github_page').click(function(e){
		var r=confirm("是否确认跳转到我的Github主页？");
		if (r==false)
			e.preventDefault();
	});

});