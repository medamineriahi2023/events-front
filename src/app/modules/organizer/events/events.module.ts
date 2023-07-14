import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RippleModule } from 'primeng/ripple';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TagModule } from 'primeng/tag';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MyEventsComponent } from './my-events/my-events.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventPreviewComponent } from './event-preview/event-preview.component';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  declarations: [
    EventsListComponent,
    EventPreviewComponent,
    MyEventsComponent
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
    ConfirmDialogModule
  ],
  exports: [
    MyEventsComponent
  ],
  providers: [MessageService, ConfirmationService]
})
export class EventsModule { }
