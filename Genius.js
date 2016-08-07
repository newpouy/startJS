import Person from './Person'

export default class Genius extends Person {
  constructor(name){
    super(name);
    this.iq = 150+Math.floor(Math.random() * 50)
  }
  sayIamGenius(){
    console.log('난 '+this.name+'. 내 IQ는 '+this.iq+'야.');
  }
}
