import { Component, OnInit } from '@angular/core';
import {AppSettings} from "../AppSettings";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = AppSettings.TITLE;

  constructor() { }

  ngOnInit(): void {
  }

}
