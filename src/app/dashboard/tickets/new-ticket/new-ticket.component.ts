import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  viewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @ViewChild('form') private form ?: ElementRef<HTMLFormElement>

  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  enteredTitle = '';
  enteredText = '';

  @Output() add = new EventEmitter<{
    title: string;
    request: string;
  }>();

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      request: this.enteredText,
    });
    // this.form().nativeElement.reset();
    this.enteredText = '';
    this.enteredTitle = '';
  }

  ngOnInit() {
    console.log('On Init');
    // console.log(this.form().nativeElement);
  }

  ngAfterViewInit() {
    console.log('After View Init');
    // console.log(this.form().nativeElement);
  }
}
