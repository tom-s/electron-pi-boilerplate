import Rx from 'rx'
import socket from '../utils/socket.js'

let ModalStream = (() => {

    // Stream
    return new Rx.BehaviorSubject(false);
})();

export default ModalStream;