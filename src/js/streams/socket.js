import Bacon from 'baconjs'
import Io from 'socket.io-client'

export default class SocketStream {
    constructor() {
        var socket = Io.connect('http://localhost:8000');

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

