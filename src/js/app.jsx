require('../stylesheets/styles.scss');

import React from 'react'
import Home from './home.jsx'
import Streams from './streams.js'
import Bacon from 'baconjs'

const appState = Bacon.combineTemplate({
    date: Streams.Timer
    // add other streams here
});

appState.onValue(state => {
    React.render(<Home  {...state} />, document.getElementById('main'));
});


