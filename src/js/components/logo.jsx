import React from 'react'
import _ from 'lodash'

// Mixins
import widgetMixin from './../widgetMixin.jsx'

class Logo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Logo">
                logo
            </div>
        );
    }
};

// Props
Logo.propTypes = {
};
Logo.defaultProps = {
};

// Mixins
Logo = widgetMixin(Logo);

export default Logo;