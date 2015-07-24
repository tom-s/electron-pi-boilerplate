var React = require( 'react' );
var Main = require( './components/main.jsx' );
var remote = window.require( 'remote' );

window.React = React;

React.render( <Main />, document.body );