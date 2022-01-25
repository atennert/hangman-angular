import {Component, OnInit} from '@angular/core';
import {CONFIG} from "../app.config";
import {GameService} from "./game.service";
import {filter} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  title = CONFIG.TITLE;
  maxErrors = CONFIG.MAX_ERRORS;

  constructor(public gameService: GameService, private router: Router) {
  }

  ngOnInit(): void {
    this.gameService.initialize(this.maxErrors);

    this.gameService.success$.pipe(
      filter(v => v != undefined))
      .subscribe(() => this.router.navigate(['over']));
  }

  handleKeyEvent(key: string): void {
    this.gameService.guessLetter(key);
  }
}
