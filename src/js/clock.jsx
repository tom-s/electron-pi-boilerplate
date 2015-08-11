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
        // Set initial time
        var date = new Date();

        this.setState({
            'hours': date.getHours(),
            'minutes': date.getMinutes(),
            'seconds': date.getSeconds()
        });
    }

    render() {
        return (
            <div className="Clock">
                <span className="Hours">12</span><span className="Separator">
                <span className="Minutes">12</span><span className="Separator">
            </div>
        );
    }
};