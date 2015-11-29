import Bacon from 'baconjs'
import socket from '../utils/socket.js'

export default class ConnectionStream {
    constructor() {
        var connections =  Bacon.fromEventTarget(socket, 'connect');
        var disconnections =  Bacon.fromEventTarget(socket, 'disconnect');

        return Bacon.once(false).merge(connections.map(true).merge(disconnections.map(false)))
    }
}

