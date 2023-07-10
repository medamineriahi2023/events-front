import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';
import { AddPublicationComponent } from './add-publication/add-publication.component';
import { ListPublicationComponent } from './list-publication/list-publication.component';
import { PublicationDetailsComponent } from './publication-details/publication-details.component';


@NgModule({
  declarations: [
    AddPublicationComponent,
    ListPublicationComponent,
    PublicationDetailsComponent
  ],
  imports: [
    CommonModule,
    PublicationsRoutingModule
  ]
})
export class PublicationsModule { }
