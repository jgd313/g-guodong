$(function(){
				$(".simg").click(function(){
					if($(this).attr('src')=="images/add.png"){
						$(".ff2").slideDown(1000);
						$(this).attr('src',"images/jian.png");
					}else{
						$(".ff2").slideUp(1000);
						$(this).attr('src',"images/add.png");
					}
				})
				
				$(".sim").click(function(){
					if($(this).attr('src')=="images/add.png"){
						$(".f6").slideDown(1000);
						$(this).attr('src',"images/jian.png");
					}else{
						$(".f6").slideUp(1000);
						$(this).attr('src',"images/add.png");
					}
				})
			})