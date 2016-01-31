
import React from 'react'
import ClassNames from 'classnames'
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg'
import SnapAnimator from '../utils/snapAnimator.js'
import Socket from '../utils/socket.js'

// Streams
import SpeechToTextStream from '../streams/speechToTextStream.js'
import ConfirmationStream from '../streams/confirmationStream.js'

class Query extends React.Component {
    constructor(props) {
        super(props);
        this.timeout = null;
        this.state = {
            result: ''
        }
    }

    componentDidMount() {
        this.speechToTextStream = SpeechToTextStream;

        this.speechToTextStream.stream.subscribe((data) => {
            var result = (data.result.final) ? data.result.final : data.result.temp;
            this.setState({
                result: result
            });
            window.clearTimeout(this.timeout);
            this.timeout = window.setTimeout(() => {
                this.setState({
                    result: null
                });
            }, 5000);
        });

        ConfirmationStream.subscribe((confirm) => {
            if(confirm !== null) {
                window.clearTimeout(this.timeout);
                this.setState({
                    result: null
                });
            }
        });
    }

    componentWillUnmount() {
        this.speechToTextStream.stream.dispose();
        ConfirmationStream.dispose();
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