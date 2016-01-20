import Rx from 'rx'
import socket from '../utils/socket.js'

let ConnectionStream = (() => {
	// Source streams
	let listening =  Rx.Observable.fromEvent(socket, 'listening');
	let notListening =  Rx.Observable.fromEvent(socket, 'notListening');

	// Stream
	return Rx.Observable.merge(listening.map(true), notListening.map(false));
})();

export default ConnectionStream;