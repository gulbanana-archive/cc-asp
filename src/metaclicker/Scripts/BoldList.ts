/// <reference path="Definitions/react-0.13.0.d.ts"/>
import React = require('react');

class BoldList extends React.Component<{ children: any }, any, any> {
	render(): React.ReactElement<any> {
		var boldChildren: any = React.Children.map(this.props.children,(child: React.ReactChild) => { return React.DOM.b({}, child); });
		return React.DOM.div({}, boldChildren);
	}
}

export = BoldList;