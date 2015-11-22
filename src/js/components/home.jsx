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

    shouldComponentUpdate(nextProps, nextState) {
        // We have constant streams from the timer clock, there is no need to render all the time
        return this.props.date.getMinutes() !== nextProps.date.getMinutes() || nextState.text !== this.state.text || nextState.listening !== this.state.listening;
    }

    render() {
        console.log("home date is", this.props.date);
        return (
            <div className="Home">
                <div className="Clock-wrapper">
                    <Clock date={this.props.date}/>
                </div>
                <div className="Content">
                    <div className="DynamicText-wrapper" onClick={this._test.bind(this)}>
                        <DynamicText text={this.state.text}/>
                    </div>
                    <div className="Microphone-wrapper">
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
        console.log("click");
        this.setState({
            text: 'Yes, Hester ?',
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
    date: React.PropTypes.instanceOf(Date)
};
Home.defaultProps = {
    date: new Date()
};

export default Home;