import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss'],
})
export class DictionaryComponent implements OnInit {
  quesAnsArray: any[] = []; // Replace with the actual type of your dictionary elements
  answer: string = "";
  currentIndex = 0;

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.quesAnsArray = [
      { question: 'What is the ds of hatdog?', answer:"Halaman", status:0,
      choices:[
        { choice: "Halaman", selected: false },
        { choice: "Hatdog", selected: false },
        { choice: "Halimbawa", selected: false }
      ]},    
  
      { question: 'Every stimulation?', answer:"Halimbawa1", status:0,
      choices:[
        { choice: "Halimbawa1", selected: false },
        { choice: "Halimbawa2", selected: false },
        { choice: "Halimbawa3", selected: false }
      ]}, 
      
      { question: 'This is lit <3', answer:"choice", status:0,
      choices:[
        { choice: "choice", selected: false },
        { choice: "choice2", selected: false },
        { choice: "choice3", selected: false }
      ]}, 
    ];
  }

  async goToNext(idx: number) {
    if (this.quesAnsArray[idx].answer == this.answer) {
      this.quesAnsArray[idx].status = 1;
    } else {
      this.quesAnsArray[idx].status = 2;
    }
  
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'sample i2',
      backdropDismiss: false,
      buttons: [{
        text: 'Next',
        handler: () => {
          this.currentIndex++;
          this.answer = "";
  
          if (this.currentIndex >= this.quesAnsArray.length) {
            this.router.navigate(['/']);
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
