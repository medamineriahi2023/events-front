import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'app/core/services/messages/messages.service';
import { Message } from 'app/models/Message';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit{
  messages: Message[];

  constructor(private messagesService: MessagesService){}

  ngOnInit(): void {
    this.messagesService.getMessagesByUserId("7776726f-1a91-4939-ae4b-51e177460e83").subscribe((data)=> {
      this.messages = data;
    })
  }

}
