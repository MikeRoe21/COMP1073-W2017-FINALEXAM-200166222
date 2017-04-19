var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Bitmap = (function (_super) {
        __extends(Bitmap, _super);
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
        function Bitmap(_imageString, _isCentered, _width, _height, x, y) {
            var _this = _super.call(this, _imageString) || this;
            _this._imageString = _imageString;
            _this._isCentered = _isCentered;
            _this._width = _width;
            _this._height = _height;
            if (_isCentered) {
                _this.regX = _this._width * 0.5;
                _this.regY = _this._height * 0.5;
            }
            _this.x = x;
            _this.y = y;
            return _this;
        }
        return Bitmap;
    }(createjs.Bitmap));
    objects.Bitmap = Bitmap;
})(objects || (objects = {}));
//# sourceMappingURL=bitmap.js.map