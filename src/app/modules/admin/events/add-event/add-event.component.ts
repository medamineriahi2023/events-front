import { Component, Input, OnInit, Output } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { EventsService } from 'app/core/services/events/events.service';
import { Category } from 'app/models/Category';
import { Type, Type2LabelMapping } from 'app/models/Type';
import { Visibility, Visibility2LabelMapping } from 'app/models/Visibility';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
    selector: 'app-add-event',
    templateUrl: './add-event.component.html',
    styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {
    title: string;
    eventForm!: FormGroup;
    // type: Type;
    public Type2LabelMapping = Type2LabelMapping;
    public Visibility2LabelMapping = Visibility2LabelMapping;
    public types = Object.keys(Type).filter(
        (value) => typeof value === 'string'
    );
    public visibilities: any;
    // public visibilities = Object.keys(Visibility).filter(
    //     (value) => typeof value === 'string'
    // );

    constructor(
        private fb: FormBuilder,
        private eventsService: EventsService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {
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
        this.visibilities = [
            { name: Visibility2LabelMapping[0] },
            { name: Visibility2LabelMapping[1] },
        ];
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
