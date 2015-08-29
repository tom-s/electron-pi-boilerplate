require('../stylesheets/styles.scss');

import React from 'react'
import Home from './home.jsx'
import Streams from './streams.js'
import Bacon from 'baconjs'

var streams = new Streams();

const appState = Bacon.combineTemplate({
    date: streams.Timer.toProperty(),
    currentHomeWidget: streams.CurrentHomeWidget.toProperty()
    // add other streams here
});

appState.onValue(state => {
    React.render(<Home  {...state} />, document.getElementById('main'));
});


