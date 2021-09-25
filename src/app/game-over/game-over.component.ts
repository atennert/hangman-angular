import {Component, OnInit} from '@angular/core';
import {CONFIG} from "../app.config";
import {GameService} from "../game/game.service";

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

  title = CONFIG.TITLE;
  gameState = '';

  constructor(public gameService: GameService) {
  }

  ngOnInit(): void {
    this.gameState = this.gameService.success$.getValue() ? 'won' : 'lost';
  }
}
