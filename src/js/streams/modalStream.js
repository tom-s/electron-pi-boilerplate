import Rx from 'rx'
import socket from '../utils/socket.js'
import MessageStream from './messageStream'

let ModalStream = (() => {
	
	/*
	return Rx.Observable.merge(MessageStream.map((data) => {
        return true;
    })).startWith(false); */

    // Stream
    return new Rx.BehaviorSubject({
    	active: false,
    	type: 'MESSAGES'
    });
})();

export default ModalStream;