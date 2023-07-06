import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsListComponent } from './events-list/events-list.component';


@NgModule({
  declarations: [
    CreateEventComponent,
    EventsListComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
