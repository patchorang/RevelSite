$(document).ready(function() {

	$(".tile-activity img").each(function(){
		var thisWidth = $(this).width();
		var thisHeight = $(this).height();

		if(thisWidth > thisHeight) {
		    $(this).css("width", "auto");
		    $(this).css("height", "100%");
		} else if(thisHeight > thisWidth) {
		     $(this).css("width", "100%");
		     $(this).css("height", "auto");
		}

	});


	$("#nav-toggle").click(function(event){
		event.preventDefault();
		var currentXPos = $("#nav-bar").css('top');
		var wholeNavBarHeight = $("#top-bar-whole").css('height');

		if(currentXPos == '-10px') {
			console.log(currentXPos);
			$("#nav-bar").css('top', '-55px');
			$("#top-bar-whole").css('height', '46px');
			$("#wrap").css('top', '-35px');
		} else {
			console.log(currentXPos);
			$("#nav-bar").css('top', '-10px');
			$("#top-bar-whole").css('height', wholeNavBarHeight);
			$("#wrap").css('top', '10px');
		}
	});

});