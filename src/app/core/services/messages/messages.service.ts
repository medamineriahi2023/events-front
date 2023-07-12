import { Injectable } from '@angular/core';
import { AbstractServiceService } from '../abstract-service.service';
import { Message } from 'app/models/Message';
import { HttpClient } from '@angular/common/http';
import { TRISTATECHECKBOX_VALUE_ACCESSOR } from 'primeng/tristatecheckbox';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService extends AbstractServiceService<Message> {

  constructor(public http: HttpClient) {
    super('message', http);
  }

  getMessagesByUserId(userId: string): Observable<Message[]>{
    return this.http.get<Message[]>(this.url+`/`+userId+`/messages`);
  }
}
