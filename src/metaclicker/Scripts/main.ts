/// <reference path="Definitions/react-0.13.0.d.ts" />
import React = require('react');
import Scene = require('./Scene');

var fps = 5;

var noughts = ['X| | ',
	           ' |X| ',
	           ' | |O']

var dude = [' ( ) ',
	        ' _|_ ',
	        '/ | \\ ',
	        ' / \\ ',
	        '|   |']

function createPlayer() {
	return { name: 'Player', art: dude }
}

var state = {
	entities: [{ name: 'Game', art: noughts }]
}

function update() {
	if (state.entities.length < 3) {
		state.entities.push(createPlayer());
	} else {
		var x = state.entities.shift()
		state.entities.push(x);
	}
}

function draw() {
	React.render(
		React.createElement(Scene, state),
		document.getElementById('content')
	);
}

var loops = 0;
var skipTicks = 1000 / fps;
var maxFrameSkip = 10;
var nextGameTick = (new Date).getTime();

function run() {
	loops = 0;

	while ((new Date).getTime() > nextGameTick && loops < maxFrameSkip) {
		update();
		nextGameTick += skipTicks;
		loops++;
	}

	draw();
}

var intervalID = setInterval(run, 1000/fps);


