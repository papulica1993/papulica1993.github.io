
  /* header
  ------------------------------------------------------------*/
  $(function() {
    　$('.toggle').click(function() {
       $(this).toggleClass('active');
      });
  });
  
  $(document).ready(function(){
      $(".toggle").click(function(){
        $(".sp_menu_toggle").slideToggle();
      });
  });
  
  /* carousel
  ------------------------------------------------------------*/
$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
              {
            loop: true,
            items: 1,
            autoplay: true,
            stagePadding: 10,
            autoHeight: true,

        }
    );
});

  /* scroll
  ------------------------------------------------------------*/
$(document).ready(function(){
      $(".menu_swipe_1").click(function () {
        const position = $('#udon_point').offset().top;
        const speed = 200;
        $("html,body").animate({scrollTop:position},speed);
      });
  });
  
$(document).ready(function(){
      $(".menu_swipe_2").click(function () {
        const position = $('#top_point').offset().top;
        const speed = 200;
        $("html,body").animate({scrollTop:position},speed);
      });
  });
  
$(document).ready(function(){
      $(".menu_swipe_3").click(function () {
        const position = $('#side_point').offset().top;
        const speed = 200;
        $("html,body").animate({scrollTop:position},speed);
      });
  });
  
  /* tab
  ------------------------------------------------------------*/
$(document).ready(function(){
	$('.tab').click(function(){
		$('.is-active').removeClass('is-active');
		$(this).addClass('is-active');
		$('.is-show').removeClass('is-show');
		const index = $(this).index();
		$('.news_list').eq(index).addClass('is-show');
	});
});

$(document).ready(function(){
	$('.tab2').click(function(){
		$('.is-active').removeClass('is-active');
		$(this).addClass('is-active');
		$('.is-show').removeClass('is-show');
		const index = $(this).index();
		$('.news_list').eq(index-3).addClass('is-show');
	});
});