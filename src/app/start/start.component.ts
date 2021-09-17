import {Component, OnInit} from '@angular/core';
import {CONFIG} from "../app.config";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  title = CONFIG.TITLE;

  constructor() {
  }

  ngOnInit(): void {
  }

}
