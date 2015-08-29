import React from 'react'
import _ from 'lodash'

// Mixins
import widgetMixin from './../widgetMixin.jsx'

class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Weather">
                weather
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