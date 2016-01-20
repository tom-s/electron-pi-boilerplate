// Tools
import React from 'react'
import _ from 'lodash'

// Streams
import ConnectionStream from '../streams/connectionStream.js'

class SocketStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            connected: true
        };
    }

    componentDidMount() {
        ConnectionStream.subscribe((connected) => {
            console.log("connected ?", connected);
            this.setState({
                connected: connected
            });
        });
    }

    componentWillUnmount() {
        ConnectionStream.dispose();
    }

    render() {
        if(this.state.connected) return null;

        return (
            <div className="Socket">
                NOT CONNECTED !
            </div>
        );
    }
};

export default SocketStatus;