$(document).ready(function(){
	$("#date, #arrive").datepicker({
		inline:true,
		firstDay:1,
		showOtherMonths:true,
		dayNamesMin: ['Sun', 'Mon' , 'Tue' , 'Wed' , 'Thu' , 'Fri' , 'Sat']
	})
	var current=$("dt");
	$("dt").click(function(){
		$("dt").removeClass("current").addClass("not_current");
		//apply not_current class to all the description terms
		//then when selected, apply current class to the selected dt while the unselected ones apply to the not_current class
		$(this).addClass("current").removeClass("not_current");
		});
	var dd=$("dd");
	dd.hide();
	$("dt").on("click",function(){
		$("dd").slideUp();	
		$(this).parent().find("dd").show();
	})
})