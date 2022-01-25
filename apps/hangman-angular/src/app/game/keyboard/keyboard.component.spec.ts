import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KeyboardComponent} from './keyboard.component';
import {By} from "@angular/platform-browser";

describe('KeyboardComponent', () => {
  let component: KeyboardComponent;
  let fixture: ComponentFixture<KeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the complete key set`, () => {
    const keys = fixture.nativeElement.querySelectorAll('.key');
    const alphabet = component.alphabet;

    Array.from(keys)
      .forEach((key, index) => {
        expect((key as HTMLElement).textContent).toEqual(alphabet[index]);
        expect((key as HTMLElement).dataset.key).toEqual(alphabet[index]);
      });
  });

  it(`should send a key press`, () => {
    const keyIndex = Math.floor(Math.random() * component.alphabet.length);
    const key = component.alphabet[keyIndex];
    const spyComponent = jest.spyOn(component.keyEvent, 'emit');
    console.log(`checking for ${key}`);

    const button = fixture.debugElement.query(By.css(`.key[data-key="${key}"]`));
    button.triggerEventHandler('click', null);

    expect(spyComponent).toBeCalledWith(key);
  });
});
