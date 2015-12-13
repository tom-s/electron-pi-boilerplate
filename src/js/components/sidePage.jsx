import React from 'react'

// Components
import Timer from './sidePages/timer.jsx'

class SidePage extends React.Component {
    constructor(props) {
        super(props);
        this.timeout = null;
        this.state = {};
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        if (!this.props.type) {
            return null;
        } else {
            switch (this.props) {
                case 'timer':
                    return (
                        <Timer />
                    ); break;
                default: return null;
            }
        }
    }
};

// Props
SidePage.propTypes = {
    type: React.PropTypes.string
};
SidePage.defaultProps = {
    type: null
};

export default SidePage;