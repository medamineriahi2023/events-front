import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { PublicationsService } from 'app/core/services/publications/publications.service';
import { Publication } from 'app/models/publication.model';



@Component({
  selector: 'app-list-publication',
  templateUrl: './list-publication.component.html',
  styleUrls: ['./list-publication.component.scss']
})
export class ListPublicationComponent implements OnInit {
  @Input()
  publications: Publication[]
  constructor(private publicationsService: PublicationsService, private cdRef: ChangeDetectorRef) {

  }
  ngOnInit(): void {
    console.log(this.publications)
  }
}
