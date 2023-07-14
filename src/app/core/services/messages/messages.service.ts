import { Injectable } from '@angular/core';
import { AbstractServiceService } from '../abstract-service.service';
import { Message } from 'app/models/Message';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagesService extends AbstractServiceService<Message> {

  constructor(public http: HttpClient) {
    super('message', http);
}
}
