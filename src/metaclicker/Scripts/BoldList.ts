/// <reference path="Definitions/react-0.13.0.d.ts"/>
import React = require('react');
import TextBox = require('./TextBox');

class BoldList extends React.Component<{ next: () => string }, { strings: string[] }, any> {
	state = {
		strings: new Array<string>()
	}

	componentDidMount() {
		setTimeout(() => this.pushText(), 100);
	}

	render() {
		var textboxes = this.state.strings.map(s => React.createElement(TextBox, { text: s, bold: true }));
		return React.DOM.div(null, textboxes);
	}

	pushText() {
		this.setState({ strings: this.state.strings.concat(this.props.next()) });
		setTimeout(() => this.pushText(), 100);
	}
}

var contract = <React.ComponentClass<{ next: () => string }, { strings: string[] }, any>>BoldList;
export = contract;