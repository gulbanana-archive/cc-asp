/// <reference path="Definitions/react-0.13.0.d.ts"/>
import React = require('react');

interface Props {
	art: string[]
}

class Entity extends React.Component<Props, any, any> {
	render() {
		return React.DOM.div(null,
			React.DOM.pre(null,
				this.props.art.join('\n')
			)
		);
	}
}

var contract = <React.ComponentClass<Props, any, any>>Entity;
export = contract;
