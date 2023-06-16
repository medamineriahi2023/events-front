import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AbstractServiceService} from "../abstract-service.service";
import {Location} from "../../../models/Location";

@Injectable({
  providedIn: 'root'
})
export class LocationService extends AbstractServiceService<Location>{

    constructor(public http:HttpClient) {
        super("location" , http);
    }
}
