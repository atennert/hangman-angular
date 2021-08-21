import {Component, OnInit} from '@angular/core';
import {AppSettings} from "../AppSettings";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  title = AppSettings.TITLE;

  constructor() {
  }

  ngOnInit(): void {
  }

}
