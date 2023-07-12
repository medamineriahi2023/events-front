import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractServiceService } from '../abstract-service.service';
import { Observable } from 'rxjs';
import { Event } from 'app/models/Event';

@Injectable({
    providedIn: 'root',
})
export class EventsService extends AbstractServiceService<Event> {
    constructor(public http: HttpClient) {
        super('event', http);
    }

    archiveEvent(eventId: number): Observable<Event> {
        return this.http.put<Event>(this.url + `/archive/${eventId}`, {});
    }

    rescheduleEvent(
        eventId: number,
        dateDebut: Date,
        dateFin: Date
    ): Observable<Event> {
        var event: Event;
        event.dateDebutEvent = dateDebut;
        event.dateFinEvent = dateFin;
        return this.http.put<Event>(this.url + `/reschedule/${eventId}`, {
            dateDebut,
            dateFin,
        });
    }

    getOnlineEvents(): Observable<Event[]> {
        return this.http.get<Event[]>(this.url + `/online`);
    }

    getPresentielEvents(): Observable<Event[]> {
        return this.http.get<Event[]>(this.url + `/presentiel`);
    }

    getOwnerEvents(id: string): Observable<Event[]> {
        return this.http.get<Event[]>(this.url + `/organizer/${id}`);
    }

    getEventsByName(name: string): Observable<Event[]> {
        return this.http.get<Event[]>(this.url + `/name/${name}`);
    }
    getEventsByCategory(categoryId: string): Observable<Event[]> {
        return this.http.get<Event[]>(this.url + `/category/${categoryId}`);
    }
    getEventsByLocation(locationName: string): Observable<Event[]> {
        return this.http.get<Event[]>(this.url + `/name/${locationName}`);
    }
<<<<<<< HEAD
=======
    getEventsOfOrganizer(organizerId: string): Observable<Event[]> {
        return this.http.get<Event[]>(this.url + `/organizer/${organizerId}`);
    }
>>>>>>> 37c8248db68fcfc45e7f81f6c03a6c38b45661d3
}
