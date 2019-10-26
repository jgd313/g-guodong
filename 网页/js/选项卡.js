$(function(){
			var li=$(".ul3 li");
			li.click(function(){
				var index=$(this).index();
				console.log(index)
				
				$(this).addClass('sp1').siblings().removeClass('sp1')
				$('.ul4 li').eq(index).css('display','block') .siblings().css('display', 'none');
			})
})