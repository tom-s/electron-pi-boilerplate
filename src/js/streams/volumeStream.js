import Rx from 'rx'

let VolumeStream = (() => {
    // Stream
    return new Rx.BehaviorSubject(true);
})();

export default VolumeStream;