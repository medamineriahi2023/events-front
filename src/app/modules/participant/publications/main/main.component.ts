import { ChangeDetectorRef, Component } from '@angular/core';
import { PublicationsService } from 'app/core/services/publications/publications.service';
import { Publication } from 'app/models/publication.model';
import { Topic } from 'app/models/topic.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  panels: any[] = [];
  selectedPanel = '';
  comp: any;
  publications : Publication[] ;
  filteredPublications : Publication[];
  constructor(private publicationsService : PublicationsService, private cdRef: ChangeDetectorRef){

   }
  ngOnInit(): void {
    this.panels = [
      {
          id: 'feedback',
          icon: 'heroicons_outline:user-group',
          title: 'Feedback',
          description: 'Review feedback on e-vents'
      },
      {
          id: 'public',
          icon: 'heroicons_outline:lock-closed',
          title: 'Public',
          description: 'Share your thoughts'
      }
  ];
    this.publicationsService.getAll().subscribe((publications)=>{
      this.publications=publications ;
    })

  }

  detectComp(comp: any):void {
    if (comp === 'public') {
      console.log(this.publications);
      this.filteredPublications = this.publications.filter((publication) => publication.topic.toString()  == "PUBLIC")
    }
    if (comp === 'feedback') {
      this.filteredPublications = this.publications.filter((publication) => publication.topic.toString() == "FEEDBACK")
    }
    if(comp === ''){
      this.filteredPublications = [];
    }
    this.selectedPanel = comp;
}
}
