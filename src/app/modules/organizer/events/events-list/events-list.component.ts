import { Component } from '@angular/core';
import { EventsService } from 'app/core/services/events/events.service';
import { Event } from 'app/models/Event';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent {

  events: Event[];

  constructor(private eventsService: EventsService) {
    this.eventsService.getAll().subscribe((data) => {
      this.events = data;
    });
  }
}
