//This file is a module
export class Point {  
  constructor(private x?: number, private y?: number) { }
  draw = () => console.log('x:' + this.x + ',y:' + this.y);  
}
