$(function() {

impress().init();
$('.hidden').css('opacity',0);
window.addEventListener('impress:stepenter', function(e) {
  $('.hidden.active').animate({'opacity': 1});
  var currentSlide = $(e.target).attr('id');
  switch(currentSlide) {
    case 'locos':
      break;
    case 'preguntas':
      $('#dispara').css('opacity', 1).addClass('animated bounceInUp');
      break;
    case 'probar':
    	$('#probar p').each(function(){
      	if($(this).hasClass('big')){
      	}else{
      		$(this).css('opacity', 1).addClass('animated fadeInDown');
      	}
    	});
    	break;
    case 'ejemplos':
    	$('#ejemplos img').css('opacity', 1).addClass('animated fadeInUp');
    	break;
    case 'ejemplo-html':
    	$('#ejemplo-html img').css('opacity', 1).addClass('animated zoomInDown');
    	break;
    default:
      break;
	}
	
});
window.addEventListener('impress:stepleave', function(e) {
  $('.hidden.past').animate({'opacity': 0});
});

});
