import React,{useEffect, useState} from 'react';
import {Service}from "./Services/Service";
import { quiztype } from "./QuizType/quiz_type";
import  QuestionCard  from "./QuestionCard/Question_Card";
import {  Allnotification} from "./client/client";
import './App.css';



function App() {

  let [quiz, setQuiz] = useState<quiztype[]>([])
  let [currentStep, setCurrentStep] = useState(0)
  let [score, setScore] = useState(0);
let [showResult, setShowResult] = useState(false)

  useEffect(() => {

async function FatchData() {
  
 const question: quiztype[]= await Service(10, "easy");

 setQuiz(question)

 Allnotification()
}
FatchData();
   
  }, [])

  const handelStep = (e: React.FormEvent<EventTarget>, userAns: string) =>{

e.preventDefault();

 const CurrentQuestion: quiztype = quiz[currentStep];

 console.log(" correct answer :  "  + CurrentQuestion.correct_answer + "  --user selected Answer:  " + userAns)
 
 if(userAns === CurrentQuestion.correct_answer ){

  setScore(++score)
 }
if(currentStep !== quiz.length-1)

  setCurrentStep(++currentStep);

else{
  setShowResult(true)
}

  }
if(!quiz.length){
  return <h2>Loading...</h2>
}

if(showResult){

  return (<div className="question_container  reasult_container">

<h1>Result</h1>
<p>
  your final score 

  <b> {score} out of {quiz.length} </b>
</p>


  </div>)
}

  return (
    <div className="App">
      <h1>Quiz App</h1>
     

      <QuestionCard 
      option={quiz[currentStep].option}
      question={quiz[currentStep].question}
      callback={handelStep}

      
      />
    </div>
  );
}

export default App;
