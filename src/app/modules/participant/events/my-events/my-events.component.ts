import { Component } from '@angular/core';
import { EventsService } from 'app/core/services/events/events.service';
import { Event } from 'app/models/Event';
import { KeycloakService } from 'keycloak-angular';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent {
  events: Event[];
  clonedEvents: { [s: number]: Event } = {};
  constructor(private eventsService: EventsService, private messageService: MessageService, private confirmationService: ConfirmationService, private keycloakService: KeycloakService) {
    this.keycloakService.loadUserProfile().then(e => {
      this.eventsService.getEventsOfOrganizer(e.id).subscribe((data) => {
        this.events = data;
        console.log(this.events);
      });
    });

  }
  onRowEditSave(event: Event) {
    console.log(event);
    if (event.name && event.dateDebutEvent && event.dateFinEvent && event.category) {
      this.eventsService.update(event).subscribe(e => console.log(e));
      delete this.clonedEvents[event.id as number];
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Event is updated' });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error has occured, check for empty fields!' });
    }
  }

  onRowEditCancel(event: Event, index: number) {
    this.events[index] = this.clonedEvents[event.id as number];
    delete this.clonedEvents[event.id as number];
  }
}