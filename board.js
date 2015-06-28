var board = function(){
	$('h1').click(function(event) {
		$(this).animate({color: black}, 10);
	});

	$(document).keypress(function(event) {
		if(event.which==111){
			$('<h2>').text('other').prependTo('.postplace');
		}
	});

	$('.btn').click(function(){
		var num = $('.overlay').children().length;
		jQuery('<div/>', {
		    id: num,
		    text: num
		}).appendTo('.overlay');

		//$('.overlay').append(<div id=num><p>num</p></div>);
		//$('<div>').attr('class', num);
		//$('<p>').text(num).appendTo('.overlay');
		//$( ".overlay" ).load( "box.htm" );
	});

};

$(document).ready(board);