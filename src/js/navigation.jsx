import React from 'react-dist'
import _ from 'lodash'

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

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

Navigation.propTypes = {};
Navigation.defaultProps = {};