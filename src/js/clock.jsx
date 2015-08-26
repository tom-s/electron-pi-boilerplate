import React from 'react-dist'
import _ from 'lodash'

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: '',
            minutes: '',
            seconds: ''
        }
    }

    componentDidMount() {
        this._tick();
    }

    render() {
        var seconds = (this.props.seconds) ? (
            <span className="Seconds">{this.state.seconds}s</span>
        ) : null;
        return (
            <div className="Clock text-center">
                <span className="Hours">{this.state.hours}:</span>
                <span className="Minutes">{this.state.minutes}</span>
                {seconds}
            </div>
        );
    }

    _tick() {
        // Set current time time
        var date = new Date();

        this.setState({
            'hours': ('0'  + date.getHours()).slice(-2),
            'minutes': ('0'  + date.getMinutes()).slice(-2),
            'seconds': ('0'  + date.getSeconds()).slice(-2),
        });

        // Plan next tick
        var refreshDelay = (this.props.seconds) ? 300 : 1000;

        setTimeout(_.bind(() => {
            this._tick();
        }, this), refreshDelay);
    }
};

Clock.propTypes = {
    seconds:  React.PropTypes.bool
};
Clock.defaultProps = {
    seconds: false
};