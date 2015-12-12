import React from 'react'

class FitText extends React.Component {
    constructor(props) {
        super(props);
        this.timeout = null;
        this.state = {
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="FitText">
                {this.props.text}
            </div>
        );
    }
};

// Props
DynamicText.propTypes = {
    text: React.PropTypes.string,
    maxFontSize: React.PropTypes.number
};
DynamicText.defaultProps = {
    text: '',
    maxFontSize: 150
};

export default FixText;