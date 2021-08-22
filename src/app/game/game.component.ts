import {Component, OnInit} from '@angular/core';
import {AppSettings} from "../AppSettings";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  title = AppSettings.TITLE;
  currentErrors = 0;
  maxErrors = AppSettings.MAX_ERRORS;
  currentWord = '__________________ ___________________';

  constructor() {
  }

  ngOnInit(): void {
  }

  handleKeyEvent(key: string): void {
    console.log(key)
  }
}
