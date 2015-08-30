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
            address: '',
            current: {
                summary: '',
                icon: 'clear-day',
                temperature: ''
            },
            hourly: [],
            showSearch: false,
            showHourly: false
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
        var self = this;
        var r = new XMLHttpRequest();
        r.open('GET', '/weather/?address=' + encodeURIComponent(address));
        r.responseType = 'json';
        r.onload = function() {
            if(this.status === 200) {
                self.setState({
                    address: this.response.formattedAddress,
                    current: this.response.data.currently,
                    hourly: this.response.data.hourly.data.slice(0, 24),
                    isLoading: false,
                    showSearch: false
                });
            }
        };
        r.send();
        this.setState({ isLoading: true });
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
                            address={ this.state.address } />
                        <CurrentStatus
                            temperature={ this.state.current.temperature }
                            icon={ this.state.current.icon }
                            summary={ this.state.current.summary } />
                    </div>
                </div>
            </div>

        );
    }
};

// Props
Weather.propTypes = {
    initialAddress: React.PropTypes.string
};
Weather.defaultProps = {
    initialAddress: "Lyon, France"
};

// Mixins
Weather = widgetMixin(Weather);

export default Weather;