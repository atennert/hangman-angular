import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() label = 'Stick figure hanging on the gallows';

  constructor() { }

  ngOnInit(): void {
  }

}
