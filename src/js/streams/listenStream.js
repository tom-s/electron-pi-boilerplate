import Rx from 'rx'
import socket from '../utils/socket.js'

export default class ListenStream {
    constructor() {
        var listening =  Rx.Observable.fromEvent(socket, 'listening');
        var notListening =  Rx.Observable.fromEvent(socket, 'notListening');

        return Rx.Observable.merge(listening.map(true), notListening.map(false));
    }
}