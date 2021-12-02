var readlineSync=require('readline-sync');
var score=0;
function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer===answer){
    console.log("Right");
    score=score+1;
  }else console.log("wrong!!The correct answer would be "+answer);
  console.log("Current Score:"+score);
  console.log("-------------------------------");
}


var questionAnswerBunch=[
  {
    question:"Where do I live? ",
    answer:"Delhi"
  },
  {
    question:"My favourite car brand? ",
    answer:"VAG"
  },
  {
    question:"Who is my favourite actor? ",
    answer:"Tom Cruise"
  },
  {
    question:" What is my favourite hobby? ",
    answer:"Coding"
  },
   {
    question:"What is my favourite character in MarVel? ",
    answer:"Iron Man"
  }
]

for(var i=0;i<questionAnswerBunch.length;i++){
  play(questionAnswerBunch[i].question,questionAnswerBunch[i].answer);
}