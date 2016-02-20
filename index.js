import raf from 'raf';
import Dot from './Dot';

const wW = window.innerWidth;
const wH = window.innerHeight;

let renderer = PIXI.autoDetectRenderer(wW, wH, { antialias: true, resolution : window.devicePixelRatio });
document.getElementById('root').appendChild(renderer.view);

let stage = new PIXI.Container();

let lines = 10;
let distanceBetween = wH  / (lines + 1) ;
let cols = Math.floor(wW / distanceBetween );
let nbDots = lines * cols;


let dots = [];
let posX = distanceBetween;
let posY = distanceBetween;

const init = () => {

	for (let i = 1; i < nbDots; i++) {
		let dot = new Dot(posX, posY, distanceBetween);
		dots.push(dot);

		stage.addChild(dot);

		posX += distanceBetween;

		if ( ( i % cols ) == 0 ) {
			posX = distanceBetween;
			posY += distanceBetween;
		}
	}

	update();

};

const update = () => {

	renderer.render(stage);

	raf(update);
};

init();