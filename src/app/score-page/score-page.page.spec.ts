import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScorePagePage } from './score-page.page';

describe('ScorePagePage', () => {
  let component: ScorePagePage;
  let fixture: ComponentFixture<ScorePagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScorePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
