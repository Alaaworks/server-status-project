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

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  @Output() add = new EventEmitter<{
    title: string;
    request: string;
  }>();

  onSubmit(title: string, ticketText: string) {
    this.add.emit({
      title: title,
      request: ticketText,
    });
    this.form().nativeElement.reset();
  }

  ngOnInit() {
    console.log('On Init');
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit() {
    console.log('After View Init');
    console.log(this.form().nativeElement);
  }
}
