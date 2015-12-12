import Rx from 'rx'
import socket from '../utils/socket.js'

export default class SpeakStream {
    constructor() {
        var speak = Rx.observable.fromEvent(socket, 'speak');
        return Rx.observable.merge(speak.map((data) => {
            return data.text;
        })).startWith('zzzzzzzzzzzzzzz....');
    }
}