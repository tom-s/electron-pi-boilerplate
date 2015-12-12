
import Rx from 'rx'

export default class TimerStream {
    constructor() {
        return Rx.Observable.timer(0, 300).map(time => new Date()).publish().refCount();
    }
}

