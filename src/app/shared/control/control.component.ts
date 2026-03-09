import {
  afterRender,
  AfterContentInit,
  Component,
  input,
  ViewEncapsulation,
  HostBinding,
  HostListener,
  inject,
  ElementRef,
  ContentChild,
  contentChild,
  afterNextRender,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }

  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;

  constructor() {
    afterRender(() => {
      console.log('After Render');
    });

    afterNextRender(() => {
      console.log('After Next Render')
    });
  }

  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  private el = inject(ElementRef);

  label = input.required<string>();

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control());
  }

  ngAfterContentInit() {
    console.log(this.control());
  }
}
