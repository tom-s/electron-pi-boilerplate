import Rx from 'rx'
import socket from '../utils/socket.js'

let SpeakStream = (() => {
	let speak = Rx.Observable.fromEvent(socket, 'speak');
    
	// Stream
    return Rx.Observable.merge(speak.map((data) => {
        return data.text;
    })).startWith('zzzzzzzzzzzzzzz....');
})();

export default SpeakStream;