import Rx from 'rx'
import socket from '../utils/socket.js'
import MessageStream from './messageStream'

let ModalStream = (() => {

    // Stream
    return new Rx.BehaviorSubject({
    	active: false,
    	type: 'MESSAGES'
    });
})();

export default ModalStream;