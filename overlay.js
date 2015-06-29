var board = function(){
	//----------INITIALISE PAGE----------//
	var newwidth;
	var newheight;
	var initSize = function(){
		newwidth = 0.95*$(window).width();
		newheight = (1080/1920)*newwidth;

		$('.debug').text('DEBUG width: '+newwidth+', height: '+newheight);

		$(".banner").width(newwidth);		
		$(".overlay").width(newwidth);
		$(".overlay").height(newheight);
	}

	initSize();
	$(window).resize(initSize);

	//----------EVENTS----------//
	$(".overlay").dblclick(function(){
		if(remove=="true"){
			remove = "false";
			$(".overlay").css('cursor', 'auto');
		} else {
		var num = "id"+$(".overlay").children().length;
		jQuery("<div/>", {
		    id: num,
		}).appendTo(".overlay");
		$("#"+num).load("box.htm");
		}
	});


	$(".addbtn").click(function(){
		remove = "false";
		$(".overlay").css('cursor', 'auto');
		$(".container").css('cursor', 'auto');
		var num = "id"+$(".overlay").children().length;
		jQuery("<div/>", {
		    id: num,
		}).appendTo(".overlay");
		$("#"+num).load("box.htm");
	});

	var remove = "false";
	$(".rembtn").click(function(){
		if(remove=="false"){
			remove = "true";
			$(".overlay").css('cursor', 'crosshair');
			$(".container").css('cursor', 'crosshair');
		} else {
			remove = "false";
			$(".overlay").css('cursor', 'auto');
			$(".container").css('cursor', 'auto');
		}
		//var num = "id"+($(".overlay").children().length-1);
		//$("#"+num).remove();
	});

	$(document).on("mouseover",".container",function(event) {
		$(this).css({
			'border': '1px dashed #742B32',
			'cursor': 'grab'
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
		if(dragging!=null){
			dragging.css('cursor','auto');
		}
		dragging = null;
		$('.debug').text('DEBUG '+dragging);
	});		

	$(document).on("mousedown",".container",function(e) {
		if (remove=="true"){
			$(this).parent().remove();
		}
		if(dragging==null){
			dragging=$(this);	//to prevent other elements from being moved
			var position = $(this).offset();
			dragging.css('cursor','move');
		
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
					'top': 	move_top,
				}); 

			});
		} 	
	});
	

};

$(document).ready(board);