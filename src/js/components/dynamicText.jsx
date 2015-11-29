import React from 'react'
import Socket from '../utils/socket.js'
import SpeakStream from '../streams/speakStream.js'

class DynamicText extends React.Component {
    constructor(props) {
        super(props);
        this.timeout = null;
        this.state = {
            'text': '',
            'currentlyDisplayed': '',
            'currentLetterIndex': 0
        };
    }

    componentDidMount() {
        this.speakStream = new SpeakStream();
        this.speakStream.onValue((text) => {
            console.log("value", text);
            window.clearTimeout(this.timeout);
            this.setState({
                text: text,
                currentlyDisplayed: '',
                currentLetterIndex: 0
            }, () => {
                this._tick(text);
            });
        });
    }

    componentWillUnmount() {
        this.speakStream();
    }

    render() {
        return (
            <div className="DynamicText">
                {this.state.currentlyDisplayed}
            </div>
        );
    }

    _tick(text) {
        var currentlyDisplayed = text.substr(0, this.state.currentLetterIndex);
        this.setState({
            currentlyDisplayed: currentlyDisplayed,
            currentLetterIndex: ++this.state.currentLetterIndex
        });

        if(this.state.currentLetterIndex <= text.length) {
            this.timeout = window.setTimeout(() => {
                this._tick(text);
            }, 50);
        }
    }
};

// Props
DynamicText.propTypes = {
    text: React.PropTypes.string
};
DynamicText.defaultProps = {
    text: ''
};

export default DynamicText;