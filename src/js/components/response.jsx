
import React from 'react'
import ClassNames from 'classnames'
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg'
import SnapAnimator from '../utils/snapAnimator.js'
import Socket from '../utils/socket.js'
import Speech from '../utils/speech.js'

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
        ResponseStream.subscribe((response) => {
            if(response) {
                this.setState({
                   response: response
                }, this._resize);
                Speech.speak(response); // talk
            }
        });
    }

    componentWillUnmount() {
        ResponseStream.dispose();
    }

    render() {
        return (
            <div id="response" className="Response">
                {this.state.response}
            </div>
        );
    }

    _resize() {
        var response = document.getElementById('response');
        var parent = document.getElementById(this.props.wrapperId);
        var maxHeight = parent.offsetHeight;
        var maxWidth = parent.offsetWidth;
        var fontSize = this.props.maxFontSize;
        var textHeight;
        var textWidth;
        console.log("resize for response", response);

        do {
          
            response.style.fontSize = fontSize + 'px';
            response.style.lineHeight = (fontSize * 1.5) + 'px';
            textHeight = response.offsetHeight;
            textWidth = response.offsetWidth;
            fontSize = fontSize - 1;
            console.log(textWidth, " > ", maxWidth, "?");
        } while ((textHeight > maxHeight || textWidth > maxWidth) && fontSize > this.props.minFontSize);
    }

};

// Props
Response.propTypes = {
    wrapperId: React.PropTypes.string,
    minFontSize: React.PropTypes.number,
    maxFontSize: React.PropTypes.number
};
Response.defaultProps = {
    wrapperId: '',
    minFontSize: 10,
    maxFontSize: 50
};

export default Response;