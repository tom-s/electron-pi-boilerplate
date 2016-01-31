// Tools
import React from 'react'
import ClassNames from 'classnames'
import _ from 'lodash'

// Streams
import ConfirmationStream from '../streams/confirmationStream.js'

class Confirmation extends React.Component {
    constructor(props) {
        super(props);
        this.timeout = null;
        this.state = {
            confirm: true
        };
    }

    componentDidMount() {
        ConfirmationStream.subscribe((confirm) => {
            this.setState({
                confirm: confirm
            });
            window.clearTimeout(this.timeout);
            this.timeout = window.setTimeout(() => {
                this.setState({
                    confirm: null
                });
            }, 10000);
        });
    }

    componentWillUnmount() {
        ConfirmationStream.dispose();
    }

    render() {
        if(this.state.confirm === null) return null;

        var confirmationClasses = ClassNames({
            'Confirmation': true,
            'Confirmation-success': this.state.confirm === true,
            'Confirmation-error': this.state.confirm === false
        });

        return (
            <div className={confirmationClasses}>
              <div className="Circle"></div>
              <div className="Circle"></div>    
            </div> 

        );
    }
};

export default Confirmation;