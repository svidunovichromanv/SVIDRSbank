import {Directive, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appOddBGcolor]'
})
export class OddBGcolorDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @Input('appOddBGcolor') index: number;
  constructor() { }
  ngOnInit(): void {
    if (this.index % 2 === 0) {
      this.backgroundColor = '#eee';
    }
  }

}
