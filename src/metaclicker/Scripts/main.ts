/// <reference path="Definitions/react-0.13.0.d.ts"/>
import React = require('react');

React.render(
	React.createElement('h1', {}, 'Hello, world!'),
	document.getElementById('content')
);
