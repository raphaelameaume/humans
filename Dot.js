/*
** D O T 
*/

class Dot extends PIXI.Graphics {

	constructor ( x, y, distance ) {
		super();

		this.initX = x;
		this.initY = y;

		this.factor = Math.random() > 0.5 ? -1 : 1;
		console.log(this.factor);
		if ( this.factor > 0 ) {
			this.maxShiftX = x / distance;
			this.maxShiftY = y / distance;
			this.shiftX = this.initX - 1 * getRandomInt(0, this.maxShiftX) * distance;
			this.shiftY = this.initY - 1 * getRandomInt(0, this.maxShiftY) * distance;
		}

		this.shiftX = this.initX + (Math.round(Math.random())) * distance;
		this.shiftY = this.initY + (Math.round(Math.random())) * distance;

		this.delay = Math.random() * 3 ; 

		this.position.x = this.shiftX;
		this.position.y = this.shiftY;

		this.beginFill( 0xffffff );
	    this.drawCircle( 0, 0, 3 );
	    this.endFill();

	    let tl = new TimelineMax({ delay : this.delay });
	    tl.to(this.position, 1, { x : this.initX, ease: Expo.easeOut })
	    tl.to(this.position, 1, { y : this.initY, ease: Expo.easeOut });

	    function getRandomInt(min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}

}

export default Dot;