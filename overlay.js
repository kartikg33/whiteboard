var board = function(){
	//----------INITIALISE PAGE----------//
	var newwidth;
	var newheight;
	var initSize = function(){
		newwidth = 0.9*$(window).width();
		newheight = (1080/1920)*newwidth;

		$('.debug').text('DEBUG width: '+newwidth+', height: '+newheight);

		$(".overlay").width(newwidth);
		$(".overlay").height(newheight);
	}

	initSize();
	$(window).resize(initSize);

	//----------EVENTS----------//
	$(".addbtn").click(function(){
		var num = "id"+$(".overlay").children().length;
		jQuery("<div/>", {
		    id: num,
		}).appendTo(".overlay");
		$("#"+num).load("box.htm");
	});

	$(".rembtn").click(function(){
		var num = "id"+($(".overlay").children().length-1);
		$("#"+num).remove();
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


	var dragging = null;
	$(document).on("mouseup",".overlay",function(e) {
		$(document).off("mousemove",".container");
		dragging = null;
		$('.debug').text('DEBUG '+dragging);
	});		

	$(document).on("mousedown",".container",function(e) {
		var position = $(this).offset();
		if(dragging==null){
			dragging=$(this);	//to prevent other elements from being moved
		}
		$(document).on("mousemove",".container",function(event){

			var move_left = Math.max($(".overlay").offset().left
				, position.left + event.pageX - e.pageX);
			move_left = Math.min(($(".overlay").offset().left+newwidth)-$(this).width()
				,move_left); 

			var move_top = Math.max($(".overlay").offset().top
				, position.top + event.pageY - e.pageY);
			move_top = Math.min(($(".overlay").offset().top+newheight)-$(this).height()
				, move_top);

			$('.debug').text('DEBUG pos: '+position.left+', '+position.top+'; '+
						'click: '+e.pageX+', '+e.pageY+'; '+
						'current: '+event.pageX+', '+event.pageY+'; '+
						'new_pos: '+move_left+', '+move_top	+'; '+
						dragging.parent().attr('id') 
				);

			dragging.css({	//only moves what is being dragged, not others by accident.
				'position': 'fixed',
				'left': move_left,
				'top': 	move_top
			}); 

		});
	});
	

};

$(document).ready(board);