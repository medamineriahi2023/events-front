import { ChangeDetectorRef, Component } from '@angular/core';
import { MessagesService } from 'app/core/services/messages/messages.service';
import { Message } from 'app/models/Message';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  panels: any[] = [];
  selectedPanel = '';
  comp: any;
  messages: Message[];
  filteredMessages: Message[] = [];
  constructor(private messagesService: MessagesService, private cdRef: ChangeDetectorRef, private keycloakService: KeycloakService) {

  }
  ngOnInit(): void {
    this.messagesService.getAll().subscribe((messages) => {
      console.log("yes here")
      this.messages = messages;
      console.log(this.messages);
      this.keycloakService.loadUserProfile().then(u => {
        this.messages.forEach((message)=> {
          console.log(message, u);
          if (message.receiver.id === u.id) {
            if (this.panels.filter(e => e.id === message.sender.id).length == 0) {
              this.panels.push({ "id": message.sender.id, "username": message.sender.username });
              console.log("panels" + this.panels.toString());
            }
          }
          if (message.sender.id === u.id) {
            if (this.panels.filter(e => e.id === message.receiver.id).length == 0) {
              this.panels.push({ "id": message.receiver.id, "username": message.receiver.username });
              console.log("panels" + this.panels.toString());
            }
          }

        })
      });
    })



  }

  detectComp(comp: any): void {
    this.filteredMessages = [];
    console.log(comp)
    this.messages.forEach((value)=> {
      console.log(value.receiver, value.sender)
      console.log(comp)
      if (value.receiver.id  === comp || value.sender.id === comp) {
        console.log(this.filteredMessages);
        this.filteredMessages.push(value);
        console.log(this.filteredMessages);
      }
    })
    this.selectedPanel = comp;
  }
  
}
