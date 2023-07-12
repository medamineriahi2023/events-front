import { React } from "./React";
import { User } from "./User";
import { Topic } from "./topic.model";

export class Publication {    
     id : number ;
     date: Date; 
     content: string ;
     topic : Topic ;
     users : string ;
     creator : User ;
     reacts : React[] ;
     comments : Comment[] ;
}


