$(document).ready(function(){
	$(' .slider').slick({
		dots:true
	});
	$('.burger').click(function(event) {
		$('.burger,.menu').toggleClass('active');
	});
});
