var board = function(){

	var newwidth = 0.9*$(window).width();
	var newheight = (1080/1920)*newwidth;

	$('.debug').text('width: '+newwidth+', height: '+newheight);

	$(".overlay").css({
		'width': newwidth,
		'height': newheight,
		'top':'40',
		'margin-left': 'auto',
		'margin-right': 'auto',
		'background-color': 'white'
	});

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
			setTimeout(100);

			var move_left = Math.max($(".overlay").offset().left
				, position.left + event.pageX - e.pageX);
			move_left = Math.min(($(".overlay").offset().left+newwidth)-$(this).width()
				,move_left); 

			var move_top = Math.max($(".overlay").offset().top
				, position.top + event.pageY - e.pageY);
			move_top = Math.min(($(".overlay").offset().top+newheight)-$(this).height()
				, move_top);

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