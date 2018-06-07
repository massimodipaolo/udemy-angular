let a: number;
let b: boolean;
let c: string;

let d: any;
d = true; d = 'a'; d = 1;

let e: number[] = [1, 2, 3];
let f: any[] = [true, 1, 'a', { name: 'Massimo' }];

const colorRed = 0;
const colorGreen = 1;
const colorBlue = 2;

enum Color { Red, Green, Blue }; // enum color { red=0, green, blue };
let backgroundColor = Color.Blue;

/* Types assertions*/
let sMessage = 'abc'; //type inference: string
let sMessageEndsWithC = sMessage.endsWith('c'); //intellisense

let aMessage; //any
aMessage = 'abc';
//let aMessageEndsWithC = aMessage.endsWith('c'); //no intellisense, undefined
let aMessageEndsWithC2 = (<string>aMessage).endsWith('c');
let aMessageEndsWithC3 = (aMessage as string).endsWith('c');

/* Arrow functions = c# lambda function*/
let log = function (message) { console.log(message); }

let doLog = (message) => console.log(message); 
let doLog2 = () => console.log(); //parameterless

/* Interfaces */
let drawPointWithParms = (x, y, a, c, d, e) => {
  // too many params, use object: drawPoint = (point) => {}
}
let drawPointInlineAnnotation = (point: { x: number, y: number }) => { }

interface IPoint { //Pascal naming convention
  x: number, 
  y: number,  
  draw: () => void,
  getDistance: (point: IPoint) => number
}

class Point2D implements IPoint {
  x: number; //default access modifier: public
  y: number;

  //TS do not support multiple constructors: use optional parameters
  constructor(x?: number, y?: number) {
    this.x = x || 0;
    this.y = y || 0;
  }

  draw = () => console.log('x:' + this.x + ',y:' + this.y );
  getDistance(point: Point2D) {
    return (Math.sqrt(Math.pow(this.x - point.x,2) + Math.pow(this.y - point.y,2)));
  }
}

class Point3D extends Point2D implements IPoint {  

  private z: number;

  constructor(x?: number, y?: number, z?: number) {
    super(x, y);
    this.z = z || 0;
  }

  draw = () => console.log('x:' + this.x + ',y:' + this.y + ',z:' + this.z);
  getDistance(point: Point3D) {
    return (Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2) + + Math.pow(this.z - point.z, 2)));
  }
}

class PointCustom {
  //Access modifiers in constructor parameters
  constructor(private _x?: number, private _y?: number) { }

  //Property: i.e. for readonly access of a private field (without setter), or have some basic logic/validation
  //Looks like a field (from external), but is a method
  get x() { return this._x; }
  set x(value) { if (value>0) this._x = value; }

  draw = () => {
    let p = new Point2D(this._x,this._y);
    p.draw();
  };
}

//let point: Point; //undefined
let point2d = new Point2D(5,12);
point2d.x = 5;
point2d.draw();
let point3d = new Point3D(0, 5, 0);
point3d.draw();
console.log(point2d.getDistance(point3d));
let pointC = new PointCustom(10);
pointC.x = 0;
pointC.draw();

import { Point } from './point';
let point = new Point(1, 2);
point.draw();

class Alpha { /* ... */ }
class Bravo extends Alpha { /* ... */ }
