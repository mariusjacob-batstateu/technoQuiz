import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GamePagePageRoutingModule } from './game-page-routing.module';
import { GamePagePage } from './game-page.page';
import { QuizComponent } from '../quiz/quiz.component';
import { DictionaryComponent } from '../dictionary/dictionary.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePagePageRoutingModule,
  ],
  declarations: [GamePagePage, QuizComponent, DictionaryComponent]
})
export class GamePagePageModule {}
