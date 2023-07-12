import { Injectable } from '@angular/core';
import {AbstractServiceService} from "../abstract-service.service";
import { Publication } from 'app/models/publication.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService   extends AbstractServiceService<Publication> {

  constructor(public http:HttpClient) {
    super("publication",http)
}
}
