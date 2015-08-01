$(document).ready(function(){

	// Click Image Button
	//$(document).on("click", ".media_image",function(){
	$(".media_image").click(function(event) {
		var frame = $(".selected");
		$('.debug').text('DEBUG CLICK ' + frame.parent().id);
		//frame.children().remove();
		frame.html("<img src ='/Users/kartikgohil/Google Drive/SIGHT FROM AHIGH/_20150715_135209.JPG' height = '360' width = '240'>");
		frame.height(360);
		frame.width(240);

	});

});
