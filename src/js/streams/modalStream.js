import Rx from 'rx'
import socket from '../utils/socket.js'

export default class ModalStream {
    constructor() {
        return new Rx.ReplaySubject(1).startWith(false);
    }
}