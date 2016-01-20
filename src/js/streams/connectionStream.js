import Rx from 'rx'
import socket from '../utils/socket.js'

// Source Streams
let connections =  Rx.Observable.fromEvent(socket, 'connect');
let disconnections =  Rx.Observable.fromEvent(socket, 'disconnect');

// Stream
let ConnectionStream = Rx.Observable.merge(connections.map(true), disconnections.map(false)).startWith(false);
export default ConnectionStream;

