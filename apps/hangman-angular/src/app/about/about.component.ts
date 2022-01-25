import { Component, OnInit } from '@angular/core';
import {CONFIG} from "../app.config";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = CONFIG.TITLE;

  constructor() { }

  ngOnInit(): void {
  }

}
