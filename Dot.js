/*
** D O T 
*/

class Dot extends PIXI.Graphics {

	constructor () {
		super();

		this.beginFill( 0xffffff );
	    this.drawCircle( 0, 0, 3 );
	    this.endFill();
	}

}

export default Dot;