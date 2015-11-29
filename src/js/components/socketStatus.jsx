// Tools
import React from 'react'
import _ from 'lodash'

// Streams
import SocketStream from '../streams/socket.js'

class SocketStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            connected: true
        };
    }

    componentDidMount() {
        this.socketStream = new SocketStream();
        this.socketStream.onValue((socket) => {
            this.setState({
                connected: socket.connected
            });
        });
    }

    componentWillUnmount() {
        this.socketStream();
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