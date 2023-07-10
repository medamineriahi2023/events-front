import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'app/core/services/events/events.service';
import { Event } from 'app/models/Event';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private eventService: EventsService) { }
  event$!: Event;
  id: string;
  joinEvent(){}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.eventService.get(this.id).subscribe((data) => {
        this.event$ = data;
        console.log(this.event$)
      });
    })
  }
}
