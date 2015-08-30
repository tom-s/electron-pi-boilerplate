require('../stylesheets/styles.scss');

import React from 'react'
import Home from './components/home.jsx'
import Streams from './streams.js'
import Bacon from 'baconjs'

var streams = new Streams();

const appState = Bacon.combineTemplate({
    date: streams.Timer,
    currentHomeWidgetId: streams.CurrentHomeWidgetId,
    currentWeather: streams.Weather
    //loading: streams.Loading
    // add other streams here
});

// Start loading
//streams.Loader.push(true);

appState.onValue(state => {
    React.render(<Home  {...state} />, document.getElementById('main'));
});


