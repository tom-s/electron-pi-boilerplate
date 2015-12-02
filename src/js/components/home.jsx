import React from 'react'
import Socket from '../utils/socket.js'

// Components
import Clock from './clock.jsx'
import DynamicText from './dynamicText.jsx'
import Microphone from './microphone.jsx'
import Query from './query.jsx'
import Response from './response.jsx'
import SocketStatus from './socketStatus.jsx'
import TabBar from './tabBar.jsx'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Home">
                <header className="bar bar-nav">
                    <h1 className="title">Thomster</h1>
                    <div className="Clock-wrapper">
                        <Clock/>
                    </div>
                </header>

                <div className="Content clearfix">
                    <div className="Query-wrapper">
                        <Query/>
                    </div>
                    <div className="Microphone-wrapper">
                        <Microphone/>
                    </div>
                    <div className="Response-wrapper">
                        <Response/>
                    </div>
                </div>


                {/* Footer */}
                <TabBar/>

                {/*
                <div className="Socket-wrapper">
                    <SocketStatus />
                </div>
                */}
            </div>
        );
    }
};

// Props
Home.propTypes = {
};
Home.defaultProps = {
};

export default Home;