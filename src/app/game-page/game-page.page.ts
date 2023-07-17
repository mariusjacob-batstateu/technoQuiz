import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.page.html',
  styleUrls: ['./game-page.page.scss']
})
export class GamePagePage implements OnInit{
  dictionaryItem: any[];
  currentIndex: number=0;
  constructor(private router: Router) { 
    this.dictionaryItem=[
      { title:"Item1", description:"Description1"},
      { title:"Item2", description:"Description2"},
      { title:"Item3", description:"Description3"},
    ];
  }


  ngOnInit() {
  }

  navigateToDictionary(){
    this.router.navigate(['/dictionary']);
  }
}
