import React from 'react'
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
            <div className="Clock">
                <span className="Hours">{this.state.hours}h</span><span className="Separator"/>
                <span className="Minutes">{this.state.minutes}min</span><span className="Separator"/>
                {seconds}
            </div>
        );
    }

    _tick() {
        // Set current time time
        var date = new Date();

        this.setState({
            'hours': date.getHours(),
            'minutes': date.getMinutes(),
            'seconds': date.getSeconds()
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