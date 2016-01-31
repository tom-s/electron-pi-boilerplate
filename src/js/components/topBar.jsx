 
import React from 'react'
import ClassNames from 'classnames'

// Components
import Clock from './clock.jsx'

// Streams
import VolumeStream from '../streams/volumeStream.js'
import MessageStream from '../streams/messageStream.js'
import ModalStream from '../streams/modalStream.js'
import ConnectionStream from '../streams/connectionStream.js'

// Images
import RaspIcon from '../../images/Raspicon.png';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            connected: false,
            soundOn: true
        };
    }

    componentDidMount() {
        MessageStream.subscribe((data) => {
            this.setState({
                count: data.count || 0
            });
        });
        ConnectionStream.subscribe((connected) => {
            console.log("connc=ected ? ", connected);
            this.setState({
                connected: connected
            });
        });
         VolumeStream.subscribe((on) => {
            this.setState({
                soundOn: on
            });
        });
    }

    componentWillUnmount() {
        MessageStream.dispose();
        ConnectionStream.dispose();
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

        var connectionIcons = ClassNames({
            'icon': true,
            'clickable': true,
            'icon-connection': true,
            'hidden': !this.state.connected
        });

        return (
            <header className="bar bar-nav">
                <h1 className="title">Thomster</h1>
                <Clock/>
                <div className="Icons-wrapper pull-right">
                    <img className={connectionIcons} src={RaspIcon}/>
                    <span className={volumeClasses} onClick={this._toggleSound.bind(this)}></span>
                </div>
            </header>
        );
    }

    _showMessages() {
        ModalStream.onNext({
            active: true,
            type: 'MESSAGES'
        });
    }

      _toggleSound() {
        VolumeStream.onNext(!this.state.soundOn);
    }

};


export default TopBar;