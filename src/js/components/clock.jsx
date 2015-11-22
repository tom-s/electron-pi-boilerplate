// Tools
import React from 'react'
import _ from 'lodash'

class Clock extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
       this._tick();
    }

    render() {
        // Format time
        var hours = (this.props.date) ? ('0'  + this.props.date.getHours()).slice(-2) : null;
        var minutes = (this.props.date) ? ('0'  + this.props.date.getMinutes()).slice(-2) : null;

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

// Props
Clock.propTypes = {
};
Clock.defaultProps = {
};

// Mixins
//Clock = widgetMixin(Clock);

export default Clock;