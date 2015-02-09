/// <reference path="Definitions/react-0.13.0.d.ts" />
import React = require('react');
import TextBox = require('./TextBox');
import BoldList = require('./BoldList');

React.render(
	React.createElement(BoldList, {}, React.createElement(TextBox, { text: 'a!' }),
	                                 React.createElement(TextBox, { text: 'b!' })),
	document.getElementById('content')
);