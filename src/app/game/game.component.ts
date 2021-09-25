import {Component, OnInit} from '@angular/core';
import {CONFIG} from "../app.config";
import {GameService} from "./game.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  title = CONFIG.TITLE;
  currentErrors = 0;
  maxErrors = CONFIG.MAX_ERRORS;

  constructor(public gameService: GameService) {
  }

  ngOnInit(): void {
    this.gameService.initialize()
  }

  handleKeyEvent(key: string): void {
    this.gameService.guessLetter(key);
  }
}
