/// <reference path="Definitions/react-0.13.0.d.ts"/>
import React = require('react');
import TextBox = require('./TextBox');

class BoldList extends React.Component<{ strings: string[] }, any, any> {
	render() {
		var textboxes = this.props.strings.map(s => React.createElement(TextBox, { text: s, bold: true }));
		return React.DOM.div(null, textboxes);
	}
}

var contract = <React.ComponentClass<{ strings: string[] }, any, any>>BoldList;
export = contract;