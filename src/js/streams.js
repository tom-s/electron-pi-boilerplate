
import Bacon from 'baconjs'

export default class Streams {
    constructor() {
        // Used to build other streams
        this.Input = Bacon.fromEvent(window.document.body, "keyup").filter(e => {
            return e.keyCode >= 37 && e.keyCode <=40;
        }).map(e => {
            var direction;
            switch(e.keyCode) {
                case 37: direction = 'left'; break;
                case 38: direction = 'top'; break;
                case 39: direction = 'right'; break;
                case 40: direction = 'down'; break;
            }
            return direction;
        })//.log();

        this.Timer = Bacon.interval(500).map(() => {
            return new Date();
        })//.log();

        this.CurrentHomeWidget = this.Input.scan(0, (currentVal, direction) => {
            var newVal = currentVal;
            switch(currentVal) {
                case 0: //logo
                    switch(direction) {
                        case 'bottom':  newVal = 0; break;
                        case 'top':     newVal = 0; break;
                        case 'left':    newVal = 0; break;
                        case 'right':   newVal = 0; break;
                    }
                    break;
                case 1: // meteo
                    switch(direction) {
                        case 'bottom':  newVal = 0; break;
                        case 'top':     newVal = 0; break;
                        case 'left':    newVal = 0; break;
                        case 'right':   newVal = 0; break;
                    }
                    break;
                case 2: // time
                    switch(direction) {
                        case 'bottom':  newVal = 0; break;
                        case 'top':     newVal = 0; break;
                        case 'left':    newVal = 0; break;
                        case 'right':   newVal = 0; break;
                    }
                    break;
                case 3: // nav
                    switch(direction) {
                        case 'bottom':  newVal = 0; break;
                        case 'top':     newVal = 0; break;
                        case 'left':    newVal = 0; break;
                        case 'right':   newVal = 0; break;
                    }
                    break;
                case 4: // messages
                    switch(direction) {
                        case 'bottom':  newVal = 0; break;
                        case 'top':     newVal = 0; break;
                        case 'left':    newVal = 0; break;
                        case 'right':   newVal = 0; break;
                    }
                    break;
                case 5: // reminders
                    switch(direction) {
                        case 'bottom':  newVal = 0; break;
                        case 'top':     newVal = 0; break;
                        case 'left':    newVal = 0; break;
                        case 'right':   newVal = 0; break;
                    }
                    break;

            }
            return newVal;
        }).log();
    }
}

