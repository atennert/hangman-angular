import {Component} from '@angular/core';
import {CONFIG} from "../app.config";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  title = CONFIG.TITLE;

}
