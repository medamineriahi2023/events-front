import { Component, Input, OnInit, Output } from '@angular/core';
import { EventsService } from 'app/core/services/events/events.service';
import { Event } from 'app/models/Event';
import { KeycloakService } from 'keycloak-angular';

@Component({
    selector: 'app-events-list',
    templateUrl: './events-list.component.html',
    styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
    @Input()
    @Output()
    connectedUser: any;
    visible: boolean = false;
    events: Event[];
    filteredEvents: Event[];
    filtering: boolean = false;
    searchTerm: string;
    constructor(
        private eventsService: EventsService,
        private keycloakService: KeycloakService
    ) {
        this.eventsService.getAll().subscribe((events) => {
            this.events = events;
            console.log(this.events);
        });
    }

    ngOnInit(): void {
        this.keycloakService.loadUserProfile().then((e) => {
            this.connectedUser = e;
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

    showAddUser() {
        this.visible = true;
    }
}
