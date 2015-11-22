
import Bacon from 'baconjs'

export default class TimerStream {
    constructor() {
        return Bacon.once().merge(Bacon.interval(300000)).map(() => {
            return new Date();
        });
    }
}

