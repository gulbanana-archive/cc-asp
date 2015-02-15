/// <reference path="../Definitions/react-0.13.0.d.ts"/>
import React = require('react');
import Entity = require('./Entity');

interface Props {
	entities: {
		name: string;
		art: string[]
	}[]
}

interface State {
	width: number;
	height: number;
}

class Scene extends React.Component<Props, State, any> {
	state = {
		width: 0,
		height: 0
	}

	componentDidMount() {
		this.updateDimensions()
		window.addEventListener("resize", () => this.updateDimensions());
	}

	componentWillUnmount() {
        window.removeEventListener("resize",() => this.updateDimensions());
    }

	updateDimensions() {
		var e = React.findDOMNode(this);
        this.setState({ width: e.clientWidth, height: e.clientHeight });
    }

	render() {
		var n = this.props.entities.length;
		var widthPerEntity = this.state.width / n;
		var x = widthPerEntity / 2;
		var y = this.state.height / 2;

		var divs = [];
		this.props.entities.forEach((e) => {
			var s: React.CSSProperties = {
				position: 'absolute',
				left: x,
				top: y
			}

			divs.push(React.DOM.div({ style: s }, React.createElement(Entity, e)));

			x += widthPerEntity;
		});

		return React.DOM.div({ style: { height: '100vh' } },
			divs
		);
	}
}

var contract = <React.ComponentClass<Props, State, any>>Scene;
export = contract;
