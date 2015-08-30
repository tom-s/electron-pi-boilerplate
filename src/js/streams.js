
import Bacon from 'baconjs'
import request from 'superagent'

require('superagent-jsonp')(request);

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

        this.Timer = Bacon.interval(300).map(() => {
            return new Date();
        })//.log();

        //this.Loading = new Bacon.Bus;
        this.Weather = Bacon.interval(3000).flatMap(this.getWeather).map(res => {
            console.log("retrieved weathers");
            return res.body.currently
        }).log()

        this.CurrentHomeWidgetId = this.Input.scan(-1, (currentVal, direction) => {
            var newVal = currentVal;
            console.log("currentval", currentVal);
            switch(currentVal) {
                case -1:
                    switch(direction) {
                        case 'top':     newVal = 0; break;
                        case 'down':    newVal = 4; break;
                        case 'left':    newVal = 3; break;
                        case 'right':   newVal = 3; break;
                    }
                    break;
                case 0: //logo
                    switch(direction) {
                        case 'top':     newVal = 4; break;
                        case 'down':    newVal = 3; break;
                        case 'left':    newVal = 2; break;
                        case 'right':   newVal = 1; break;
                    }
                    break;
                case 1: // meteo
                    switch(direction) {
                        case 'top':     newVal = 5; break;
                        case 'down':    newVal = 3; break;
                        case 'left':    newVal = 0; break;
                        case 'right':   newVal = 2; break;
                    }
                    break;
                case 2: // time
                    switch(direction) {
                        case 'top':     newVal = 5; break;
                        case 'down':    newVal = 3; break;
                        case 'left':    newVal = 1; break;
                        case 'right':   newVal = 0; break;
                    }
                    break;
                case 3: // nav
                    switch(direction) {
                        case 'top':     newVal = 0; break;
                        case 'down':    newVal = 4; break;
                        case 'left':    newVal = 3; break;
                        case 'right':   newVal = 3; break;
                    }
                    break;
                case 4: // messages
                    switch(direction) {
                        case 'top':     newVal = 3; break;
                        case 'down':    newVal = 0; break;
                        case 'left':    newVal = 5; break;
                        case 'right':   newVal = 5; break;
                    }
                    break;
                case 5: // reminders
                    switch(direction) {
                        case 'top':     newVal = 3; break;
                        case 'down':    newVal = 0; break;
                        case 'left':    newVal = 4; break;
                        case 'right':   newVal = 4; break;
                    }
                    break;

            }
            return newVal;
        }).log();
    }

    getWeather() {
        return Bacon.fromPromise(request
                .get('https://api.forecast.io/forecast/a74e8df1fad1212a4a0dcb3f2dd45a61/37.8267,-122.423')
                .jsonp()
        );
    }
}

