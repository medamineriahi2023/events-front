import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { PublicationsService } from 'app/core/services/publications/publications.service';
import { Message } from 'app/models/Message';
import { MessagesService } from 'app/core/services/messages/messages.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Topic } from 'app/models/topic.model';
import { KeycloakService } from 'keycloak-angular';
import { User } from 'app/models/User';
@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent {
  @Input()
  messages: Message[]
  @Input()
  receiver: string;
  messageForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private publicationsService: PublicationsService,
    private messagesService: MessagesService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private keycloakService: KeycloakService
  ) {

    this.messageForm = this.fb.group({
      text: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    console.log(this.messages)
  }


  onAddMessage() {
    // console log type property
    if (this.messageForm.valid) {
      this.keycloakService.loadUserProfile().then(u => {
        let message = new Message();
        const sendor: User = { id: u.id };
        const receiver: User = { id: this.receiver };
        message.sender = sendor;
        message.date = new Date();
        message.seen = false;
        message.archived = false;
        message.receiver = receiver;
        console.log(message);
        this.messagesService.save(message).subscribe((data) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Publication created successfully' });
        });
      });

    }
  }
}
