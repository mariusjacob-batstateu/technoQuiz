import { Component } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.page.html',
  styleUrls: ['./game-page.page.scss'],
})
export class GamePagePage{
  question: string = '';
  choices: string[] = [];
  topics: any[] = [];


  constructor(private quizService: QuizService) {}

  fetchQuestionAndChoices() {
    this.quizService.getQuizQuestions().subscribe(
      (quizzes: any) => {
        if (quizzes.length > 0) {
          const quiz = quizzes[0];
          this.question = quiz.question;
          this.choices = quiz.answers;
        }
      },
      (error) => {
        console.log(error); // Handle any errors
      }
    );
  }


  fetchTopics() {
    this.quizService.getTopics().subscribe(
      (topics: any) => { // Update type to 'any'
        this.topics = Array.isArray(topics) ? topics : []; // Initialize with an empty array if topics is not an array
        console.log("hello");
      },
      (error) => {
        console.log(error); // Handle any errors
      }
    );
  }


}
