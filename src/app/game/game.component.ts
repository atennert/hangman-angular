import {Component, OnInit} from '@angular/core';
import {CONFIG} from "../app.config";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  title = CONFIG.TITLE;
  currentErrors = 0;
  maxErrors = CONFIG.MAX_ERRORS;
  currentWord = '__________________ ___________________';

  constructor() {
  }

  ngOnInit(): void {
  }

  handleKeyEvent(key: string): void {
    console.log(key)
  }
}
