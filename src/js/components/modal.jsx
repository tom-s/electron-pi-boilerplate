
import React from 'react'
import ClassNames from 'classnames'

// Streams
import ModalStream from '../streams/modalStream.js'

// Components
import ModalMessages from './modal/messages.jsx';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            type: null
        };
    }

    componentDidMount() {
        ModalStream.subscribe((data) => {
            this.setState({
                active: data.active,
                type: data.type
            });
        });

        /*
        window.setTimeout(() => {
            console.log("modalStream", ModalStream);
            ModalStream.onNext(true);
        },2000);*/
    }

    componentWillUnmount() {
        ModalStream.dispose();
    }

    render() {
        var modalClasses = ClassNames({
            Modal: true,
            modal: true,
            active: (this.state.active)
        });

        var content = null;
        switch(this.state.type) {
            case 'MESSAGES': 
                content = (
                    <ModalMessages />
                );
                break;
            default : content = (
                <div> Loading ...</div>
                );
        };
        return (
            <div className={modalClasses}>
                <header className="bar bar-nav">
                    <a className="icon icon-close pull-right clickable" onClick={this._closeModal.bind(this)}></a>
                    <h1 className="title">{this.state.type}</h1>
                </header>

                <div className="content">
                    {content}
                </div>
            </div>
        );
    }

    _closeModal() {
        this.setState({
            active: false
        });
    }

};

// Props
Modal.propTypes = {
    active: React.PropTypes.bool
};
Modal.defaultProps = {
    active: true
};



export default Modal;