;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});

			$('.menu-wrap').on('click'), function() {
				$('#menuToggle').toggleClass('.menu-close');
			});

			WebFont.load({
				google: {
					families: ['Poppins:300,700']
				}
			});


})(jQuery)