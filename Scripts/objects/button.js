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
    var Button = (function (_super) {
        __extends(Button, _super);
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
        function Button(_imageString, _isCentered, _width, _height, x, y) {
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
            _this.on("mouseover", _this._mouseOver);
            _this.on("mouseout", _this._mouseOut);
            return _this;
        }
        Button.prototype._mouseOver = function (event) {
            this.alpha = 0.7;
        };
        Button.prototype._mouseOut = function (event) {
            this.alpha = 1.0;
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map