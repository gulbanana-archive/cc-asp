/// <reference path="../Definitions/react-0.13.0.d.ts"/>
import React = require('react');

interface Props {
	name: string;
	art: string[];
}

class Entity extends React.Component<Props, any, any> {
	render() {
		return React.DOM.div({ style: { display: 'flex', flexDirection: 'column', alignItems: 'center' } },
			React.DOM.pre(null,
				this.props.art.join('\n')
			),
			React.DOM.p({ style: { fontFamily: 'sans-serif' } },
				this.props.name
				)
			);
	}
}

var contract = <React.ComponentClass<Props, any, any>>Entity;
export = contract;
