import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GameComponent} from './game.component';
import {WordService} from "../word.service";
import {RouterTestingModule} from "@angular/router/testing";
import {ImageComponent} from "../image/image.component";
import {KeyboardComponent} from "./keyboard/keyboard.component";
import {of} from "rxjs";

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameComponent, ImageComponent, KeyboardComponent],
      imports: [RouterTestingModule],
      providers: [{provide: WordService, useValue: {getWord: () => of("abc")}}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
