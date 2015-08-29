import React from 'react'
import _ from 'lodash'
import widgetMixin from './../widgetMixin.jsx'

class Clock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Format time
        var hours = ('0'  + this.props.date.getHours()).slice(-2);
        var minutes = ('0'  + this.props.date.getMinutes()).slice(-2);
        var seconds =  (this.props.seconds) ? ('0'  + this.props.date.getSeconds()).slice(-2) : null;

        return (
            <div className="Clock text-center">
                <span className="Hours">{hours}:</span>
                <span className="Minutes">{minutes}</span>
                <span className="Seconds">{seconds}</span>
            </div>
        );
    }
};

// Props
Clock.propTypes = {
    seconds:  React.PropTypes.bool,
    date: React.PropTypes.instanceOf(Date)
};
Clock.defaultProps = {
    seconds: false,
    date: new Date()
};

// Mixins
Clock = widgetMixin(Clock);

export default Clock;