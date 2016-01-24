 
import React from 'react'
import classnames from 'classnames'

// Streams
import MessageStream from '../streams/messageStream.js'

class TabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        MessageStream.subscribe((data) => {
            console.log("count", data);
            this.setState({
                count: data.count || 0
            });
        });

    }

    componentWillUnmount() {
        MessageStream.dispose();
    }

    render() {
        return (
            <header className="Bar bar bar-tab">
                <a className="tab-item active" href="#">
                    <span className="icon icon-compose"></span>
                    <span className="badge">{this.state.count}</span>
                </a>
            </header>
        );
    }

};


export default TabBar;