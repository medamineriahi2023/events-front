import { Component } from '@angular/core';
import { EventsService } from 'app/core/services/events/events.service';
import { Event } from 'app/models/Event';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent {
  events: Event[];

  constructor(private eventsService: EventsService, private messageService: MessageService, private confirmationService: ConfirmationService) {
    this.eventsService.getAll().subscribe((data) => {
      this.events = data;
      console.log(this.events);
    });
  }
}
