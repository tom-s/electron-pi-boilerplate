import React from 'react'
import _ from 'lodash'

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStateIndex: 0
        };
    }
    render() {
        var currentStepContent = this.props.steps[this.state.currentStateIndex].content;
        var currentStep = (
            <div>
                {currentStepContent}
            </div>
        );

        return (
            <div className="card">
                <div className="title">
                    {this.props.title}
                    </div>
                <div className="steps" onClick={_.bind(this.clickStep, this, this.state.currentStateIndex)}>
                    {currentStep}
                </div>
            </div>
        );
    }

    clickStep(currentStep) {
        var nextStep = (currentStep === (this.props.steps.length - 1)) ? nextStep = 0 : currentStep + 1;
        this.setState({
            currentStateIndex: nextStep
        });
    }
};

Card.propTypes = {
    title: React.PropTypes.string,
    steps: React.PropTypes.array
};
Card.defaultProps = {
    title: '', step: 0
};