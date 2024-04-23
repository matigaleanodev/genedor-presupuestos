import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[numberOnly]',
  standalone: true,
})
export class NumberOnlyDirective {
  @Input('decimals') decimals: number = 0;

  constructor(private el: ElementRef) {}

  private check(value: string, decimals: number): number {
    if (decimals <= 0) {
      const resolve = String(value).match(new RegExp(/^\d+$/));
      return Number(resolve);
    } else {
      const regExpString =
        '^\\s*((\\d+(\\.\\d{0,' +
        decimals +
        '})?)|((\\d*(\\.\\d{1,' +
        decimals +
        '}))))\\s*$';
      const resolve = String(value).match(new RegExp(regExpString));
      return Number(resolve);
    }
  }

  private specialKeys = [
    'Backspace',
    'Tab',
    'End',
    'Home',
    'ArrowLeft',
    'ArrowRight',
    'Delete',
  ];

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    let current: string = this.el.nativeElement.value;
    let next: string = current.concat(event.key);

    if (next && !this.check(next, this.decimals)) {
      event.preventDefault();
    }
  }
}
