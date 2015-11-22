var snapAnimator = (function() {
    var CONF_DEFAULT = {
        duration: 1000,
        easing: mina.linear
    };
    var animationsPlaying = 0;
    var currentAnimations = {};

    var _animate = function (el, states, props, index) {
        if(!el) {
            return;
        }
        if(!props) {
            props = {};
        }
        _.defaults(props, CONF_DEFAULT);

        if(!index) {
            index = 0;
        }

        var id = JSON.stringify([el, states, props]);

        currentAnimations[id] = {
            el: el,
            states: states,
            props: props
        };
        animationsPlaying++;
        el.addClass('animating');
        el.animate(states[index], props.duration, props.easing, function() {
            // Deal with innerHtml that cannot be animated
            if(states[index].innerHtml) {
                el.node.innerHTML = states[index].innerHtml;
            }
            if (index != (states.length - 1)) {
                _animate(el, states, props, ++index in states ? index : 0);
            }else{
                el.removeClass('animating');
                delete currentAnimations[id];
                animationsPlaying--;
                if(props.cb) {
                    // delete current animation
                    props.cb();
                }
            }

        });
    };
    return {
        'rotate': function(el, props) {
            var angle = props.angle;
            var originX = props.originX;
            var originY = props.originY;

            var states = [{
                transform: 'r' + angle + ' '+ originX + ' ' + originY
            }];
            _animate(el, states, props);
        },
        fadeIn: function(el, props) {
            var opacity = (props.opacity) ? props.opacity : 1;
            if(el.attr('fillOpacity') !== 1) {
                var states = [{
                    fillOpacity: opacity,
                    //opacity: opacity
                }];
            } else {

            }

            _animate(el, states, props);
        },
        fadeOut: function(el, props) {
            var opacity = (props.opacity) ? props.opacity : 0;
            if(el.attr('fillOpacity') !== 0) {
                var states = [{
                    fillOpacity: opacity,
                    //opacity: opacity
                }];
            } else {
                var states = [{
                    //fillOpacity: opacity,
                    opacity: opacity
                }];
            }
            _animate(el, states, props);
        },
        fadeOutstroke: function(el, props) {
            var opacity = (props.opacity) ? props.opacity : 0;
            var states = [{
                strokeOpacity: opacity
            }];
            _animate(el, states, props);
        },
        fill: function(el, props) {
            var states = [{
                fill: props.fillColor
            }];
            _animate(el, states, props);
        },
        resize: function(el, props) {
            if(props.radius) {
                var states = [{
                    r: props.radius
                }];
            } else {
                var states = [{
                    width: props.width
                }];
            }
            _animate(el, states, props);
        },
        'moveTo': function(el, props) {
            var transform = new Snap.Matrix();
            var x = _map.position.x - props.targetX;
            var y = _map.position.y - props.targetY;

            transform.scale(_map.scale.x, _map.scale.y, _map.scale.originX, _map.scale.originY);
            transform.translate(x, y);

            var states = [{
                transform: transform.toTransformString()
            }];
            _animate(el, states, props);
        },
        'pulse': function(el, props)  {
            // Generate pulsating states
            var strokeWidth = parseInt(el.attr('strokeWidth'), 10);
            var radius = parseInt(el.attr('r'), 10);
            var ratio = 2;

            if(!props.pulsations) {
                props.pulsations = 3; //default
            }

            if(props.duration) {
                props.duration = props.duration / props.pulsations / 2;
            }

            var states =  _.map(_.range(props.pulsations * 2), function(val) {
                if (val % 2 === 0) {
                    return {
                        strokeWidth: strokeWidth * ratio,
                        r: radius + strokeWidth
                    }
                } else {
                    return  {
                        strokeWidth: strokeWidth,
                        r: radius
                    }
                }
            });

            _animate(el, states, props);
        },
    }
})();

module.exports = snapAnimator;