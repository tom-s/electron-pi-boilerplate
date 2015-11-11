// Tools
import React from 'react'
import _ from 'lodash'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'date': null
        }
    }

    componentDidMount() {
       this._tick();
    }

    componentWillUnmount() {
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

    _tick() {
        var date = new Date();
        this.setState({
            date: date
        });
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