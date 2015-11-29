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
        this.state = {
            'text': 'zzzzzzzzzzzzzzzzzz...'
        }
    }

    render() {
        return (
            <div className="Home">
                <div className="Clock-wrapper">
                    <Clock date={this.props.date}/>
                </div>
                <div className="Content">
                    <div className="DynamicText-wrapper">
                        <DynamicText text={this.state.text}/>
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

    componentDidMount() {

    }

    componentWillUnmount() {

    }


    _wakeUp(data) {
        console.log('wake up', data);
         this.setState({
             text: 'Yes ?'
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