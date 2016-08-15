export default class Person {
  constructor(context, positionX, positionY, name){
    this.context = context;
    this.durablilty = 100;
    this.name = name;
    this.immortal = false;
    this.x = positionX;
    this.y = positionY;
  }

  sayName(){
    if(!this.immortal){
      console.log('안녕 난 '+this.name+'라고 해 :)'+this.durablilty+'살까지 살수 있어');
    } else {
      console.log('난 불멸이지롱. 그럼 난 인간일까.')
    }
  }

  drawSelf() {
    const { x, y } = this;

    var body = new Path2D();
    body.rect(x+50, y+50, 50, 50); // 몸. x좌표, y좌표, 가로, 세로

    var rightLeg = new Path2D();
    rightLeg.rect(x+50, y+100, 20, 50); // 다리1. x좌표, y좌표, 가로, 세로

    var leftLeg = new Path2D();
    leftLeg.rect(x+80, y+100, 20, 50); // 다리2. x좌표, y좌표, 가로, 세로

    var rightArm = new Path2D(); // 팔1
    rightArm.moveTo(x, y+50);
    rightArm.lineTo(x+50, y+50);
    rightArm.lineTo(x+50, y+75);
    rightArm.closePath();

    var leftArm = new Path2D(); // 팔2
    leftArm.moveTo(x+150, y+50);
    leftArm.lineTo(x+100, y+50);
    leftArm.lineTo(x+100, y+75);
    leftArm.closePath();

    var face = new Path2D();
    face.arc(x+75, y+25, 25, 0.2 * Math.PI, 2 * Math.PI);

    this.context.stroke(body);
    this.context.stroke(rightLeg);
    this.context.stroke(leftLeg);
    this.context.stroke(rightArm);
    this.context.stroke(leftArm);
    this.context.stroke(face);
  }
  drawBoundary() {
    const { x, y } = this;
    var boundary = new Path2D();
    boundary.rect(x, y, 150, 150);
    this.context.stroke(boundary);
  }
}
