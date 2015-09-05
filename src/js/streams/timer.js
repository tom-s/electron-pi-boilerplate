
import Bacon from 'baconjs'

export default class TimerStream {
    constructor() {
        return Bacon.interval(300).map(() => {
            return new Date();
        });
    }
}

