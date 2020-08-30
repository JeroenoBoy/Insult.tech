const fetch = require('node-fetch');

console.log("process added " + process.pid)

process.on('message', async msg => {

	for(let i = 0; i < msg.amount; i++) {
		await fetch(msg.proxyUrl + msg.link)
			.then(t => t.json())
			.then(t => {
					process.send(t.insult + '.')
		});
	}
})






// async function run() {
// 	for(let i = 0; i < 100; i++) {
// 		await fetch(proxyUrl + links[0])
		
// 			.then(t => t.json())
// 			.then(t => {
// 					stream.write(t.insult + '\n')
// 				}
// 			)
// 	}
// }

// run()