import Rx from 'rx'
import socket from '../utils/socket.js'

let MessageStream = (() => {
	let stream = new Rx.BehaviorSubject({
		messages: [],
		count: 0
	});
	let Msg = Rx.Observable.fromEvent(socket, 'GROUPME_MESSAGE_RECEIVED');
	let msgsBuffer = [];

	// Stream
	Msg.subscribe((msg) => {
		msgsBuffer.push(msg);
		stream.onNext({
			messages: msgsBuffer,
			count: msgsBuffer.length
		});
	});

	return stream;
})();

export default MessageStream;