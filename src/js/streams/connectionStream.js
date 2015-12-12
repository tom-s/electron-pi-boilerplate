import Rx from 'rx'
import socket from '../utils/socket.js'

export default class ConnectionStream {
    constructor() {
        var connections =  Rx.Observable.fromEvent(socket, 'connect');
        var disconnections =  Rx.Observable.fromEvent(socket, 'disconnect');

        return Rx.Observable.just(false).merge(connections.map(true), disconnections.map(false));
    }
}

