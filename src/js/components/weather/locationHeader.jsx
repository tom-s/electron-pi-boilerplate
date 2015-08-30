import React from 'react'
import _ from 'lodash'

class LocationHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    calculateFontScaleForAddress() {
        if(!this.props.address.length) {
            return;
        }
        var pos = 16 / this.props.address.length;
        var minp = 0.5;
        var maxp = 4;
        var minv = Math.log(1.3125);
        var maxv = Math.log(4.8125);
        var scale = (maxv - minv) / (maxp - minp);
        var size = Math.exp(minv + scale * (pos - minp))
        return {
            fontSize: size + 'rem'
        };
    }

    render() {
        return (
            <span style={ this.calculateFontScaleForAddress() } className="ww-ad" onClick={ this.props.onClick }>
                { this.props.address }
            </span>
        );
    }
};

// Props
LocationHeader.propTypes = {
    onClick: React.PropTypes.func,
    address: React.PropTypes.string
};
LocationHeader.defaultProps = {};

export default LocationHeader;