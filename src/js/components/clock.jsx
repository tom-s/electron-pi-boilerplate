// Tools
import React from 'react'
import _ from 'lodash'

// Streams
import TimerStream from '../streams/timerStream.js'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'date': null
        };
    }

    componentDidMount() {
        TimerStream.subscribe((date) => {
            this.setState({
                date: date
            });
        });

       this._tick();
    }

    componentWillUnmount() {
        TimerStream.dispose();
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
        window.setTimeout(() => {
            this._tick();
        }, 500);
    }
};

// Mixins
//Clock = widgetMixin(Clock);

export default Clock;