// Tools
import React from 'react'
import _ from 'lodash'

// Streams
import TimerStream from '../streams/timer.js'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'date': null
        };
    }

    componentDidMount() {
        this.timerStream = new TimerStream();
        this.timerStream.onValue(function(date) {
            this.setState({
                date: date
            });
        }.bind(this));

       this._tick();
    }

    componentWillUnmount() {
        this.timerStream();
    }

    render() {
        if(!this.state.date) return null;

        // Format time
        var hours = (this.state.date) ? ('0'  + this.state.date.getHours()).slice(-2) : null;
        var minutes = (this.state.date) ? ('0'  + this.state.date.getMinutes()).slice(-2) : null;

        return (
            <div className="Clock text-center">
                <span className="Hours">{hours}:</span>
                <span className="Minutes">{minutes}</span>
            </div>
        );
    }

    _tick() {
        window.setTimeout(function() {
            this._tick();
        }.bind(this), 500);
    }
};

// Mixins
//Clock = widgetMixin(Clock);

export default Clock;