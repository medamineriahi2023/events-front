import { Component } from '@angular/core';
import { EventsService } from 'app/core/services/events/events.service';
import { Event } from 'app/models/Event';

@Component({
    selector: 'app-events-list',
    templateUrl: './events-list.component.html',
    styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent {
    events: Event[];
    filteredEvents: Event[];
    filtering: boolean = false;
    searchTerm: string;
    constructor(private eventsService: EventsService) {
        this.eventsService.getAll().subscribe((events) => {
            this.events = events;
        });
    }

    archiveEvent() {
        event: Event;
        this.eventsService.archiveEvent(39).subscribe((event) => {
            console.log(event);
        });
    }

    getOnlineEvents() {
        this.eventsService
            .getOnlineEvents()
            .subscribe((events) => (this.events = events));
    }

    getPresentielEvents() {
        this.eventsService
            .getPresentielEvents()
            .subscribe((events) => (this.events = events));
    }

    filterEvents(searchTerm: string) {
        const filteredName = searchTerm.toLowerCase().trim();
        if (!filteredName) {
            this.filtering = false;
            // If the searchName is empty, display all events
            // No need to modify the events array
        } else {
            // Filter events by name using the searchName value
            this.filtering = true;
            this.filteredEvents = this.events.filter((event) =>
                event.name.toLowerCase().includes(filteredName)
            );
        }
    }
}
