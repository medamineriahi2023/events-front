import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PublicationsService } from 'app/core/services/publications/publications.service';
import { Publication } from 'app/models/publication.model';
import { Topic, Topic2LabelMapping } from 'app/models/topic.model';
import { KeycloakService } from 'keycloak-angular';
import { ConfirmationService, MessageService } from 'primeng/api';
import {User} from 'app/models/User';
@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.scss']
})
export class AddPublicationComponent {
  publicationForm!: FormGroup;
  public topic2LabelMapping = Topic2LabelMapping;
  public topics = Object.values(Topic).filter(
    (value) => typeof value === 'string'
  );
  
  public visibilities: any;
  // public visibilities = Object.keys(Visibility).filter(
  //     (value) => typeof value === 'string'
  // );

  constructor(
    private fb: FormBuilder,
    private publicationsService: PublicationsService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private keycloakService: KeycloakService
  ) {
    console.log(this.topics);
    console.log(this.topic2LabelMapping[Topic.FEEDBACK]);
    this.publicationForm = this.fb.group({
      content: ['', Validators.required],
      topic: new FormControl<Topic | null>(null, Validators.required),

    });
  }

  ngOnInit(): void {

  }

  onAddPublication() {
    // console log type property
    if (this.publicationForm.valid) {
      console.log(this.publicationForm.value.topic)
      this.keycloakService.loadUserProfile().then(u => {
        let publication= new Publication;
        const creator: User = {id: u.id};
        publication.creator = creator;
        publication.content = this.publicationForm.value.content;
        publication.topic = this.publicationForm.value.topic;
        console.log(publication.topic);
        publication.date = new Date();
        this.publicationsService.save(publication).subscribe((data) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Publication created successfully' });
        });
      });

    }
  }
}
