/// <reference path="Definitions/react-0.13.0.d.ts" />
import React = require('react');
import Game = require('./Game');

var g = new Game.Game(document.getElementById('content'));
g.start(5);