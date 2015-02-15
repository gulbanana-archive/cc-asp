/// <reference path="Definitions/react-0.13.0.d.ts" />
import React = require('react');
import Scene = require('./Scene');

var noughts = ['X| | ',
	           ' |X| ',
	           ' | |O']

var dude = [' ( ) ',
	        ' _|_ ',
	        '/ | \\ ',
	        ' / \\ ',
	        '|   |']

React.render(
	React.createElement(Scene, {
		entities: [{ art: dude },
			       { art: noughts },
			       { art: dude }]
	}),
	document.getElementById('content')
);