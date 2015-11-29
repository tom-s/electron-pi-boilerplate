import Bacon from 'baconjs'
import socket from '../utils/socket.js'

export default class ListenStream {
    constructor() {
        var listening =  Bacon.fromEventTarget(socket, 'listening');
        var notListening =  Bacon.fromEventTarget(socket, 'notListening');

        return Bacon.once(false).merge(listening.map(true).merge(notListening.map(false)))
    }
}