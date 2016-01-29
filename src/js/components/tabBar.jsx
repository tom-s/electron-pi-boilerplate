 
import React from 'react'
import classnames from 'classnames'

// Streams
import MessageStream from '../streams/messageStream.js'
import ModalStream from '../streams/modalStream.js'

class TabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        MessageStream.subscribe((data) => {
            this.setState({
                count: data.count || 0
            });
        });
    }

    componentWillUnmount() {
        MessageStream.dispose();
    }

    render() {
        var messageClasses = classnames({
            'tab-item': true,
            'clickable': true,
            active: this.state.count > 0
        });
        return (
            <header className="Bar bar bar-tab">
                <a className={messageClasses} onClick={this._showMessages}>
                    <span className="icon icon-compose"></span>
                    <span className="badge">{this.state.count}</span>
                </a>
            </header>
        );
    }

    _showMessages() {
        ModalStream.onNext({
            active: true,
            type: 'MESSAGES'
        });
    }

};


export default TabBar;