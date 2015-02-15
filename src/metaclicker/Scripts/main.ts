/// <reference path="Definitions/react-0.13.0.d.ts" />
import React = require('react');
import Scene = require('./Scene');

var noughts = ['X| | ',
	           ' |X| ',
               ' | |O']

React.render(
	React.createElement(Scene, {
		entities: [{
			art: noughts
		}]
	}),
	document.getElementById('content')
);