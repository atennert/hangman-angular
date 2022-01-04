import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {GameComponent} from './game.component';
import {WordService} from "../word.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GameComponent],
      imports: [RouterTestingModule],
      providers: [{provide: WordService, useValue: {getWord: () => Promise.resolve("abc")}}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
