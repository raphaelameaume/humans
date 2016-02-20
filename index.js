import raf from 'raf';
import Dot from './Dot';

const wW = window.innerWidth;
const wH = window.innerHeight;

let renderer = PIXI.autoDetectRenderer(wW, wH, { antialias: true, resolution : window.devicePixelRatio });
document.getElementById('root').appendChild(renderer.view);

let stage = new PIXI.Container();

let nbInlines = 17;
let nbDots = nbInlines * 10;
let distanceBetween = wH * window.devicePixelRatio / 16 +1

let dots = [];
let posX = distanceBetween;
let posY = distanceBetween;

const init = () => {

	for (let i = 1; i < nbDots; i++) {
		let dot = new Dot();
		dot.position.x = posX;
		dot.position.y = posY;
		dots.push(dot);

		stage.addChild(dot);

		posX += distanceBetween;

		if ( ( i % nbInlines ) == 0 ) {
			posX = distanceBetween;
			posY += distanceBetween;
		}
	}

	console.log(dots);

	update();

};

const update = () => {

	renderer.render(stage);

	raf(update);
};

init();