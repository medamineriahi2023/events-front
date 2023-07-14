import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MainComponent } from './main/main.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    MainComponent,
    MessagesListComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    TableModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ConfirmationService, MessageService
  ]
})
export class MessagesModule { }
