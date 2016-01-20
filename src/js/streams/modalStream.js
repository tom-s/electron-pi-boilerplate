import Rx from 'rx'
import socket from '../utils/socket.js'

let ModalStream = (() => {

    // Stream
    return new Rx.ReplaySubject(1).startWith(false);
})();

export default ModalStream;