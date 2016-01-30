import React from 'react'
import Socket from '../utils/socket.js'
import ClassNames from 'classnames'

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

// Streams
import VolumeStream from '../streams/volumeStream.js'
    
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidePageType: null,
            soundOn: true
        }
    }

    componentDidMount() {
        VolumeStream.subscribe((on) => {
            this.setState({
                soundOn: on
            });
        });
    }

    componentWillUnmount() {
        VolumeStream.dispose();
    }

    render() {

        // Icons
        var volumeClasses = ClassNames({
            'icon': true,
            'icon-sound': this.state.soundOn,
            'icon-sound4': !this.state.soundOn,
            'clickable': true
        });

        return (
            <div className="Home">
                <header className="bar bar-nav">
                    <h1 className="title">Thomster</h1>
                    <Clock/>
                    <div className="Icons-wrapper pull-right">
                         <span className={volumeClasses} onClick={this._toggleSound.bind(this)}></span>
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

    _toggleSound() {
        VolumeStream.onNext(!this.state.soundOn);
    }
};

// Props
Home.propTypes = {
};
Home.defaultProps = {
};

export default Home;