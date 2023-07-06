import { Category } from "./Category";
import { Type } from "./Type";
import { User } from "./User";
import { Visibility } from "./Visibility";

export class Event{
    id: number;
    name: string;
    dateDebutEvent: Date;
    dateFinEvent: Date;
    type: Type;
    visibility: Visibility;
    category: Category;
    organizer: User;
    staffs: User[];
    participants: User[];
    backgroundImage: string;
    eventImage: string;
    video: string;
    archived: boolean;
    description: boolean;
    location: Location;
    locationName: string;
    rue: string;
    zipCode: string;
}
