// Tools
import React from 'react'
import _ from 'lodash'
// Mixins
import widgetMixin from './../widgetMixin.jsx'
// Streams
import TimerStream from '../streams/timer.js'

const TIMER = new TimerStream();

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'date': null
        }
    }

    componentDidMount() {
        // Subscribe to streams
        this._unsubscribe = TIMER.onValue(date => {
            this.setState({
                date: date
            });
        });
    }

    componentWillUnmount() {
        this._unsubscribe();
    }


    render() {
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
};

// Props
Clock.propTypes = {
};
Clock.defaultProps = {
};

// Mixins
//Clock = widgetMixin(Clock);

export default Clock;