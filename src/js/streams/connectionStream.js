import Rx from 'rx'
import socket from '../utils/socket.js'

let ConnectionStream = (() => {
	// Source Streams
	let connections =  Rx.Observable.fromEvent(socket, 'connect');
	let disconnections =  Rx.Observable.fromEvent(socket, 'disconnect');

	// Stream
	return Rx.Observable.merge(connections.map(true), disconnections.map(false)).startWith(false);
})();

export default ConnectionStream;

