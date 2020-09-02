$(() => {
	const proxyUrl = "", // optional, must be a CORS proxy
	links = ["https://back.insult.tech/insult/" + (user == "<none>" ? '' : '?who=' + encodeURI(user))];

	$("#insult").hide()
	
	$("button#generate").on("click", async t => {
		$("button#generate").prop("disabled", !0)
		await fetch(proxyUrl + links[0])
			.then(t => t.json())
			.then(t => 
				$("#insult")
					.show(500)
					.val(t.insult  + ".")
			)
		
		$("button#generate").prop("disabled", !1)
	})

	


	$('#insult').on('click', () => {
		const input = $('#insult').val();

		console.log('clicked');

		//	Check if valid
		if(!(/\w+/g.test(input)))
			return;

		console.log('clicked');
		
 		/* Get the text field */
		var copyText = document.getElementById('insult');
		console.log(copyText);

		/* Select the text field */
		copyText.select();
		copyText.setSelectionRange(0, 99999); /*For mobile devices*/

		/* Copy the text inside the text field */
		document.execCommand('copy');
		notify('fa fa-check', 'success', 'Copied to clipboard.');
	})
});




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