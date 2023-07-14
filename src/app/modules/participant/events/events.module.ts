import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AllEventsComponent } from './all-events/all-events.component';
import { CalendarModule } from 'primeng/calendar';
import { MyEventsComponent } from './my-events/my-events.component';
import { TabViewModule } from 'primeng/tabview';
import { AddEventComponent } from './add-event/add-event.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { MainComponent } from './main/main.component';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  declarations: [
    EventsListComponent,
    MainComponent,
    AllEventsComponent,
    EventDetailsComponent,
    MyEventsComponent,
    AddEventComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    TableModule,
    TagModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    // MultiSelectModule,
    RippleModule,
    ToastModule,
    ConfirmDialogModule,
    TabViewModule,
    CalendarModule
  ],
  providers: [MessageService, ConfirmationService]
})
export class EventsModule { }
