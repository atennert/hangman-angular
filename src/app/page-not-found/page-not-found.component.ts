import { Component, OnInit } from '@angular/core';
import {CONFIG} from "../app.config";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  title = CONFIG.TITLE;

  constructor() { }

  ngOnInit(): void {
  }

}
