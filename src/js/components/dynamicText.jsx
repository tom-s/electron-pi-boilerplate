import React from 'react'

class DynamicText extends React.Component {
    constructor(props) {
        super(props);
        this.timeout = null;
        this.state = {
            'currentlyDisplayed': '',
            'currentLetterIndex': 0
        };
    }

    componentDidMount() {
        this._tick(this.props);
    }

    componentWillReceiveProps(newProps) {
        if(this.props.text !== newProps.text) {
            window.clearTimeout(this.timeout);
            this.setState({
                'currentlyDisplayed': '',
                'currentLetterIndex': 0
            }, function() {
                this._tick(newProps);
            });
        }
     }

    render() {
        return (
            <div className="DynamicText">
                {this.state.currentlyDisplayed}
            </div>
        );
    }

    _tick(props) {
        var currentlyDisplayed = props.text.substr(0, this.state.currentLetterIndex);
        this.setState({
            currentlyDisplayed: currentlyDisplayed,
            currentLetterIndex: ++this.state.currentLetterIndex
        });

        if(this.state.currentLetterIndex <= props.text.length) {
            this.timeout = window.setTimeout(function() {
                this._tick(props);
            }.bind(this), 50);
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