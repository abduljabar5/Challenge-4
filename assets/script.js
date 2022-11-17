
var question = document.querySelector(".questions");
var start = document.querySelector(".start")
var answers = document.querySelector(".answer");
var submitt = document.querySelector(".submit");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2")
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var button = document.getElementById("show")
var answerType = document.querySelector("#answertype");
var hide = document.querySelector("#show");
var timep = document.querySelector(".time")
var timmer = document.querySelector(".timeint");
var score = document.querySelector(".score")
var score2 = document.querySelector(".trackedscore")
var points = document.querySelector('.gamesscore')
var time = 0
var questionint = 0
var gameScore = 0
var gamesWon = 0
var gamesLost = 0


var questionHolder =[
    {
 questionn: "what is a number?",
 answerss:["1: number","2: words","3: house","4: math"],
 correctAnswer: "1: number"
},
{questionn: "what is a string?",
 answerss:["number","words","house","math"],
 correctAnswer: "words"},
 {
    questionn: "what is a boolean?",
    answerss:["number","words","true false","math"],
    correctAnswer: "true false"
   },
   {questionn: "what is a css?",
    answerss:["number","words","styling","math"],
    correctAnswer: "styling"}
]
timep.style.display = "none"
points.style.display = "none";
hide.style.display = "none";
score2.style.display = "none";

function newGame(){
     hide.style.display = "flex";
     score2.style.display = "none";
    start.style.display = "none";

        startTime();
        showQuestions();
        correction();
}

start.addEventListener("click", function(){
   
   newGame();

   

})
    

function startTime(){
    timep.style.display = "block"

    time = 20;
    var timerInterval = setInterval(function() {
      time--;
      timmer.textContent= time ;
  
      if(time <= 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        endGame();
      }
  
    }, 1000);
}


function showQuestions(){
  
   console.log(questionHolder[0].questionn);
   
if (questionint < questionHolder.length ){
    question.innerHTML = questionHolder[questionint].questionn;
        console.log(question);
    answer1.textContent = questionHolder[questionint].answerss[0];
    console.log(answer1);
    answer2.textContent = questionHolder[questionint].answerss[1];
    answer3.textContent = questionHolder[questionint].answerss[2];
    answer4.textContent = questionHolder[questionint].answerss[3];


    
} else{
    endGame();
}
}
function correction (){


button.addEventListener("click",function(event){
    var userChoice = event.target.textContent;
console.log(userChoice);
     if (questionint === questionHolder.length) {
         endGame();
      clearInterval(timeInterval);
     } 
      else if (userChoice === questionHolder[questionint].correctAnswer) {
        answerType.textContent = "Correct!!!!";
        questionint ++;
        time += 5;
        gameScore ++;
       
      } else {
        questionint ++;
        time -= 10;
        answerType.textContent = "Wrong!!!:(";
      }
    
      
      showQuestions();
    })
}
 function gamesW (){
    
    if (gameScore = 4){
        gamesWon ++;
        points.textContent = gamesWon + "";
        console.log(gamesWon);
    }
 }

function endGame(){
console.log("no");
    question.innerHTML = "game over!!! press start to play again!!"
    hide.style.display = "none";
    score2.style.display = "block";
    start.style.display = "block";
    points.style.display = "block"
    score.textContent = gameScore;
   
    time =1;
    //gamesW();
    start.addEventListener("click", function(){
      
      location.reload();
     })
         
}
