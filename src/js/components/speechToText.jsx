// Tools
import React from 'react'
import _ from 'lodash'

class SpeechToText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            speech: ''
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        if(this.state.speech) return null;

        return (
            <div className="SpeechToText">
                {this.state.speech}
            </div>
        );
    }
};

export default SpeechToText;