import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GameOverComponent} from './game-over.component';
import {WordService} from "../word.service";
import {ImageComponent} from "../image/image.component";

describe('GameOverComponent', () => {
  let component: GameOverComponent;
  let fixture: ComponentFixture<GameOverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameOverComponent, ImageComponent],
      providers: [{provide: WordService, useValue: {getWord: () => Promise.resolve("abc")}}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
