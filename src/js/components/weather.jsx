import React from 'react'
import _ from 'lodash'
import classnames from 'classnames'

// Components
import LocationHeader from './weather/locationHeader.jsx'
import CurrentStatus from './weather/currentStatus.jsx'

// Mixins
import widgetMixin from './../widgetMixin.jsx'

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        };
    }

    getState() {
        return this.state;
    }

    componentDidMount() {
        this.handleLocationChange(this.props.initialAddress);
    }

    handleLocationChange(address) {
        this.setState( this.getState() );
        this.load(address);
    }

    handleAddressClick(e) {
        e.stopPropagation();
        this.setState({ showSearch: !this.state.showSearch });
    }

    handleSearchBlur() {
        this.setState({ showSearch: false });
    }

    handleToggleHourly() {
        this.setState({ showHourly: !this.state.showHourly });
    }

    load(address) {

    }

    render() {
        var classes = classnames({
            'ww': true,
            'loading': this.state.isLoading,
            'expand': this.state.showHourly
        });
        return (
            <div className="Weather">
                <div className={ classes }
                     onClick={ this.handleToggleHourly }>
                    <div className="ww-bc">
                        <LocationHeader
                            onClick={ this.handleAddressClick }
                            address={ "Lyon, France" } />
                        <CurrentStatus
                            temperature={ this.props.current.temperature }
                            icon={ this.props.current.icon }
                            summary={ this.props.current.summary } />
                    </div>
                </div>
            </div>

        );
    }
};

// Props
Weather.propTypes = {
};
Weather.defaultProps = {
};

// Mixins
Weather = widgetMixin(Weather);

export default Weather;