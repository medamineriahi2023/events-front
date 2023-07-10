import { Component, OnInit } from '@angular/core';
import { PublicationsService } from 'app/core/services/publications/publications.service';
import { Publication } from 'app/models/publication.model';

@Component({
  selector: 'app-list-publication',
  templateUrl: './list-publication.component.html',
  styleUrls: ['./list-publication.component.scss']
})
export class ListPublicationComponent implements OnInit{

  publications : Publication[] ;
  constructor(private publicationsService : PublicationsService){

   }
  ngOnInit(): void {
    this.publicationsService.getAll().subscribe((publications)=>{
      this.publications=publications ;
    })

  }

}
