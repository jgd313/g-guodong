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
		$('.img').attr('src', 'images/imglun' + i + '.jpg');
	}
	timer = setInterval(move, 1000);

	$('.ul2>li').click(function() {
		var i = $(this).index();
		li2.eq(i).css('background-color', '#00A49D').siblings().css('background-color', '#BCBCBC');
		$('.img').attr('src', 'images/imglun' + i + '.jpg');

	})
	$('.ul2>li').mouseover(function() {

		clearInterval(timer)
	})
	$('.ul2>li').mouseout(function() {
		timer = setInterval(move, 1000);
	})
	
			
		$('.denglu').click(function(){
			$(".deng").css('display','block');
		})
		$('.zhuce').click(function(){
			$(".zhu").css('display','block')
		})
		
		
		$(window).scroll(function() {
		 var nowTop = $(document).scrollTop();
//             console.log(nowTop);
            if(nowTop>80){
            	$('.one1').css({
            	display:'block',
            	marginTop:-37
            });
            }else{
            	$('.one1').css('display','none')
            }
            if(nowTop>600){
               $('.fanhui').fadeIn();
          }
          else{
              $('.fanhui').fadeOut();
          }
	});
			
		 $('.fanhui').click(function() {
            
            $('html,body').animate({'scrollTop':0});

        })
		$(function(){
			$('.guanbi').click(function(){
				$('.deng').hide();
				$('.zhu').hide();
				
			})
			
		})
		

})