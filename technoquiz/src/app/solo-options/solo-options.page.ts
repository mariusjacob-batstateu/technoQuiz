import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solo-options',
  templateUrl: './solo-options.page.html',
  styleUrls: ['./solo-options.page.scss'],
})
export class SoloOptionsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  buttonsArray: any[] = [
    { label: 'Java', selected: false },
    { label: 'HTML/CSS', selected: false },
    { label: 'IT Trends', selected: false },
    { label: 'Python', selected: false },
    { label: 'Terminologies', selected: false },
    { label: 'Algorithms', selected: false },
    { label: 'UI/UX', selected: false },
    { label: 'IT Concepts', selected: false }
  ];

  clickedButtons: string[] = [];

  toggleButton(button: any) {
    button.selected = !button.selected;
  }

  submit() {
    this.clickedButtons = this.buttonsArray
      .filter(button => button.selected)
      .map(button => button.label);
    console.log(this.clickedButtons);
    this.router.navigate(['game-page'])
  }
}
