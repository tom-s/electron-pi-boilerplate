import Bacon from 'baconjs'
import Io from 'socket.io-client'
import socket from '../utils/socket.js'

export default class SocketStream {
    constructor() {
        var connections =  Bacon.fromEventTarget(socket, 'connect');
        var disconnections =  Bacon.fromEventTarget(socket, 'disconnect');
        var errors =  Bacon.fromEventTarget(socket, 'connect_error');

        return Bacon.combineTemplate({
            connected: Bacon.once(false).merge(connections.map(true).merge(disconnections.map(false))),
            events:  Bacon.once().merge(errors).map((error) => {
                console.log("error", error);
                return error;
            })
        });
    }
}

