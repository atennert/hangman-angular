import { Component } from '@angular/core';
import {CONFIG} from "../app.config";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {

  title = CONFIG.TITLE;

}
