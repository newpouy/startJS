let letThereBeLight = true; // true
if(letThereBeLight){
  console.log('안녕세상');
} else {
  console.log('암흑암흑');
}

for(let gallaxy=0; gallaxy<3; gallaxy++){
  console.log('은하계가 '+gallaxy+'개 생겼어요!');
}

let notEarth = true;
while(notEarth){
  let godsWill = Math.floor(Math.random() * 10);  // 난수를 만드는 코드 입니다.
  console.log('Hey, is there the earth????? ....\n Re: '+godsWill);
  if(godsWill==7){
    console.log("Lucky!!!!!!! Here is the earth!!!!!!!");
    notEarth = false;
  }
}
