
import React from 'react'
import ClassNames from 'classnames'
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg'
import SnapAnimator from '../utils/snapAnimator.js'
import Socket from '../utils/socket.js'

// Streams
import SpeechToTextStream from '../streams/speechToTextStream.js'

class Query extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ''
        }
    }

    componentDidMount() {
        this.speechToTextStream = SpeechToTextStream;
        this.speechToTextStream.stream.onValue((data) => {
            var result = (data.result.final) ? data.result.final : data.result.temp;
            this.setState({
                result: result
            });
        });
    }

    componentWillUnmount() {
        this.speechToTextStream.stream();
    }



    render() {
        return (
            <div className="Query">
                {this.state.result}
            </div>
        );
    }

};


export default Query;