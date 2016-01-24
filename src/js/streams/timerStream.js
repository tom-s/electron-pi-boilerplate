import Rx from 'rx'

let TimerStream = (() => {
     return Rx.Observable.timer(0, 300).map(time => new Date()).publish().refCount();
})();

export default TimerStream;