import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPublicationComponent } from './list-publication/list-publication.component';
import { PublicationDetailsComponent } from './publication-details/publication-details.component';

const routes: Routes = [
  {
    path : "",component:ListPublicationComponent
  },
  {
    path : ":id",component:PublicationDetailsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationsRoutingModule { }
