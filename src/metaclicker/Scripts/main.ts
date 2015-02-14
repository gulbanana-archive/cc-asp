/// <reference path="Definitions/react-0.13.0.d.ts" />
import React = require('react');
import BoldList = require('./BoldList');

React.render(
	React.createElement(BoldList, { strings: ['a!', 'b!'] }),
	document.getElementById('content')
);