var $bannerUl=$('#banner ul'),$bannerLi=$('#banner ul li');
    //动态获取ul的宽度
    $bannerUl.css('width',$bannerLi.width()*$bannerLi.length);
	function effects() {
		setTimeout(function(){
		   $bannerUl.animate({
			   'marginLeft':-$bannerLi.width()
		   },500,function(){
			   $(this).animate({'marginLeft':0},0)
				   .find('li').eq(0).appendTo($(this));
			   //把每次移动后的第一个li放到ul的最后面
			   /*
			   * 由于把第一个li放到ul的最后面，就会把第二个li挤到第一个li的位置，但是我们又需要显示第二个li，
			   * 所以需要移动回原点，但是这个移动过程不能被看到，所以执行时间是0
			   */
		   });
		   effects()
		},3000);
	}
	effects()