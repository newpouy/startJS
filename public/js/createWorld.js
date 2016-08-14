var worldCanvas = document.getElementById('world');
console.log(worldCanvas);
var ctx = worldCanvas.getContext('2d');

var rectangle1 = new Path2D();
rectangle1.rect(50, 50, 50, 50); // x좌표, y좌표, 가로, 세로

var rectangle2 = new Path2D();
rectangle2.rect(50, 100, 20, 50); // x좌표, y좌표, 가로, 세로

var rectangle3 = new Path2D();
rectangle3.rect(80, 100, 20, 50); // x좌표, y좌표, 가로, 세로

var triangle1 = new Path2D();
triangle1.moveTo(50,50);
triangle1.lineTo(25,50);
triangle1.lineTo(50,75);
triangle1.closePath();

var triangle2 = new Path2D();
triangle1.moveTo(100,50);
triangle1.lineTo(125,50);
triangle1.lineTo(100,75);
triangle1.closePath();

var triangle3 = new Path2D();
triangle1.moveTo(50,50);
triangle1.lineTo(25,50);
triangle1.lineTo(50,75);
triangle1.closePath();

var circle = new Path2D();
circle.arc(75, 25, 25, 0, 2 * Math.PI);  //

ctx.stroke(rectangle1);
ctx.stroke(rectangle2);
ctx.stroke(rectangle3);
ctx.stroke(triangle1);
ctx.stroke(triangle2);
ctx.stroke(triangle3);
ctx.stroke(circle);
