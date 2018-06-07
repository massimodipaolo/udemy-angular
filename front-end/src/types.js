"use strict";
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
exports.__esModule = true;
var a;
var b;
var c;
var d;
d = true;
d = 'a';
d = 1;
var e = [1, 2, 3];
var f = [true, 1, 'a', { name: 'Massimo' }];
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; // enum color { red=0, green, blue };
var backgroundColor = Color.Blue;
/* Types assertions*/
var sMessage = 'abc'; //type inference: string
var sMessageEndsWithC = sMessage.endsWith('c'); //intellisense
var aMessage; //any
aMessage = 'abc';
//let aMessageEndsWithC = aMessage.endsWith('c'); //no intellisense, undefined
var aMessageEndsWithC2 = aMessage.endsWith('c');
var aMessageEndsWithC3 = aMessage.endsWith('c');
/* Arrow functions = c# lambda function*/
var log = function (message) { console.log(message); };
var doLog = function (message) { return console.log(message); };
var doLog2 = function () { return console.log(); }; //parameterless
/* Interfaces */
var drawPointWithParms = function (x, y, a, c, d, e) {
    // too many params, use object: drawPoint = (point) => {}
};
var drawPointInlineAnnotation = function (point) { };
var Point2D = /** @class */ (function () {
    //TS do not support multiple constructors: use optional parameters
    function Point2D(x, y) {
        var _this = this;
        this.draw = function () { return console.log('x:' + _this.x + ',y:' + _this.y); };
        this.x = x || 0;
        this.y = y || 0;
    }
    Point2D.prototype.getDistance = function (point) {
        return (Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2)));
    };
    return Point2D;
}());
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.draw = function () { return console.log('x:' + _this.x + ',y:' + _this.y + ',z:' + _this.z); };
        _this.z = z || 0;
        return _this;
    }
    Point3D.prototype.getDistance = function (point) {
        return (Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2) + +Math.pow(this.z - point.z, 2)));
    };
    return Point3D;
}(Point2D));
var PointCustom = /** @class */ (function () {
    //Access modifiers in constructor parameters
    function PointCustom(_x, _y) {
        var _this = this;
        this._x = _x;
        this._y = _y;
        this.draw = function () {
            var p = new Point2D(_this._x, _this._y);
            p.draw();
        };
    }
    Object.defineProperty(PointCustom.prototype, "x", {
        //Property: i.e. for readonly access of a private field (without setter), or have some basic logic/validation
        //Looks like a field (from external), but is a method
        get: function () { return this._x; },
        set: function (value) { if (value > 0)
            this._x = value; },
        enumerable: true,
        configurable: true
    });
    return PointCustom;
}());
//let point: Point; //undefined
var point2d = new Point2D(5, 12);
point2d.x = 5;
point2d.draw();
var point3d = new Point3D(0, 5, 0);
point3d.draw();
console.log(point2d.getDistance(point3d));
var pointC = new PointCustom(10);
pointC.x = 0;
pointC.draw();
var point_1 = require("./point");
var point = new point_1.Point(1, 2);
point.draw();
var Alpha = /** @class */ (function () {
    function Alpha() {
    }
    return Alpha;
}());
var Bravo = /** @class */ (function (_super) {
    __extends(Bravo, _super);
    function Bravo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bravo;
}(Alpha));
