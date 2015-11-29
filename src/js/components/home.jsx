import React from 'react'

// Components
import Clock from './clock.jsx'
import DynamicText from './dynamicText.jsx'
import Microphone from './microphone.jsx'
import SocketStatus from './socketStatus.jsx'
import Socket from '../utils/socket.js'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="Home">
                <div className="Clock-wrapper">
                    <Clock/>
                </div>
                <div className="Content">
                    <div className="DynamicText-wrapper">
                        <DynamicText/>
                    </div>
                    <div className="Microphone-wrapper">
                        <Microphone/>
                    </div>
                </div>
                <div className="Socket-wrapper">
                    <SocketStatus />
                </div>
            </div>
        );
    }
};

// Props
Home.propTypes = {
    date: React.PropTypes.instanceOf(Date)
};
Home.defaultProps = {
    date: new Date()
};

export default Home;