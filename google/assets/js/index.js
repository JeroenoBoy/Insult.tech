$(async () => {

	$('#link').hide();


	$('#generate').on('click', () => {
		
		const input = $('#search-bar').val()

		//	Check if valid
		if(!(/\w+/g.test(input)))
			return notify('fa fa-ban', 'danger', 'Invalid input!');

		//	Creating link
		notify('fa fa-check', 'success', 'Generated link.');
		$('#link').val(location.href + encodeURI(input.split(' ').join('+'))).show(500);
	})


	$('#link').on('click', () => {
		const input = $('#link').val();

		console.log('clicked');

		//	Check if valid
		if(!(/\w+/g.test(input)))
			return;
		
 		/* Get the text field */
		var copyText = document.getElementById('link');

		/* Select the text field */
		copyText.select();
		copyText.setSelectionRange(0, 99999); /*For mobile devices*/

		/* Copy the text inside the text field */
		document.execCommand('copy');
		notify('fa fa-check', 'success', 'Copied to clipboard.');
	})
})



function notify(icon, type, message) {
	$.notify({
		// options
		icon,
		message 
	},{
		// settings
		type
	});
	return;
}