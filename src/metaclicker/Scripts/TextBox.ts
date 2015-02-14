/// <reference path="Definitions/react-0.13.0.d.ts"/>
import React = require('react');

class TextBox extends React.Component<{ text: string; bold: boolean }, any, any> {
	render() {
		if (this.props.bold) {
			return React.DOM.div(null, React.DOM.b(null, this.props.text));
		} else {
			return React.DOM.div(null, this.props.text);
		}
	}
}

export = TextBox;