import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';
import { AddPublicationComponent } from './add-publication/add-publication.component';
import { ListPublicationComponent } from './list-publication/list-publication.component';
import { PublicationDetailsComponent } from './publication-details/publication-details.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AddPublicationComponent,
    ListPublicationComponent,
    PublicationDetailsComponent
  ],
  imports: [
    CommonModule,
    PublicationsRoutingModule,
    ButtonModule
  ]
})
export class PublicationsModule { }
