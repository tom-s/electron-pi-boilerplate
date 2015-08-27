
import Bacon from 'baconjs'

export default {
    Timer : Bacon.interval(500).map(function() {
        return new Date();
    })
}