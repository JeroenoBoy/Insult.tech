$(async() => {
	$('#mouse').hide();


	//	Setting positions
	let start = {
		x: 0,
		y: 200
	};
	
	let target = $('#search-bar');
	let offset = {
		x: 15,
		y: target.height() / 2
	};
	

	/**
	* Moving mouse to search icon
	*/

	notify('fa fa-mouse-pointer', 'success', 'Step 1: Click the search icon.');
	await sleep(100);
	
	//	showing propperties
	$('#mouse').show();
	$('#mouse').css({
		top: start.y,
		left: start.x
	});
	
	//	Actually start moving the mouse
	moveMouse(target, offset, 2000);
	await sleep(1500);

	//	Adding hover effect
	$('.search').css({
		'box-shadow': '0px 0px 5px 0px #aaa'
	});
	await sleep(600);
	
	/**
	* Starting typing animation
	*/
	
	//	variables
	anim = {
		state: 'WAIT-0',
		index: 0,
		characters: '',
		tag: $('#search-bar')
	};
	

	notify('fa fa-keyboard-o', 'success', 'Step 2: Type what you need to search.');
	
	let typing = true;
	while (typing) {
		let e = '|';
		switch (anim.state) {
			case 'WAIT-0':
				if (anim.index % 10 > 4) {
					e = ''
				}
				if (anim.index > 20) {
					anim.state = 'WRITE';
					anim.index = -1
				}
				break;
			case 'WRITE':
				if (url[anim.index] == null) {
					anim.state = 'WAIT-1';
					anim.index = -1
				} else {
					anim.characters = anim.characters + url[anim.index]
				}
				break;
			case 'WAIT-1':
				e = '';
				typing = false;
				break
		}
		anim.tag.val(anim.characters + e);
		anim.index += 1;
		
		anim.tag.scrollLeft(anim.characters.length * 2);
		await sleep(50);
		
		//	If the mouse moves
		let offset = {
			x: 15,
			y: target.height() / 2
		};
		moveMouse(target, offset, 45)
	}
	await sleep(100);
	
	/**
	* Clicking the button
	*/

	notify('fa fa-search', 'success', 'Step 3: Click search.');
	await sleep(200);
	
	//	moving mouse
	target = $('#search-button');
	moveMouse(target, offset, 1000);
	await sleep(100);
	
	//	removing search shadow
	$('.search').css({
		'box-shadow': 'none'
	});
	await sleep(650);
	
	//	setting button shadow
	$('#search-button').css({
		'box-shadow': '0px 0px 3px 0px #aaa'
	});
	await sleep(800);
	
	//	Final insult
	notify('fa fa-user', 'danger', 'Was it really that hard?');
	
	//	loop for if screen size changes
	for (let i = 0; i < 500; i += 1) {
		offset = {
			x: target.width() / 2,
			y: target.height() / 2
		};
		
		moveMouse(target, offset, 2500 / 500 - 5);
		await sleep(2500 / 500)
	}
	location.href = 'https://www.google.com/search?q=' + encodeURI(url)
});

function moveMouse(target, offset, time) {
	let final = {
		x: target.offset().left + offset.x,
		y: target.offset().top + offset.y
	};
	$('#mouse').animate({
		left: final.x,
		top: final.y
	}, time)
}

function sleep(ms) {
	return new Promise(res => setTimeout(res, ms))
}

function notify(icon, type, message) {
	$.notify({
		icon,
		message
	}, {
		type
	});
	return
}