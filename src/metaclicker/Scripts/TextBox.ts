/// <reference path="Definitions/react-0.13.0.d.ts"/>
import React = require('react');

class TextBox extends React.Component<{ text: string }, any, any> {
	render(): React.ReactElement<any> {
		return React.DOM.div({}, this.props.text);
	}
}
