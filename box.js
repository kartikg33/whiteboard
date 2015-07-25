var box = function(){
	
	$(document).on("click", ".media_image",function(){
		var frame = $(".media_image").parent().parent().parent();
		$('.debug').text('DEBUG CLICK ' + frame.parent().id);
		//frame.children().remove();
		frame.html("<img src ='/Users/kartikgohil/Google Drive/SIGHT FROM AHIGH/_20150715_135209.JPG' height = '360' width = '240'>");
		frame.height(360);
		frame.width(240);

	});

};



$(document).ready(box);