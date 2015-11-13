import React from 'react'
import Io from 'socket.io-client'

// Components
//import Logo from './home/logo.jsx'
import Clock from './clock.jsx'
import DynamicText from './dynamicText.jsx'
import Microphone from './microphone.jsx'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.socket = Io.connect('http://localhost:8000');
        this.state = {
            'text': 'zzzzzzzzzzzzzzzzzz...',
            'listening': false
        }
    }

    render() {
        return (
            <div className="Home">
                <div className="Clock-wrapper">
                    <Clock />
                </div>
                <div className="Content">
                    <div className="DynamicText-wrapper">
                        <DynamicText text={this.state.text}/>
                    </div>
                    <div className="Microphone-wrapper" onClick={this._test.bind(this)}>
                        <Microphone active={this.state.listening} />
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.socket.on('wakeUp', this._wakeUp.bind(this));
        this.socket.on('listenForOrder', this._listenForOrder.bind(this));
    }

    _test() {
        this.setState({
            listening: !this.state.listening
        })
    }

    _wakeUp(data) {
        console.log('wake up', data);
         this.setState({
             text: 'Yes ?'
         });
    }

    _listenForOrder(data) {
        console.log('listen for orders', data);
        this.setState({
            listening: true
        });
    }
};

// Props
Home.propTypes = {
};
Home.defaultProps = {
};

export default Home;