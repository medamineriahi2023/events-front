import { Component, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CategoriesService } from 'app/core/services/categories/categories.service';
import { EventsService } from 'app/core/services/events/events.service';
import { LocationService } from 'app/core/services/location/location.service';
import { Category } from 'app/models/Category';
import { Event } from 'app/models/Event';
import { Location } from 'app/models/Location';
import { Type, Type2LabelMapping } from 'app/models/Type';
import { User } from 'app/models/User';
import { Visibility, Visibility2LabelMapping } from 'app/models/Visibility';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent {
  title: string;
  eventForm!: FormGroup;
  categories: Category[];
  locations: Location[];
  public type2LabelMapping = Type2LabelMapping;
  public visibility2LabelMapping = Visibility2LabelMapping;
  public types = Object.values(Type).filter(
      (value) => typeof value === 'string'
  );

  public visibilities = Object.values(Visibility).filter(
      (value) => typeof value === 'string'
  );

  constructor(
      private fb: FormBuilder,
      private eventsService: EventsService,
      private messageService: MessageService,
      private confirmationService: ConfirmationService,
      private keycloakService: KeycloakService,
      private categoriesService: CategoriesService,
      private locationService: LocationService
  ) {
      console.log(this.visibilities);
      console.log(Visibility2LabelMapping[Visibility.PRIVATE]);
      this.categoriesService.getAll().subscribe((categories)=>{this.categories = categories;});
      this.locationService.getAll().subscribe((locations)=> {this.locations = locations;});
      this.eventForm = this.fb.group({
          name: [''],
          description: [''],
          dateDebutEvent: [''],
          dateFinEvent: [''],
          type: new FormControl<Type | null>(null),
          category: new FormControl<Category | null>(null),
          visibility: new FormControl<Visibility | null>(null),
          backgroundImage: [''],
          eventImage: [''],
          video: [''],
          location: new FormControl<Location | null>(null),
          locationName: [''],
          street: [''],
          zipCode: [''],
      });
  }

  ngOnInit(): void {

  }
  @Input()
  @Output()
  visible: false;
  onAddEvent() {
      let event : Event = new Event();
      console.log(this.eventForm.value);

      if (this.eventForm.valid) {
        
          this.keycloakService.loadUserProfile().then(u => {
            const organizer: User = {id: u.id};
            let event : Event = new Event();
            let category: Category = new Category();
            let location: Location = new Location();
            event.name = this.eventForm.value.content;
            event.dateDebutEvent = this.eventForm.value.dateDebut;
            event.dateFinEvent = this.eventForm.value.dateFinEvent;
            event.type = this.eventForm.value.type;
            event.visibility = this.eventForm.value.visibility;
            event.organizer = organizer
            event.backgroundImage = this.eventForm.value.backgroundImage;
            event.eventImage = this.eventForm.value.eventImage;
            event.video = this.eventForm.value.video;
            event.archived = false;
            event.description = this.eventForm.value.description,
            event.location = this.eventForm.value.location;
            event.locationName = this.eventForm.value.locationName;
            event.rue = this.eventForm.value.rue;
            event.zipCode = this.eventForm.value.zipCode;
            event.location = this.eventForm.value.location;
            event.category  = this.eventForm.value.category;
             this.eventsService.save(event).subscribe((data) => {
              console.log(event);
               this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Event created successfully' });
             });
             
          });
      }
  }

}
