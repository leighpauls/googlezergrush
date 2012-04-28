
$(document).ready(function (){

	// self-perpetuating function
	var clickZerglings = function () {
		$('.zr_zergling_container').each(function() {
			var pos = $(this).position();
			$(this).simulate('mousedown', {
				clientX: pos.left + 1,
				clientY: pos.top + 1
			});
		});		
		
		setTimeout(clickZerglings, 10);
	};

	$(document).on('keydown', function(event) {
		// stop when TAB is hit
		if (event.which === 9) {
			clickZerglings = function() {};
		}
	});

	// start the loop
	clickZerglings();
});


