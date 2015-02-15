/// <reference path="Definitions/react-0.13.0.d.ts" />
import React = require('react');
import Game = require('./Game');

var g = new Game.Game(document.getElementById('content'));
g.start(5);

var b = document.getElementById('setfps');
var t = <HTMLInputElement>document.getElementById('fps');

b.onclick = () => {
	g.stop();
	g.start(+t.value);
}