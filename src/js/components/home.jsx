import React from 'react'
import Socket from '../utils/socket.js'

// Components
import Clock from './clock.jsx'
import DynamicText from './dynamicText.jsx'
import Microphone from './microphone.jsx'
import Result from './result.jsx'
import SocketStatus from './socketStatus.jsx'

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
                    <div className="Result-wrapper">
                        <Result/>
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