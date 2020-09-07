const {fork} = require('child_process');
const fs = require('fs');

//	Config
const amount = 2000;
const maxPerFile = 100;
const workers = 20;

//	Datas
let messages = 0;
let index = -1;
let streamIndex = 1;

const msg = {
	proxyUrl: '',
	link: 'https://back.insult.tech/dont',
	amount: amount / workers
}

let stream = fs.createWriteStream('../insults/1.txt');


function write(msg) {
	index++;
	messages++;

	if(messages >= amount) {
		stream.close();
		process.exit();
	}
	
	if(index >= maxPerFile) {
		index = 0;
		streamIndex++;
		stream.close();
		stream = fs.createWriteStream('../insults/'+ streamIndex +'.txt');
	}

	stream.write(msg + '\n')
}


for(let i = 0; i < workers; i++) {
	const worker = new fork('./childs.js')
	worker.on('message', write)

	worker.send(msg)
}