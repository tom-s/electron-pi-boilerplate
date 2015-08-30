import React from 'react'
import _ from 'lodash'

class CurrentStatus extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var node = this.refs.icon.getDOMNode();
        this.skycons = new Skycons({ 'color': this.props.color });
        this.skycons.add(node, this.props.icon);
        this.skycons.play();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.icon !== this.props.icon) {
            var node = this.refs.icon.getDOMNode();
            this.skycons.set(node, nextProps.icon);
        }
    }
    componentWillUnmount() {
        this.skycons.remove(this.refs.icon.getDOMNode());
    }

    render() {
        return (
            <div className="ww-cur">
                <canvas className="ww-cicon" ref="icon" width="128" height="128"></canvas>
                <span className="ww-ctemp">{ this._getFormattedTemperature(this.props.temperature) }</span>
                <span className="ww-csum">{ this.props.summary }</span>
            </div>
        );
    }

    _getFormattedTemperature(temperature) {
        temperature = (temperature - 32) * 5 / 9;
        if(temperature) {
            return <span>{ Math.round(temperature) }<sup>º</sup>C</span>;
        }
        return null;
    }
};

// Props
CurrentStatus.propTypes = {
    color: React.PropTypes.string,
    temperature: React.PropTypes.number,
    icon: React.PropTypes.string,
    summary: React.PropTypes.string
};
CurrentStatus.defaultProps = {
    color: 'rgba(255, 255, 255, 1)'
};

export default CurrentStatus;