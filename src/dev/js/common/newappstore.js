$(function(){
	$(".categoryMain").mouseover(function(){
		if($(".menus").hasClass("hidden")){
			$(".menus").removeClass("hidden");
		}
		$(".categoryMenu"+$(this).data("menu"))
		.removeClass("hidden")
		.siblings().addClass("hidden");
	});
	$(".category").mouseleave(function(){
		if(!$(".menus").hasClass("hidden")){
			$(".menus").addClass("hidden");
		}
	});
});