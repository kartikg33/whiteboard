var board = function(){

	$(".addbtn").click(function(){
		var num = "id"+$(".overlay").children().length;
		jQuery("<div/>", {
		    class: num,
		}).appendTo(".overlay");
		$("."+num).load("box.htm");
	});

	$(".rembtn").click(function(){
		var num = "id"+($(".overlay").children().length-1);
		$("."+num).remove();
	});

	$(document).on("mouseover",".container",function(event) {
		$(this).css({
			'border': '1px dashed #742B32'
		}); 
	});

	$(document).on("mouseleave",".container",function(event) {
		$(this).css({
			'border': '1px solid transparent'
		}); 
	});


	$(document).on("mouseup",".container",function(e) {
		$(document).off("mousemove",".container");
	});		

	$(document).on("mousedown",".container",function(e) {
		var position = $(this).offset();
		$(document).on("mousemove",".container",function(event){
			setTimeout(10000);
			var move_left = position.left + event.pageX - e.pageX;
			var move_top = position.top + event.pageY - e.pageY;

			$('.debug').text('pos: '+position.left+', '+position.top+'; '+
						'click: '+e.pageX+', '+e.pageY+'; '+
						'current: '+event.pageX+', '+event.pageY+'; '+
						'new_pos: '+move_left+', '+move_top		
				);

			$(this).css({
				'position': 'fixed',
				'left': move_left,
				'top': 	move_top
			}); 
		});
	});
	

};

$(document).ready(board);