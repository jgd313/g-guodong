$(function() {
	var i = 0;
	var li2 = $('.ul2>li');
	
	li2.eq(0).css("background", "#00A49D");
	var move = function() {
		if(i < 2) {
			i++;
		} else {
			i = 0;
		}
		li2.eq(i).css('background-color', '#00A49D').siblings().css('background-color', '#BCBCBC');
		$('.img').attr('src', 'images/about'+i+'.png');
	}
	timer = setInterval(move, 1000);

	$('.ul2>li').click(function() {
		var i = $(this).index();
		li2.eq(i).css('background-color', '#00A49D').siblings().css('background-color', '#BCBCBC');
		$('.img').attr('src', 'images/about'+i+'.png');

	})
	$('.ul2>li').mouseover(function() {

		clearInterval(timer)
	})
	$('.ul2>li').mouseout(function() {
		timer = setInterval(move, 1000);
	})
})