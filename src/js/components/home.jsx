import React from 'react'

// Components
import Clock from './clock.jsx'
import DynamicText from './dynamicText.jsx'
import Microphone from './microphone.jsx'
import Socket from './socket.jsx'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'text': 'zzzzzzzzzzzzzzzzzz...',
            'listening': false
        }
    }

    render() {
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
                <div className="Socket-wrapper">
                    <Socket />
                </div>
            </div>
        );
    }

    componentDidMount() {

    }

    componentWillUnmount() {

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