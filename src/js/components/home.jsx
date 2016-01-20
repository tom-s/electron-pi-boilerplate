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
import SidePage from './sidePage.jsx'
import Modal from './modal.jsx'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidePageType: null
        }
    }

    componentDidMount() {
        this.setState({
            sidePageType: 'timer'
        });
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

                <div className="Content clearfix slider">
                    <div className="slide-group">
                        <div className="slide MainContent">
                            <div className="Microphone-wrapper">
                                <Microphone/>
                            </div>
                            <div className="Query-wrapper">
                                <Query/>
                            </div>
                            <div id="ResponseWrapper" className="Response-wrapper">
                                <Response wrapperId="ResponseWrapper"/>
                            </div>
                        </div>
                        <div className="slide SideContent">
                            <SidePage type={this.state.sidePageType} />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <TabBar/>

                {/* Modal */}
                <Modal/>

                {
                <div className="Socket-wrapper">
                    <SocketStatus />
                </div>
                }
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