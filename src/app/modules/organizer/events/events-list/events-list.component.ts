import { Component } from '@angular/core';
import { EventsService } from 'app/core/services/events/events.service';
import { Event } from 'app/models/Event';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent {

  events: Event[];

  constructor(private eventsService: EventsService, private messageService: MessageService, private confirmationService: ConfirmationService) {
    this.eventsService.getEventsOfOrganizer("91139759-a628-4a68-9aa6-dd38262ebc7c").subscribe((data) => {
      this.events = data;
      console.log(this.events);
    });
  }
}