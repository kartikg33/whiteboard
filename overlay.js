var board = function(){

	$('.addbtn').click(function(){
		var num = 'id'+$('.overlay').children().length;
		jQuery('<div/>', {
		    class: num,
		    text: num
		}).appendTo('.overlay');
		$("."+num).load("box.htm");
	});

	$('.rembtn').click(function(){
		var num = 'id'+($('.overlay').children().length-1);
		$("."+num).remove();
	});

	$('.frame').mouseover(function(event) {
		$(this).effect("highlight", {}, 3000);
	});

};

$(document).ready(board);