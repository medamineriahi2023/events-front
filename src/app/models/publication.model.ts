import { React } from "./React";
import { Topic } from "./topic.model";

export class Publication {    
     id : number ;
     date: Date; 
     content: String ;
     topic : Topic ;
     users : String ;
     creatorId : String ;
     reacts : React[] ;
     comments : Comment[] ;
}
