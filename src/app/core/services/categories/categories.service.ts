import { Injectable } from '@angular/core';
import { Category } from 'app/models/Category';
import { AbstractServiceService } from '../abstract-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends AbstractServiceService<Category> {

  constructor(public http: HttpClient) {
    super('category', http);
}

}
