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
        return (
            <div className="Clock">
                <span className="Hours">{this.state.hours}h</span><span className="Separator"/>
                <span className="Minutes">{this.state.minutes}min</span><span className="Separator"/>
                <span className="Minutes">{this.state.seconds}s</span><span className="Separator"/>
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
        window.requestAnimationFrame(_.bind(() => {
            this._tick();
        }, this)); // requestAnimationFrame or setTimeout ?
    }
};