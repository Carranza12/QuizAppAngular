import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/interfaces/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  //Array of Quiz
quiz:Quiz[]=[]
//save the diferents options of my quiz answers
options:any;
//count the position of my quiz array
currentIndex:number=0;
//state when some answer was click
clickedAnswer:boolean=false;
//count the correct answer
correctAnswer:number=0;
//counter the incorrect answer
incorrectAnswer:number=0;
//state when it's true show the result of this quiz
result:boolean=false;

  constructor(private quizData:QuizService) {
    
   }

  ngOnInit(): void {
    //pass the  value of my array service to the quiz array
    this.quiz=this.quizData.quizzes


  }

  onAnswer(correct:boolean){
    this.clickedAnswer=true; //change the state of this boolean
    setTimeout(() => {
      this.currentIndex++; //increment the position
      this.clickedAnswer=false //change the state of this boolean
    }, 2000);
    correct?this.correctAnswer++:this.incorrectAnswer++; 
    //incremet or decrement depending on the state
  }
  showResult(){
    //show the resull of your quiz answer
    this.result=true;
  }
  
}
