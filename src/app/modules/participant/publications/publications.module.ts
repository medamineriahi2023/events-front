import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';
import { AddPublicationComponent } from './add-publication/add-publication.component';
import { ListPublicationComponent } from './list-publication/list-publication.component';
import { PublicationDetailsComponent } from './publication-details/publication-details.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { TableModule} from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import {ConfirmationService, MessageService, SharedModule} from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MatButtonModule } from '@angular/material/button';
import { FuseDrawerModule } from '@fuse/components/drawer';
import { IconsModule } from 'app/core/icons/icons.module';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserContainerModule } from 'app/components/user-container/user-container.module';
import { RoleContainerModule } from 'app/components/role-container/role-container.module';
import { MainComponent } from './main/main.component';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AddPublicationComponent,
    ListPublicationComponent,
    PublicationDetailsComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    PublicationsRoutingModule,
    ButtonModule,
    TableModule,
    TagModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    MultiSelectModule,
    RippleModule,
    ToastModule,
    ConfirmDialogModule,
    MatButtonModule,
    FuseDrawerModule,
    IconsModule,
    MatIconModule,
    CommonModule,
    MatInputModule,
    FormsModule,
    SharedModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    MatTooltipModule,
    UserContainerModule,
    RoleContainerModule,
    CardModule
  ],
  providers: [
    MessageService, ConfirmationService
  ]
})
export class PublicationsModule { }
