// Tools
import React from 'react'
import _ from 'lodash'

// Streams
import TimerStream from '../streams/timerStream.js'

class Confirmation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        /*
        TimerStream.subscribe((date) => {
            this.setState({
                date: date
            });
        });*/
    }

    componentWillUnmount() {
        //TimerStream.dispose();
    }

    render() {
        return (
            <div className="Confirmation Confirmation-success">
              <div className="Circle"></div>
              <div className="Circle"></div>    
            </div> 

        );
    }
};

export default Confirmation;