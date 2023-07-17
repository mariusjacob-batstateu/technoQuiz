import { Component, OnInit } from '@angular/core';
import { QuizApiService } from '../service/quiz-api.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sample-api',
  templateUrl: './sample-api.page.html',
  styleUrls: ['./sample-api.page.scss'],
})
export class SampleApiPage {
  quesAnsArray: any[] = []; // Replace with the actual type of your dictionary elements
  answer: string = "";
  currentIndex = 0;
  status: number=0;
  
  constructor(private quizApiService: QuizApiService, private router: Router, private alertController: AlertController) {}

  // loadQuizzes() {
  //   this.quizApiService.getQuizzes()
  //     .then(quizzes => {
  //       quizzes
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // }

  async loadQuizzes() {
    try {
      const quizzes = await this.quizApiService.getQuizzes();
      this.quesAnsArray = quizzes;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  
  loadTopics() {
    this.quizApiService.getTopics()
      .then(topics => {
        console.log('Topics:', topics);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  // ngOnInit() {
  //   // this.quesAnsArray = [
  //   //   { question: 'What is the ds of hatdog?', answer:"Halaman", status:0,
  //   //   choices:[
  //   //     { choice: "Halaman", selected: false },
  //   //     { choice: "Hatdog", selected: false },
  //   //     { choice: "Halimbawa", selected: false }
  //   //   ]},    
  
  //   //   { question: 'Every stimulation?', answer:"Halimbawa1", status:0,
  //   //   choices:[
  //   //     { choice: "Halimbawa1", selected: false },
  //   //     { choice: "Halimbawa2", selected: false },
  //   //     { choice: "Halimbawa3", selected: false }
  //   //   ]}, 
      
  //   //   { question: 'This is lit <3', answer:"choice", status:0,
  //   //   choices:[
  //   //     { choice: "choice", selected: false },
  //   //     { choice: "choice2", selected: false },
  //   //     { choice: "choice3", selected: false }
  //   //   ]}, 
  //   // ];
  //   this.loadQuizzes() 
  //   console.log(this.quesAnsArray)
  // }
  
  async ngOnInit() {
    try {
      await this.loadQuizzes();
      this.addDefaultProperty()
      // console.log(this.quesAnsArray[0]);
      // console.log(this.quesAnsArray[0].choices[0]);
      // console.log(this.quesAnsArray[0].choices[1]);
      // console.log(this.quesAnsArray[0].choices[2]);
    } catch (error) {
      console.error('Error retrieving the API:', error);
    }
  }
  
  addDefaultProperty() {
    for (let i = 0; i < this.quesAnsArray.length; i++) {
      this.quesAnsArray[i].status = this.status;
      this.quesAnsArray[i].choices = [];
      const answers = Object.values(this.quesAnsArray[i].answers);
  
      for (let j = 0; j < answers.length; j++) {
        this.quesAnsArray[i].choices.push({choice: answers[j],selected: false});
      }
    }
  }
  

  async goToNext(idx: number) {
    let alertHeader: string;
    let alertMessage: string;
    const correct = new Audio('../../assets/img/bg/home-vec.png');
    const wrong = new Audio('../../assets/img/bg/home-vec.png');
    if (this.quesAnsArray[idx].answer == this.answer) {
      this.quesAnsArray[idx].status = 1;
      alertHeader="Yayyy!";
      alertMessage="I guess you can pass homework now...";
    } else {
      this.quesAnsArray[idx].status = 2;
      alertHeader="Yikesss";
      alertMessage="Too bad";
    }
  
    const alert = await this.alertController.create({
      header: alertHeader,
      message: alertMessage,
      backdropDismiss: false,
      buttons: [{
        text: 'Next',
        handler: () => {
          this.currentIndex++;
          this.answer = "";
  
          if (this.currentIndex >= this.quesAnsArray.length) {
            this.router.navigate(['/']);
            this.answer = "";
            this.currentIndex = 0;
          }
        }
      }]
    });
  
    alert.onDidDismiss().then(() => {
      alert.present();
    });
  
    alert.present();
  }

  
  

  choiceRadio(idx:number, itx:number){
    for (let i = 0; i < this.quesAnsArray[idx].choices.length; i++) {
      if(i!=itx){
        this.quesAnsArray[idx].choices[i].selected=false;
      }
      else{
        this.quesAnsArray[idx].choices[i].selected = true
        this.answer=this.quesAnsArray[idx].choices[i].choice;
      }
    }
  }

}
