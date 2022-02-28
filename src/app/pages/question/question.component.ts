import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/interfaces/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
quiz:Quiz[]=[]
options:any;
currentIndex:number=0;
clickedAnswer:boolean=false;
correctAnswer:number=0;
incorrectAnswer:number=0;
result:boolean=false;
randomize:number=0;
  constructor(private quizData:QuizService) {
    
   }

  ngOnInit(): void {
    this.quiz=this.quizData.quizzes
    this.random()
  }

  onAnswer(correct:boolean){
    this.clickedAnswer=true;
    setTimeout(() => {
      this.currentIndex++;
      this.random()
      this.clickedAnswer=false
    }, 2000);
    correct?this.correctAnswer++:this.incorrectAnswer++;
  }
  showResult(){
    this.result=true;
  }
  random(){
    this.randomize=Math.floor(Math.random()*this.quiz.length)
  }
}
