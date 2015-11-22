require('../stylesheets/styles.scss');

import React from 'react'
import ReactDOM from 'react-dom'
import Bacon from 'baconjs'

// Steams
import TimerStream from './streams/timer.js'

// Components
import Home from './components/home.jsx'


const appState = Bacon.combineTemplate({
    date: new TimerStream()
    //loading: streams.Loading
    // add other streams here
});

appState.onValue((state)=>{
    ReactDOM.render(<Home {...state}/>, document.getElementById('main'));
});


