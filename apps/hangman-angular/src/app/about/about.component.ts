import { Component } from '@angular/core';
import {CONFIG} from "../app.config";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = CONFIG.TITLE;
}
