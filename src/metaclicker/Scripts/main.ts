/// <reference path="Definitions/react-0.13.0.d.ts" />
import React = require('react');
import BoldList = require('./BoldList');

var x = 0;

React.render(
	React.createElement(BoldList, { next: () => { x++; return ""+x; } }),
	document.getElementById('content')
);