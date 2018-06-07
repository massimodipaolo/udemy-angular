"use strict";
exports.__esModule = true;
//This file is a module
var Point = /** @class */ (function () {
    function Point(x, y) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.draw = function () { return console.log('x:' + _this.x + ',y:' + _this.y); };
    }
    return Point;
}());
exports.Point = Point;
