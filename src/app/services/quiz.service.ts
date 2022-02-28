import { Injectable } from '@angular/core';
import { Quiz } from '../interfaces/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizzes:Quiz[]=[
    {
      question:"¿Cuántos países reconocidos existen en todo el mundo?",
      answer:[
        {option:"95 países",correct:false},
        {option:"195 países",correct:true},
        {option:"39 países",correct:false},
        {option:"205 países",correct:false},
      ]
    },
    {
      question:"¿En qué año se lanzó el primer viaje a la Luna?",
      answer:[
        {option:"1968",correct:false},
        {option:"2001",correct:false},
        {option:"1860",correct:false},
        {option:"1969",correct:true},
      ]
    },
    {
      question:" ¿Cuántos elementos hay en la tabla periódica?",
      answer:[
        {option:" 118 elementos químicos",correct:true},
        {option:"27 elementos químicos",correct:false},
        {option:"120 elementos químicos",correct:false},
        {option:"108 elementos químicos",correct:false},
      ]
    },
    {
      question:"¿En qué año se estrenó la película Titanic?",
      answer:[
        {option:"1999",correct:false},
        {option:"1987",correct:false},
        {option:"1997.",correct:true},
        {option:"1995",correct:false},
      ]
    },
    {
      question:"¿Cuál es la capital de Bielorrusia?",
      answer:[
        {option:"Minsk",correct:true},
        {option:"Gómel",correct:false},
        {option:"Maguilov",correct:false},
        {option:"Vítebsk",correct:false},
      ]
    },{
      question:" ¿Cuál es el tipo más común de diabetes?",
      answer:[
        {option:"diabetes tipo I",correct:false},
        {option:"diabetes tipo II",correct:true},
        {option:"diabetes gestacional",correct:false}
      ]
    }
  ]

  constructor() { }

  getQuiz(){
    return this.quizzes
  }
}
