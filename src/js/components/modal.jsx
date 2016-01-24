
import React from 'react'
import ClassNames from 'classnames'

// Streams
import ModalStream from '../streams/modalStream.js'

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
            title: 'Title here'
        };
    }

    componentDidMount() {
        ModalStream.subscribe((active) => {
            this.setState({
                active: active
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
        return (
            <div className={modalClasses}>
                <header className="bar bar-nav">
                    <a className="icon icon-close pull-right clickable" onClick={this._closeModal.bind(this)}></a>
                    <h1 className="title">{this.state.title}</h1>
                </header>

                <div className="content">
                    <p className="content-padded">The contents of my modal go here. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
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