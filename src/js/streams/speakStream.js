import Bacon from 'baconjs'
import socket from '../utils/socket.js'

export default class SpeakStream {
    constructor() {
        var speak = Bacon.fromEventTarget(socket, 'speak');
        return Bacon.once('zzzzzzzzzzzzzzz...').merge(speak.map((data) => {
            return data.text;
        }));
    }
}