import React from 'react'

class FitText extends React.Component {
    constructor(props) {
        super(props);
        this.timeout = null;
        this.state = {
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="FitText">
                {this.props.text}
            </div>
        );
    }

    _resize() {
        /*
        var defaults = {
            maxFontSize: 40,
            minFontPixels: 10,
            innerTag: 'span'
        };
        var Opts = jQuery.extend(defaults, options);
        return this.each(function() {
            var fontSize = Opts.maxFontPixels;
            var ourText = $(Opts.innerTag + ':visible:first', this);
            var maxHeight = $(this).height();
            var maxWidth = $(this).width();
            var textHeight;
            var textWidth;
            do {
                ourText.css('font-size', fontSize);
                textHeight = ourText.height();
                textWidth = ourText.width();
                fontSize = fontSize - 1;
            } while ((textHeight > maxHeight || textWidth > maxWidth) && fontSize > Opts.minFontPixels);
        });
        */
    }
};

// Props
DynamicText.propTypes = {
    text: React.PropTypes.string,
    maxFontSize: React.PropTypes.number
};
DynamicText.defaultProps = {
    text: '',
    maxFontSize: 150
};

export default FitText;