jQuery(function($){
    function menuScript(){
        $('.search-submit').on('click', function(e){
            if(window.innerWidth <= 720){
                e.preventDefault()
            }
            $('.search-input').toggleClass('active')
        })
        
        $('.nav-menu .toggle, .menu-section .menu li.close').on('click', function(e){
            $('.nav-menu .menu').toggleClass('active')
        })
        
        $('.mega-menu-box ul.menu-menu > li').on('mouseover', function(){
            if(window.innerWidth > 720){
            $('.menucontent').css({display: 'none'})
            $(this).find('.menucontent').css({display: 'inline-block'})
            }
        })
        
        $('li.mega-menu-item .menucontent ul.items > li a').on('click', function(e){
            if(window.innerWidth <= 720){
            e.preventDefault()
            $(this).parent().toggleClass('active')
            console.log(this)
        
            }
        })
        
        $('li.mega-menu-item > a').on('click', function(e){
            if(window.innerWidth <= 720){
            e.preventDefault()
            $(this).parent().toggleClass('active')
            console.log(this)
            }
        })
        
    }
    
    menuScript()
    
    $(window).on('resize', menuScript)
})


var swiper = new Swiper(".product-image-slider", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".product-image-slider-2 ", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });


  var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 2.5,
    spaceBetween: 30,
   loop: true,
   navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  });

  