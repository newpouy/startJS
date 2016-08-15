var worldCanvas = document.getElementById('world');
console.log(worldCanvas);
var context = worldCanvas.getContext('2d');

import Person from './Person'
var jobs = new Person(context, 0, 0, "Steve Jobs");
jobs.drawSelf();
jobs.sayName();
// jobs.drawBoundary();
var mcmj = new Person(context, 200, 200, "엠씨민지");
mcmj.drawSelf();
mcmj.sayName();
