/// <reference path="Definitions/react-0.13.0.d.ts"/>
import React = require('react');

class TextBox extends React.Component<{ text: string }, any, any> {
	render(): React.ReactElement<any> {
		return React.DOM.div({}, this.props.text);
	}
}

class BoldList extends React.Component<{ children: any }, any, any> {
	render(): React.ReactElement<any> {
		var boldChildren: any = React.Children.map(this.props.children,(child: React.ReactChild) => { return React.DOM.b({}, child); });
		return React.DOM.div({}, boldChildren);
	}
}

React.render(
	React.createElement(BoldList, {}, React.createElement(TextBox, { text: 'a!' }),
	                                 React.createElement(TextBox, { text: 'b!' })),
	document.getElementById('content')
);