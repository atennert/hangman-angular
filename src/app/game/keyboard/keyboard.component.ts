import { EventEmitter } from '@angular/core';
import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  @Output() keyEvent = new EventEmitter<string>();

  alphabet = [...'abcdefghijklmnopqrstuvwxyzäöüß'];

  private keyFocusIndex = 0;

  /** Actions for navigating the focus to different keys on the keyboard */
  private readonly keyboardNavigation: { [index: string]: () => void } = {
    ArrowRight: () => {
      if (this.keyFocusIndex % 10 < 9) {
        this.focusKey(this.keyFocusIndex + 1);
      }
    },
    ArrowLeft: () => {
      if (this.keyFocusIndex % 10 > 0) {
        this.focusKey(this.keyFocusIndex - 1);
      }
    },
    ArrowDown: () => {
      if (this.keyFocusIndex < 20) {
        this.focusKey(this.keyFocusIndex + 10);
      }
    },
    ArrowUp: () => {
      if (this.keyFocusIndex > 9) {
        this.focusKey(this.keyFocusIndex - 10);
      }
    },
    End: () => {
      this.focusKey(this.keyFocusIndex - (this.keyFocusIndex % 10) + 9);
    },
    Home: () => {
      this.focusKey(this.keyFocusIndex - (this.keyFocusIndex % 10));
    }
  };

  constructor() {
  }

  ngOnInit(): void {
    window.addEventListener('keyup', this.handleWindowKeyEvent.bind(this));
  }

  /**
   * Handle the input of a letter.
   * @param letter Letter
   */
  handleKeyEvent(letter: string): void {
    const keyIndex = this.alphabet.indexOf(letter);
    const key = KeyboardComponent.getKey(keyIndex);
    key.setAttribute('aria-selected', 'true');
    this.keyFocusIndex = keyIndex;
    console.trace('Keyboard.handleKeyEvent: ' + letter);
    this.keyEvent.emit(letter);
  }

  /**
   * Forward alphabet keys to the logic and handle navigation keys.
   * @param event keyboard event
   */
  private handleWindowKeyEvent(event: KeyboardEvent): void {
    const keyIndex = this.alphabet.indexOf(event.key);
    if (keyIndex >= 0) {
      this.handleKeyEvent(event.key);
    } else if ((document.activeElement as HTMLElement).dataset.key) {
      const moveKeySelection = this.keyboardNavigation[event.key];
      if (moveKeySelection) {
        moveKeySelection();
      }
    }
  }

  /**
   * Focus a certain keyboard key.
   * @param index key index
   */
  private focusKey(index: number): void {
    this.keyFocusIndex = index;
    const key = KeyboardComponent.getKey(index);
    key.focus()
  }

  /**
   * Get the key (Button) for the given index.
   * @param index key index
   */
  private static getKey(index: number): HTMLButtonElement {
    const keyboardContainer = document.querySelector('.keyboard__container')!;
    return keyboardContainer.childNodes.item(index).firstChild as HTMLButtonElement;
  }
}
