import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsListComponent } from './events-list/events-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEventComponent } from './add-event/add-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    declarations: [
        CreateEventComponent,
        EventsListComponent,
        AddEventComponent,
        EventDetailsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        EventsRoutingModule,
        ToastModule,
        DialogModule,
        ReactiveFormsModule,
        ButtonModule,
        DropdownModule,
        CalendarModule,
        InputTextModule
    ],
    providers: [MessageService, ConfirmationService],
})
export class EventsModule {}
