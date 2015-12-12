
import React from 'react'
import ClassNames from 'classnames'
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg'
import SnapAnimator from '../utils/snapAnimator.js'
import Socket from '../utils/socket.js'

// Streams
import ResponseStream from '../streams/responseStream.js'

class Response extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: ''
        }
    }

    componentDidMount() {
        this.responseStream = new ResponseStream();
        this.responseStream.subscribe((data) => {
            console.log("data.result", data.result);
            if(data.result.speech) {
                this.setState({
                   response: data.result.speech
                });
            }
        });
    }

    componentWillUnmount() {
        this.responseStream.dispose();
    }

    render() {
        return (
            <div className="Response">
                {this.state.response}
            </div>
        );
    }

};


export default Response;