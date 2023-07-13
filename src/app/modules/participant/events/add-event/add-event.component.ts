import { Component, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EventsService } from 'app/core/services/events/events.service';
import { Category } from 'app/models/Category';
import { Type, Type2LabelMapping } from 'app/models/Type';
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
      private confirmationService: ConfirmationService
  ) {
      console.log(this.visibilities);
      console.log(Visibility2LabelMapping[Visibility.PRIVATE]);
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
      // console log type property
      console.log(this.eventForm.value);
      // if (this.eventForm.valid) {
      //   this.eventsService.save(this.eventForm.value).subscribe((data) => {
      //     this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Event added successfully' });
      //   });
      // }
  }

}
