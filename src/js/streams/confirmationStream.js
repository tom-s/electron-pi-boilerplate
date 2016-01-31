import Rx from 'rx'

let ConfirmationStream = (() => {
    // Stream
    return new Rx.BehaviorSubject(null);
})();

export default ConfirmationStream;