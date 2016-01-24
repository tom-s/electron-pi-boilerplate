import Rx from 'rx'
import socket from '../utils/socket.js'

let MessageStream = (() => {
	// We want a hot subject so that we don't loose the history
	let stream = new Rx.BehaviorSubject({
		messages: [],
		count: 0
	});
	let Msg = Rx.Observable.fromEvent(socket, 'GROUPME_MESSAGE_RECEIVED');
	let msgsBuffer = [];
	let bufferSize = 50;

	// Stream
	Msg.subscribe((msg) => {
		msgsBuffer.push(msg);
		stream.onNext({
			messages: _.takeRight(msgsBuffer, bufferSize),
			count: (msgsBuffer.length < bufferSize) ? msgsBuffer.length : bufferSize
		});
	});

	return stream;
})();

export default MessageStream;