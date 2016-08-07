export default class Person {
  constructor(name){
    this.durablilty = 100;
    this.name = name;
    this.immortal = false;
  }
  sayName(){
    if(!this.immortal){
      console.log('안녕 난 '+this.name+'라고 해 :)'+this.durablilty+'살까지 살수 있어');
    } else {
      console.log('난 불멸이지롱. 그럼 난 인간일까.')
    }
  }
}
