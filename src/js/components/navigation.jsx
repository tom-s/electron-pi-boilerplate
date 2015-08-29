import React from 'react'
import _ from 'lodash'
import widgetMixin from './../widgetMixin.jsx'

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Navigation">
                <ul className="Items">
                    <li className="Item"> Home </li>
                    <li className="Item"> Météo </li>
                    <li className="Item"> Time </li>
                    <li className="Item"> Messages </li>
                    <li className="Item"> Reminders </li>
                </ul>
            </div>
        );
    }
};

// Props
Navigation.propTypes = {};
Navigation.defaultProps = {};

// Mixins
Navigation = widgetMixin(Navigation);

export default Navigation;