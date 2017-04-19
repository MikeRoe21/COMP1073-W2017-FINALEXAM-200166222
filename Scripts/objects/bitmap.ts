module objects {
    export class Bitmap extends createjs.Bitmap {
        
        /**
         * Creates an instance of Bitmap.
         * @param {string} _imageString 
         * @param {boolean} _isCentered 
         * @param {number} _width 
         * @param {number} _height 
         * @param {number} x 
         * @param {number} y 
         * 
         * @memberOf Bitmap
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
        }
    }
}
