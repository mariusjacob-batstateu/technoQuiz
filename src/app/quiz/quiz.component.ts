import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent  implements OnInit {
  answer: string = "";
  public alertButtons=[{
    text:"Next",
    cssClass: "alert-button-next"
  }];
  constructor() { }

  ngOnInit() {}
  quesAnsArray: any[] = [
    { question: 'What is the ds of hatdog?', answer:"Halaman", 
    choices:[
      { choice: "Halaman", selected: false },
      { choice: "Hatdog", selected: false },
      { choice: "Halimbawa", selected: false }
    ]},    

    { question: 'Every stimulation?', answer:"Halaman", 
    choices:[
      { choice: "Halaman", selected: false },
      { choice: "Hatdog", selected: false },
      { choice: "Halimbawa", selected: false }
    ]},  
  ];


  choiceRadio(idx:number, itx:number){
    for (let i = 0; i < this.quesAnsArray[idx].choices.length; i++) {
      if(i!=itx){
        this.quesAnsArray[idx].choices[i].selected=false;
      }
      else{
        this.quesAnsArray[idx].choices[i].selected = !this.quesAnsArray[idx].choices[i].selected;
        this.answer=this.quesAnsArray[idx].choices[i].choice;
      }
    }
  }

  submit(quesIdx:number){
    console.log("Question: "+this.quesAnsArray[quesIdx].question);
    console.log("Correct Answer: "+this.quesAnsArray[quesIdx].answer);
    console.log(this.answer);
    if (this.quesAnsArray[quesIdx].answer == this.answer) {
      console.log("tama dear");
    }
    else{
      console.log("Mali dear");
    }
  }

  // async submit(quesIdx: number) {

  //   console.log("Question: "+this.quesAnsArray[quesIdx].question);
  //   console.log("Correct Answer: "+this.quesAnsArray[quesIdx].answer);
  //   console.log(this.answer);

  //   const alert=await this.alertController.create({
  //     header:"Header",
  //     subHeader:"sub header",
  //     message:"message",
  //     buttons: ['OK']
  //   });
  //   await alert.present();
  // }
}
