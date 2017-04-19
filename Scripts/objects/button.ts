module objects {
    export class Button extends createjs.Bitmap {
        
        /**
         * Creates an instance of Button.
         * @param {string} _imageString 
         * @param {boolean} _isCentered 
         * @param {number} _width 
         * @param {number} _height 
         * @param {number} x 
         * @param {number} y 
         * 
         * @memberOf Button
         */
        constructor(
        private _imageString:string, 
        private _isCentered: boolean, 
        private _width:number,
        private _height:number,
        x:number, 
        y:number){
            super(_imageString)


            if(_isCentered) {
                this.regX = this._width * 0.5;
                this.regY = this._height *0.5;
            }

            this.x = x;
            this.y = y;

            this.on("mouseover", this._mouseOver);
            this.on("mouseout", this._mouseOut);
        }

        private _mouseOver(event:createjs.MouseEvent) {
            this.alpha = 0.7;
        }

        private _mouseOut(event:createjs.MouseEvent) {
            this.alpha = 1.0;
        }
    }
}
