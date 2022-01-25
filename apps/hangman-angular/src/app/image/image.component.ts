import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  label = 'Stick figure hanging on the gallows';

  @Input() showParts: BehaviorSubject<number> | undefined;

  constructor() {
  }

  ngOnInit(): void {
    if (this.showParts != undefined) {
      const parts = document.querySelectorAll('.hangman__part');
      Array.from(parts).forEach(ImageComponent.hide);
      this.showParts.subscribe(fails => ImageComponent.update(fails, parts.length));
      for (let i = 0; i <= this.showParts.getValue(); i++) {
        ImageComponent.show(i);
      }
    }
  }

  private static hide(e: Element) {
    e.setAttribute('style', 'visibility:hidden');
  }

  private static show(index: number) {
    document.querySelector(`.hangman__part--${index}`)?.removeAttribute('style');
  }

  private static update(fails: number, parts: number) {
    if (fails > 0 && fails <= parts) {
      ImageComponent.show(fails);
    }
  }
}
