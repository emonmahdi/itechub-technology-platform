$(document).ready(function(){

  $(window).scroll(function(){
    if (window.scrollY > 20) {
      $('.navvbar').addClass('stickynav');
    }else{
      $('.navvbar').removeClass('stickynav');
    } 
  });

  // Carousel 

   $('.carousel').carousel({
      interval: 2000,
    });


   // menu

  $('.menu ul li a').click(function(){
    $('.menu ul li a').removeClass('activee');
    $(this).addClass('activee');
  });


 // Venibox 
	$('.venobox').venobox({
		titleattr: 'data-title',
		spinner: 'spinner-pulse'
	}); 


	$('#client-section .our-client').owlCarousel({
    	loop:true,
	    margin:20,
	    nav:true,
	    autoplay:false,
	    autoplayTimeout:4000,
	    smartSpeed:1350,
	    responsive:{
	        0:{
	            items:3
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:6
	        }
	    }
    });

    // =========================

	$('#body-portfolio .mobile-apps').owlCarousel({
    	loop:true,
	    margin:20,
	    nav:true,
	    autoplay:false,
	    autoplayTimeout:4000,
	    smartSpeed:1350,
	    responsive:{
	        0:{
	            items:3
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:3
	        }
	    }
    });

 

});


	function openNav(){
		document.getElementById('MyNav').style.width = "100%";
	}
	function closeNav(){
		document.getElementById('MyNav').style.width = "0%";
	}